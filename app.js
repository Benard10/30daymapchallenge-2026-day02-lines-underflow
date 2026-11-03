/* Underflow: browser-only exploration of the bundled OpenStreetMap extract. */
const $=id=>document.getElementById(id);
const escapeHTML=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const emptyCollection=()=>({type:'FeatureCollection',features:[]});
const CATEGORY_LABELS={river:'River',stream:'Stream',drainage:'Urban drainage'};
const TYPE_LABELS={river:'River',stream:'Stream',drain:'Drain',ditch:'Ditch',canal:'Canal'};
const COLORS={river:'#17699b',stream:'#218c8c',drainage:'#8a7293'};
const PRESETS={nairobi:[[36.68,-1.42],[37.04,-1.16]],centre:[[36.79,-1.325],[36.865,-1.255]],west:[[36.69,-1.335],[36.80,-1.22]]};
const colorExpression=['match',['get','category'],'river',COLORS.river,'stream',COLORS.stream,COLORS.drainage];
let map,features=[],visibleFeatures=[],groups=[],selectedKey=null,activeView='nairobi',hoverPopup;
let sourceMetadata=null,detailOpener=null,basemapProblem=false,styleReady=false;
let boundaryData=null;
let storyActive=false,storyIndex=0,storySelection=[];

function storyChapters(){
 const river=groups.find(group=>group.type==='river'&&group.name.toLowerCase()==='nairobi river');
 const streams=features.filter(feature=>feature.properties.category==='stream');
 const drains=features.filter(feature=>feature.properties.category==='drainage');
 const named=name=>features.filter(feature=>(feature.properties.name||'').toLowerCase()===name);
 const drainageBounds=[[36.857,-1.267],[36.866,-1.259]];
 const localDrains=drains.filter(feature=>feature.geometry.coordinates.some(path=>path.some(([x,y])=>x>=drainageBounds[0][0]&&x<=drainageBounds[1][0]&&y>=drainageBounds[0][1]&&y<=drainageBounds[1][1])));
 const km=input=>input.reduce((sum,feature)=>sum+feature.properties.length_km,0).toFixed(1);
 return [
  {title:'Look beyond the roads.',text:'We often read Nairobi through its streets, buildings, and neighbourhoods. These lines offer another perspective: a city threaded with rivers, streams, and drainage channels.',fact:`${km(features)} km`,caption:'of mapped waterways within this study area',hint:'Look for the blue and teal lines across the city.',view:'nairobi',focus:[]},
  {title:'A river is more than a line.',text:'Follow the highlighted Nairobi River segments. A line reveals the extent and shape of a waterway through the city in a way a single location cannot.',fact:river?`${river.length.toFixed(1)} km`:'Nairobi River',caption:river?`${river.features.length} mapped segments sharing this name and type`:'Mapped river segments',hint:'This is the length inside the study area, not the entire river. Shared names do not prove continuous connectivity.',focus:river?.features||[]},
  {title:'The smaller lines matter, too.',text:'The named rivers are only part of the picture. Teal streams add a finer pattern across the landscape, including many segments with no recorded name.',fact:`${streams.length} segments`,caption:`${km(streams)} km tagged as streams in the source`,hint:'Notice the smaller channels around West Nairobi. Missing lines may simply be unmapped.',view:'west',focus:streams},
  {title:'Water also meets infrastructure.',text:'Zoom into this cluster of mapped drainage channels near the Mathare River. Follow their short branches between the surrounding streets: these are the small urban lines that disappear at city scale.',fact:`${localDrains.length} channels`,caption:'mapped drains, ditches, or canals intersecting this close-up',hint:'The highlighted lines are drainage features, not a mapped sewer network. Their connection, condition, and flow direction are not verified.',bounds:drainageBounds,focus:localDrains,place:'Mathare corridor | drainage close-up'},
  {title:'When the river reaches homes.',text:'In Mathare, the 2024 floods destroyed homes and disrupted learning. UNICEF records residents recalling rising water and debris overwhelming a bridge. This river corridor is part of an everyday neighbourhood, with consequences far beyond the riverbank.',fact:'Mathare',caption:'Reported flood impacts | 2024',hint:'Follow the highlighted Mathare River. The view locates the corridor; it does not show the 2024 flood boundary or affected individual homes.',bounds:[[36.835,-1.274],[36.875,-1.247]],focus:named('mathare river'),place:'Mathare River | 2024 flood accounts',source:['UNICEF | 2026 account of the 2024 floods','https://www.unicef.org/kenya/stories/children-leading-climate-action-mathare-after-devastating-floods']},
  {title:'Another river, shared exposure.',text:'Now follow the Ngong River through the Mukuru area. SPACE4ALL researchers walked this corridor with community members in April 2024, documenting flood marks and drainage concerns. Looking along the line connects flood accounts to a place.',fact:'Mukuru',caption:'Ngong River corridor | community flood observations',hint:'The highlighted river is current OpenStreetMap geometry. No flood depth, extent, or settlement boundary is drawn here.',bounds:[[36.847,-1.333],[36.91,-1.294]],focus:named('ngong river'),place:'Mukuru | Ngong River corridor',source:['SPACE4ALL / University of Twente | report 2024','https://ris.utwente.nl/ws/portalfiles/portal/483486672/FloodExposure_Report_Nairobi_Space4All_1_.pdf']},
  {title:'A river should not be a sewer.',text:'Return to the Nairobi River near the city centre. The Nairobi Rivers Commission describes overloaded sewers spilling untreated wastewater into the river system. It also reports trunk-sewer works along river corridors: intervention is documented, while pollution remains the problem those works seek to address.',fact:'Nairobi River',caption:'Longstanding wastewater pressure',hint:'The line locates the river, not a measured pollution plume or discharge point. This dataset cannot establish pollution levels or year-round conditions at individual locations.',bounds:[[36.811,-1.282],[36.845,-1.266]],focus:river?.features||[],place:'Nairobi River | wastewater story',source:['Nairobi Rivers Commission | sewer programme','https://www.nrc.go.ke/construction-twin-trunk-sewer-lines']},
  {title:'Read the city through its water.',text:'Together, these lines reveal a water landscape that is easy to overlook on a road map. Use the faded county outline for orientation, then explore a waterway that catches your eye.',fact:'Your turn.',caption:'Select a line or choose a name from the directory.',hint:'This is a partial OpenStreetMap snapshot, not a historical reconstruction, flood model, or water-quality assessment. The study area differs from the county boundary.',view:'nairobi',focus:[]}
 ];
}
function positionStory(duration=850){
 const chapter=storyChapters()[storyIndex];
 const bounds=chapter.bounds||(chapter.view?PRESETS[chapter.view]:(chapter.focus.length?boundsOf(chapter.focus):PRESETS.nairobi));
 map.fitBounds(bounds,{padding:cameraPadding(),duration,maxZoom:15,bearing:0,pitch:0,essential:false});
}
function showStory(index,focusHeading=false){
 const chapters=storyChapters();
 storyIndex=Math.max(0,Math.min(chapters.length-1,index));
 const chapter=chapters[storyIndex];storySelection=chapter.focus;
 setActiveView(chapter.view||null);
 $('story-content').innerHTML=`<div class="eyebrow">${String(storyIndex+1).padStart(2,'0')} / THE WATER STORY</div><h2 id="story-title" tabindex="-1">${escapeHTML(chapter.title)}</h2><p class="story-text">${escapeHTML(chapter.text)}</p><div class="story-fact"><strong>${escapeHTML(chapter.fact)}</strong><span>${escapeHTML(chapter.caption)}</span></div><p class="story-hint">${escapeHTML(chapter.hint)}</p>${chapter.source?`<a class="story-source" href="${escapeHTML(chapter.source[1])}" target="_blank" rel="noopener noreferrer">${escapeHTML(chapter.source[0])} &nearr;</a>`:''}`;
 $('story-map-caption').hidden=!chapter.place;
 $('story-map-caption').textContent=chapter.place||'';
 $('story-count').textContent=`${storyIndex+1} of ${chapters.length}`;
 $('story-back').disabled=storyIndex===0;
 $('story-next').textContent=storyIndex===chapters.length-1?'Explore rivers \u2192':'Next \u2192';
 document.querySelector('.story-progress').innerHTML=chapters.map((_,i)=>`<span class="${i<=storyIndex?'complete':''}"></span>`).join('');
 $('story-content').scrollTop=0;hoverPopup?.remove();updateMapData();positionStory();
 if(focusHeading)$('story-title').focus({preventScroll:true});
}
function setMode(mode,reframe=true,focusHeading=true){
 mode='flood';
 storyActive=mode==='story';storySelection=[];closeDetails();
 if(mode!=='explore'){Object.keys(layerVisibility).forEach(key=>layerVisibility[key]=true);syncLayerVisibility();}
 map?.getSource('hover-preview')?.setData(emptyCollection());previewKey=null;
 window.floodTimeline?.setActive(mode==='flood');
 $('map-panel').classList.toggle('flood-active',mode==='flood');
 $('story-map-caption').hidden=true;
 document.querySelector('.sidebar').classList.toggle('story-mode',storyActive);
 $('story-pane').hidden=!storyActive;
 $('story-mode').setAttribute('aria-pressed',String(storyActive));$('explore-mode').setAttribute('aria-pressed',String(mode==='explore'));
 if(storyActive)showStory(0,focusHeading);
 else{updateMapData();if(reframe&&mode==='explore')frameView('nairobi');}
}

function installBoundary(){
 if(!boundaryData||!styleReady||map.getSource('county-boundary'))return;
 map.addSource('county-boundary',{type:'geojson',data:boundaryData});
 map.addLayer({id:'county-boundary',type:'line',source:'county-boundary',
  layout:{'line-cap':'round','line-join':'round'},
  paint:{'line-color':'#547e8a','line-width':['interpolate',['linear'],['zoom'],9,1.2,16,2],
   'line-opacity':.35,'line-dasharray':[5,4],'line-blur':.2}
 },map.getLayer('network-glow')?'network-glow':undefined);
 syncLayerVisibility();
}

function category(kind){return kind==='river'?'river':kind==='stream'?'stream':'drainage';}
function isIntermittent(p){return p.intermittent==='yes'||(p.seasonal!=='unknown'&&p.seasonal!=='no'&&Boolean(p.seasonal));}
function makeGroups(input){
 const grouped=new Map();
 for(const feature of input){
  const p=feature.properties;
  if(!grouped.has(p.group_key))grouped.set(p.group_key,{key:p.group_key,name:p.name||`Unnamed ${TYPE_LABELS[p.waterway].toLowerCase()}`,named:Boolean(p.name),category:p.category,type:p.waterway,features:[],length:0,intermittent:0});
  const group=grouped.get(p.group_key);group.features.push(feature);group.length+=p.length_km;
  if(p.is_intermittent)group.intermittent++;
 }
 return [...grouped.values()].sort((a,b)=>Number(b.named)-Number(a.named)||b.length-a.length||a.name.localeCompare(b.name));
}
function currentGroup(){return groups.find(group=>group.key===selectedKey);}
function boundsOf(input){
 const bounds=new maplibregl.LngLatBounds();
 for(const feature of input)for(const path of feature.geometry.coordinates)for(const point of path)bounds.extend(point);
 return bounds;
}
function cameraPadding(withDetails=false){
 const rect=$('map').getBoundingClientRect();
 const floating=(window.innerWidth>900||window.innerHeight<=500)&&!$('map-panel').classList.contains('is-fullview');
 const padding={top:Math.min(148,rect.height*.3),bottom:Math.min(76,rect.height*.18),left:floating?84:24,right:floating?document.querySelector('.sidebar').getBoundingClientRect().width+32:65};
 if(withDetails){
  const detail=$('detail').getBoundingClientRect();
  if(window.innerWidth>1050)padding.right=Math.min(detail.width+40,rect.width*.47);
  else padding.bottom=Math.min(Math.max(24,rect.bottom-detail.top+14),rect.height*.44);
 }
 return padding;
}
function setActiveView(name){
 activeView=name;
 document.querySelectorAll('[data-view]').forEach(button=>{
  const active=button.dataset.view===name;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));
 });
}
function frameView(name,duration=850){
 if(storyActive||window.floodTimeline?.active)setMode('explore',false);
 closeDetails();setActiveView(name);
 map.fitBounds(PRESETS[name],{padding:cameraPadding(),duration,maxZoom:15,bearing:0,pitch:0,essential:false});
}
function fitSelected(duration=800){
 const group=currentGroup();if(!group)return;
 map.fitBounds(boundsOf(group.features),{padding:cameraPadding(true),duration,maxZoom:16,bearing:0,pitch:0,essential:false});
}

function installNetwork(){
 // style.load means layers can be added. isStyleLoaded() can still be false
 // while basemap tiles load, which previously skipped the network permanently.
 if(!features.length||!styleReady||map.getSource('network'))return;
 // Avoid duplicating the bundled waterway network with basemap waterways.
 for(const layer of map.getStyle().layers||[])if(layer['source-layer']==='waterway')map.setLayoutProperty(layer.id,'visibility','none');
 map.addSource('network',{type:'geojson',data:{type:'FeatureCollection',features:visibleFeatures},attribution:'Waterways © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a> · ODbL'});
 map.addSource('selection',{type:'geojson',data:emptyCollection()});
 map.addSource('hover-preview',{type:'geojson',data:emptyCollection()});
 const width=(scale=1,extra=0)=>['interpolate',['linear'],['zoom'],10,['match',['get','category'],'river',2.2*scale+extra,'stream',1.4*scale+extra,scale+extra],15,['match',['get','category'],'river',5*scale+extra,'stream',3*scale+extra,2*scale+extra]];
 map.addLayer({id:'network-glow',type:'line',source:'network',layout:{'line-cap':'round','line-join':'round'},paint:{'line-color':'#ffffff','line-width':width(1,2),'line-blur':.5,'line-opacity':.8}});
 map.addLayer({id:'network-solid',type:'line',source:'network',filter:['==',['get','is_intermittent'],false],layout:{'line-cap':'round','line-join':'round'},paint:{'line-color':colorExpression,'line-width':width(),'line-opacity':.92}});
 map.addLayer({id:'network-seasonal',type:'line',source:'network',filter:['==',['get','is_intermittent'],true],layout:{'line-cap':'round','line-join':'round'},paint:{'line-color':colorExpression,'line-width':width(),'line-dasharray':[2,2],'line-opacity':.92}});
 map.addLayer({id:'selected-halo',type:'line',source:'selection',layout:{'line-cap':'round','line-join':'round'},paint:{'line-color':'#ffffff','line-width':width(1,6),'line-opacity':.95,'line-blur':.5}});
 map.addLayer({id:'selected-line',type:'line',source:'selection',filter:['==',['get','is_intermittent'],false],layout:{'line-cap':'round','line-join':'round'},paint:{'line-color':'#093f68','line-width':width(1,1.4),'line-opacity':1}});
 map.addLayer({id:'selected-seasonal',type:'line',source:'selection',filter:['==',['get','is_intermittent'],true],layout:{'line-cap':'round','line-join':'round'},paint:{'line-color':'#093f68','line-width':width(1,1.4),'line-dasharray':[2,2],'line-opacity':1}});
 map.addLayer({id:'network-hit',type:'line',source:'network',paint:{'line-width':20,'line-color':'#ffffff','line-opacity':0}});
 map.addLayer({id:'hover-halo',type:'line',source:'hover-preview',paint:{'line-color':'#ffffff','line-width':9,'line-blur':2,'line-opacity':.8}});
 map.addLayer({id:'hover-line',type:'line',source:'hover-preview',paint:{'line-color':colorExpression,'line-width':4,'line-opacity':1}});
 updateMapData();
}
function updateMapData(){
 if(!map?.getSource('network'))return;
 map.getSource('network').setData({type:'FeatureCollection',features:visibleFeatures});
 const group=currentGroup(),selection=storyActive?storySelection:(group?.features||[]);
 map.getSource('selection').setData({type:'FeatureCollection',features:selection});
 for(const id of ['network-solid','network-seasonal'])map.setPaintProperty(id,'line-opacity',selection.length ? .32 : .92);
 map.setPaintProperty('network-glow','line-opacity',selection.length ? .3 : .8);
 window.floodTimeline?.refresh();syncLayerVisibility();
}
function renderList(){
 const container=$('waterway-list');container.replaceChildren();container.setAttribute('aria-busy','false');
 $('result-count').textContent=`${groups.length.toLocaleString()} entries`;
 for(const group of groups){
  const button=document.createElement('button');button.type='button';button.className='waterway-row';button.dataset.key=group.key;
  button.setAttribute('aria-pressed',String(group.key===selectedKey));
  const subtitle=group.named?`${TYPE_LABELS[group.type]} · ${group.features.length} mapped segment${group.features.length===1?'':'s'}`:`OSM way ${group.features[0].properties.osm_id}`;
  button.innerHTML=`<span class="row-line ${group.category}" aria-hidden="true"></span><span class="row-name"><strong>${escapeHTML(group.name)}</strong><small>${escapeHTML(subtitle)}</small></span><span class="row-km">${group.length.toFixed(1)} km</span><span class="row-arrow" aria-hidden="true">↗</span>`;
  button.onclick=()=>choose(group.key);button.onpointerenter=()=>previewWaterway(group.key);button.onpointerleave=()=>previewWaterway(null);button.onfocus=()=>previewWaterway(group.key);button.onblur=()=>previewWaterway(null);container.append(button);
 }
 if(!groups.length){const note=document.createElement('p');note.className='empty';note.textContent='No waterways are available.';container.append(note);}
}
const layerVisibility={river:true,stream:true,drainage:true,boundary:true};
function syncLayerVisibility(){
 const enabled=Object.keys(layerVisibility).filter(key=>key!=='boundary'&&layerVisibility[key]);
 const allowed=['in',['get','category'],['literal',enabled]];
 for(const [id,seasonal] of [['network-solid',false],['network-seasonal',true],['selected-line',false],['selected-seasonal',true]])if(map?.getLayer(id))map.setFilter(id,['all',allowed,['==',['get','is_intermittent'],seasonal]]);
 for(const id of ['network-glow','network-hit','selected-halo','hover-halo','hover-line'])if(map?.getLayer(id))map.setFilter(id,allowed);
 if(map?.getLayer('county-boundary'))map.setLayoutProperty('county-boundary','visibility',layerVisibility.boundary?'visible':'none');
 document.querySelectorAll('[data-layer]').forEach(button=>button.setAttribute('aria-pressed',String(layerVisibility[button.dataset.layer])));
}
let previewKey=null;
function previewWaterway(key,categoryName=null){
 if(storyActive||window.floodTimeline?.active)return;
 const token=categoryName?`category:${categoryName}`:key;
 if(token===previewKey)return;previewKey=token;
 const group=groups.find(item=>item.key===key);
 const input=categoryName?features.filter(f=>f.properties.category===categoryName):(group?.features||[]);
 map?.getSource('hover-preview')?.setData({type:'FeatureCollection',features:input});
 document.querySelectorAll('.waterway-row').forEach(row=>row.classList.toggle('is-hovered',Boolean(key)&&row.dataset.key===key));
}
function animateMetrics(length,count){
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const start=performance.now();
 const frame=now=>{const t=reduce?1:Math.max(0,Math.min(1,(now-start)/700)),ease=1-Math.pow(1-t,3);
  $('total-length').innerHTML=`${(length*ease).toLocaleString(undefined,{minimumFractionDigits:1,maximumFractionDigits:1})}<small>km</small>`;
  $('segment-count').textContent=Math.round(count*ease).toLocaleString();if(t<1)requestAnimationFrame(frame);
 };requestAnimationFrame(frame);
}
function renderComposition(){
 const lengths={river:0,stream:0,drainage:0},counts={river:0,stream:0,drainage:0};
 for(const feature of features){const p=feature.properties;lengths[p.category]+=p.length_km;counts[p.category]++;}
 const total=Object.values(lengths).reduce((a,b)=>a+b,0);
 const river=total?lengths.river/total*100:0,stream=total?lengths.stream/total*100:0;
 for(const category of Object.keys(lengths)){
  $(`layer-${category}-count`).textContent=counts[category];
  $(`${category}-length`).textContent=`${lengths[category].toFixed(1)} km`;
 }
 $('stream-share').textContent=`${stream.toFixed(1)}%`;
 $('network-donut').style.background=`conic-gradient(${COLORS.river} 0% ${river}%,${COLORS.stream} ${river}% ${river+stream}%,${COLORS.drainage} ${river+stream}% 100%)`;
 $('network-donut').setAttribute('aria-label',`Share of mapped length: rivers ${river.toFixed(1)} percent, streams ${stream.toFixed(1)} percent, drainage ${(100-river-stream).toFixed(1)} percent.`);
}
function applyFilters(){
 visibleFeatures=features;
 groups=makeGroups(visibleFeatures);
 if(selectedKey&&!currentGroup())closeDetails();
 const length=visibleFeatures.reduce((sum,feature)=>sum+feature.properties.length_km,0);
 $('total-length').innerHTML=`${length.toLocaleString(undefined,{minimumFractionDigits:1,maximumFractionDigits:1})}<small>km</small>`;
 $('segment-count').textContent=visibleFeatures.length.toLocaleString();
 animateMetrics(length,visibleFeatures.length);
 if(currentGroup())renderDetail(currentGroup());
 renderList();updateMapData();hoverPopup?.remove();
}
function renderDetail(group){
 const seasonalText=group.intermittent?`${group.intermittent} of ${group.features.length} mapped segments have intermittent or seasonal tags.`:'No seasonal tags recorded; year-round flow is not confirmed.';
 $('detail').innerHTML=`<div class="detail-header"><div><div class="eyebrow"><span class="detail-type-dot" style="background:${COLORS[group.category]}"></span>${escapeHTML(TYPE_LABELS[group.type])}</div><h2 id="detail-title">${escapeHTML(group.name)}</h2></div><button class="close" type="button" aria-label="Close waterway details">&times;</button></div>
 <div class="detail-metrics"><div><strong>${group.length.toFixed(2)} <span>km</span></strong><small>Mapped length</small></div><div><strong>${group.features.length}</strong><small>Segment${group.features.length===1?'':'s'} highlighted</small></div></div>
 <div class="detail-body" tabindex="0" role="region" aria-label="Waterway details"><p class="detail-summary">${group.named?'Highlighted on the map. Length covers this study area.':'Name not recorded in OpenStreetMap. Length covers this study area.'}</p><details class="detail-more"><summary>About these lines</summary><p>${escapeHTML(seasonalText)}</p><p>${group.named?'Segments are grouped by source name and type; they may not form a continuous channel.':'Geometry and classification follow the source mapping.'}</p><p>Source snapshot: ${escapeHTML(sourceMetadata.osm_base_timestamp?.slice(0,10)||'date unavailable')}. These lines do not measure water quality, flow, or flood risk.</p></details></div>`;
 $('detail').querySelector('.close').onclick=()=>closeDetails(true);
 $('detail').querySelector('.detail-more').ontoggle=()=>{if(selectedKey===group.key)fitSelected(0);};
}
function choose(key){
 if(storyActive||window.floodTimeline?.active)setMode('explore',false);
 const group=groups.find(item=>item.key===key);if(!group)return;
 layerVisibility[group.category]=true;syncLayerVisibility();
 if($('detail').hidden)detailOpener=document.activeElement;
 selectedKey=key;setActiveView(null);hoverPopup?.remove();
 renderDetail(group);$('detail').hidden=false;$('map-panel').classList.add('has-detail');
 $('detail').querySelector('.close').focus({preventScroll:true});
 document.querySelectorAll('.waterway-row').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.key===key)));
 updateMapData();fitSelected();
}
function closeDetails(restoreFocus=false){
 selectedKey=null;$('detail').hidden=true;$('map-panel').classList.remove('has-detail');
 document.querySelectorAll('.waterway-row').forEach(button=>button.setAttribute('aria-pressed','false'));
 updateMapData();
 if(restoreFocus)(detailOpener?.isConnected&&detailOpener!==document.body?detailOpener:$('full-view')).focus({preventScroll:true});
}
function setFullView(active){
 $('map-panel').classList.toggle('is-fullview',active);$('full-view').setAttribute('aria-pressed',String(active));
 $('full-view').setAttribute('aria-label',active?'Exit full map view':'Enter full map view');$('full-view').title=active?'Exit full map view':'Full map view';
}
async function toggleFullView(){
 const panel=$('map-panel');
 if(panel.classList.contains('is-fullview')){if(document.fullscreenElement===panel)await document.exitFullscreen();setFullView(false);}
 else{setFullView(true);try{if(document.fullscreenEnabled&&panel.requestFullscreen)await panel.requestFullscreen();}catch{/* In-page expanded map remains available. */}}
}
async function getJSON(url){
 const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),15000);
 try{const response=await fetch(url,{signal:controller.signal});if(!response.ok)throw new Error(`HTTP ${response.status}`);return await response.json();}finally{clearTimeout(timeout);}
}
function wireControls(){
 document.querySelectorAll('[data-layer]').forEach(button=>{button.onclick=()=>{layerVisibility[button.dataset.layer]=!layerVisibility[button.dataset.layer];syncLayerVisibility();};button.onpointerenter=()=>{if(button.dataset.layer!=='boundary')previewWaterway(null,button.dataset.layer);};button.onpointerleave=()=>previewWaterway(null);});
 const rail=document.querySelector('.layers-panel'),toggle=$('layers-toggle');
 const syncRail=()=>requestAnimationFrame(()=>toggle.setAttribute('aria-expanded',String(rail.matches(':hover,:focus-within')||rail.classList.contains('is-expanded'))));
 toggle.onclick=()=>{rail.classList.toggle('is-expanded');syncRail();};
 for(const event of ['pointerenter','pointerleave','focusin','focusout'])rail.addEventListener(event,syncRail);
 rail.addEventListener('keydown',event=>{if(event.key==='Escape'){rail.classList.remove('is-expanded');toggle.focus();}});
 const donut=$('network-donut');
 donut.onpointermove=event=>{const rect=donut.getBoundingClientRect();const x=event.clientX-rect.left-rect.width/2,y=event.clientY-rect.top-rect.height/2;
  if(Math.hypot(x,y)<rect.width*.37){previewWaterway(null);return;}
  const angle=(Math.atan2(y,x)*180/Math.PI+450)%360/360;
  const totals={river:0,stream:0,drainage:0};for(const f of features)totals[f.properties.category]+=f.properties.length_km;
  const total=Object.values(totals).reduce((a,b)=>a+b,0);previewWaterway(null,angle<totals.river/total?'river':angle<(totals.river+totals.stream)/total?'stream':'drainage');
 };donut.onpointerleave=()=>previewWaterway(null);

 $('story-mode').onclick=()=>setMode('story');$('explore-mode').onclick=()=>setMode('explore');
 $('story-back').onclick=()=>showStory(storyIndex-1,true);
 $('story-next').onclick=()=>{if(storyIndex===storyChapters().length-1){setMode('explore');$('explore-mode').focus();}else showStory(storyIndex+1,true);};
 document.querySelectorAll('[data-view]').forEach(button=>button.onclick=()=>frameView(button.dataset.view));
 $('full-view').onclick=toggleFullView;
 document.addEventListener('fullscreenchange',()=>setFullView(document.fullscreenElement===$('map-panel')));
 document.addEventListener('keydown',event=>{
  if(event.key!=='Escape'||$('about').open)return;
  if(!$('detail').hidden)closeDetails(true);else if(!document.fullscreenElement)setFullView(false);
 });
 $('about-button').onclick=()=>$('about').showModal();$('close-about').onclick=()=>$('about').close();
 const compact=window.matchMedia('(max-width: 900px), (max-height: 600px)');
 const adapt=()=>{$('legend').open=!compact.matches;};compact.addEventListener('change',adapt);adapt();
}
async function init(){
 try{
  if(!window.maplibregl)throw new Error('The map library could not load. Check your internet connection and refresh.');
  map=new maplibregl.Map({container:'map',style:{version:8,sources:{},layers:[{id:'background',type:'background',paint:{'background-color':'#edf2ee'}}]},center:[36.86,-1.29],zoom:11,minZoom:8,maxZoom:18,renderWorldCopies:false});
  map.addControl(new maplibregl.NavigationControl({showCompass:false}),'top-right');
  map.addControl({onAdd(){this.container=document.createElement('div');this.container.className='maplibregl-ctrl maplibregl-ctrl-group full-view-control';this.container.append($('full-view'));return this.container;},onRemove(){this.container.remove();}},'top-right');
  map.addControl(new maplibregl.ScaleControl({maxWidth:90,unit:'metric'}),'bottom-right');
  hoverPopup=new maplibregl.Popup({closeButton:false,closeOnClick:false,offset:10});
  map.on('style.load',()=>{styleReady=true;installNetwork();installBoundary();});
  map.on('movestart',event=>{if(event.originalEvent)setActiveView(null);});
  map.on('error',()=>{if(!basemapProblem){basemapProblem=true;$('status').textContent='Some map tiles could not load. The bundled waterway network remains available.';}});
  map.on('click','network-hit',event=>{if(window.floodTimeline?.active)return;const key=event.features?.[0]?.properties.group_key;if(key)choose(key);});
  map.on('mousemove','network-hit',event=>{
   if(window.floodTimeline?.active)return;
   map.getCanvas().style.cursor='pointer';
   if(window.matchMedia('(pointer:coarse)').matches||selectedKey)return;
   const p=event.features?.[0]?.properties;if(!p)return;previewWaterway(p.group_key);
   hoverPopup.setLngLat(event.lngLat).setHTML(`<strong>${escapeHTML(p.name||`Unnamed ${TYPE_LABELS[p.waterway].toLowerCase()}`)}</strong><small>${escapeHTML(TYPE_LABELS[p.waterway])} · ${Number(p.length_km).toFixed(2)} km segment · Click to explore</small>`).addTo(map);
  });
  map.on('mouseleave','network-hit',()=>{map.getCanvas().style.cursor='';hoverPopup.remove();previewWaterway(null);});
  const resize=new ResizeObserver(()=>{map.resize();if(storyActive)positionStory(0);else if(activeView&&!window.floodTimeline?.active)frameView(activeView,0);else if(selectedKey)fitSelected(0);});resize.observe($('map-panel'));map.on('remove',()=>resize.disconnect());
  wireControls();
  getJSON('data/nairobi-boundary.geojson').then(data=>{boundaryData=data;installBoundary();}).catch(()=>{
   $('status').textContent='The county outline could not load. The waterway network remains available.';
  });
  getJSON('data/basemap-style.json').then(style=>{
   styleReady=false;
   // A full replacement emits style.load reliably. A diff can remove custom
   // layers without that event, leaving the prepared network uninstalled.
   map.setStyle(style,{diff:false});
  }).catch(()=>{basemapProblem=true;$('status').textContent='City basemap unavailable. You can still explore the waterway lines.';});
  const data=await getJSON('data/waterways.geojson');sourceMetadata=data.metadata;
  features=data.features.map(feature=>{
   const p=feature.properties;p.category=category(p.waterway);p.is_intermittent=isIntermittent(p);
   p.group_key=`${p.waterway}:${p.name?p.name.trim().replace(/\s+/g,' ').toLocaleLowerCase():p.osm_id}`;return feature;
  });
  $('snapshot-date').textContent=sourceMetadata.osm_base_timestamp?.slice(0,10)||'date unavailable';
  if(sourceMetadata.osm_base_timestamp)$('snapshot-date').dateTime=sourceMetadata.osm_base_timestamp;
  applyFilters();renderComposition();installNetwork();frameView('nairobi',0);
  $('story-mode').disabled=false;$('flood-mode').disabled=false;
  setMode('flood',false,false);
 window.floodTimeline?.install();
  if(!basemapProblem)$('status').textContent='';
 }catch(error){$('waterway-list').setAttribute('aria-busy','false');$('status').textContent=error.message.includes('map library')?error.message:'Waterway data could not load. Please refresh and try again.';$('waterway-list').innerHTML='<p class="empty">The waterway directory is unavailable.</p>';}
}
init();
