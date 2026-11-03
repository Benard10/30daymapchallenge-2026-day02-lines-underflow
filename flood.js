/* Dated observations and explicitly schematic scenarios; no hydraulic prediction. */
window.floodTimeline=(()=>{
 const events=[
  {
    "id": "1961",
    "year": "1961",
    "label": "1961 | Historical account",
    "mode": "history",
    "kind": "Historical account - no extent",
    "title": "Flooding before the familiar benchmarks.",
    "text": "A retrospective account describes several days of rain disrupting Nairobi in 1961, with military engineers assisting recovery.",
    "note": "The earliest event included here, not a claim about the first Nairobi flood. No georeferenced 1961 Nairobi extent is available in this app.",
    "source": "The Standard / retrospective history",
    "url": "https://www.standardmedia.co.ke/business/amp/nairobi/article/2001543062/city-under-water-nairobi-drowned-by-poor-leadership-planning-failures-and-corruption"
  },
  {
    "id": "1997-98",
    "year": "1997-98",
    "label": "1997-98 | El Nino history",
    "mode": "history",
    "kind": "Historical context - no extent",
    "title": "The 1997-98 El Nino benchmark.",
    "text": "The 1997-98 El Nino brought heavy rainfall and flooding in Kenya.",
    "note": "No historical Nairobi inundation geometry is supplied. Regional or national impacts are not presented as city totals.",
    "source": "Ngecu and Mathu (1999) / University of Nairobi",
    "url": "https://erepository.uonbi.ac.ke/items/490371c8-27b3-4f4a-9d46-3842e4d47a16"
  },
  {
    "id": "2018",
    "year": "2018",
    "label": "Mar-Apr 2018 | Rainfall and floods",
    "mode": "history",
    "kind": "Documented season - no extent",
    "title": "An exceptional long-rains season.",
    "text": "Research documents extreme March-April rainfall and flooding over central Kenya, including Nairobi.",
    "note": "Rainfall evidence is not a flood boundary. No 2018 inundation extent or incident points are bundled.",
    "source": "Kilavi et al. (2018) / Atmosphere",
    "url": "https://www.mdpi.com/2073-4433/9/12/472"
  },
  {
    "id": "2023-24",
    "year": "2023-24",
    "label": "2023-24 | El Nino climate context",
    "mode": "climate",
    "kind": "Climate context - no local extent",
    "title": "A strong El Nino, not a local flood map.",
    "text": "WMO ranked the 2023-24 El Nino among the five strongest on record. This chapter supplies seasonal climate context.",
    "note": "El Nino is one climate influence, not an attribution of every Nairobi flood. The 2024 long rains are presented as dated reports and observations separately. No 2023 Nairobi flood footprint is bundled.",
    "source": "WMO / 5 March 2024 update",
    "url": "https://wmo.int/news/media-centre/el-nino-weakens-impacts-continue"
  },
  {
    "id": "2024-april-reported",
    "year": "2024",
    "label": "21 Apr 2024 | Reported flooding",
    "mode": "reports",
    "kind": "Reported locations - approximate",
    "title": "Flooding on the city streets.",
    "text": "Reporting identifies T-Mall and South C among affected locations on 21 April. Visit the approximate reference pins.",
    "note": "These are report locations, not a surveyed April inundation boundary. The May satellite observation is a separate chapter.",
    "source": "Citizen Digital / 21 April 2024",
    "url": "https://citizen.digital/article/nairobi-the-green-city-under-the-sun-marooned-by-floods-n340750"
  },
  {
    "id": "2024-may-observed",
    "year": "2024",
    "label": "1 May 2024 | UNOSAT observation",
    "mode": "observed2024",
    "kind": "Satellite observation - 1 May",
    "title": "A dated flood-water footprint.",
    "text": "UNOSAT mapped flood water in Pleiades imagery acquired on 1 May 2024. The map shows the observation clipped to the study rectangle.",
    "note": "Preliminary and not field validated. Grey areas were cloud-obscured. Revealing fixed polygons is not within-event flood growth. Blank areas do not establish dry ground.",
    "source": "UNITAR-UNOSAT / 1 May 2024",
    "url": "https://unosat.org/products/3834"
  },
  {
    "id": "2025-04-14",
    "year": "2025",
    "label": "14 Apr 2025 | GFM detections",
    "mode": "radar",
    "kind": "Satellite detections - 14 April",
    "title": "A partial radar view.",
    "text": "Copernicus GFM detections from 14 April intersect this study area.",
    "note": "Partial, unverified 20 m radar detections; urban flooding may be excluded or missed. Several detections are near treatment ponds and may represent water change. They are not the complete footprint of the subsequently reported April floods.",
    "source": "Copernicus GFM / JRC-GDACS event 1103225",
    "url": "https://www.gdacs.org/Floods/report.aspx?detail=true&episodeid=2&eventid=1103225&eventtype=FL",
    "date": "2025-04-14"
  },
  {
    "id": "2025-april-reported",
    "year": "2025",
    "label": "21-23 Apr 2025 | Reported flooding",
    "mode": "reports",
    "kind": "Reported locations - April",
    "title": "Reports fill a different evidence gap.",
    "text": "Police accounts published on 23 April describe flooding in Mathare, Mukuru kwa Reuben, South B and along Jogoo Road. Pins show approximate references.",
    "note": "This report supplies no surveyed inundation extent. The 14 and 26 April radar detections are separate observations, not the boundary of every reported incident. Publication date does not establish an exact incident time.",
    "source": "The Star / police accounts, 23 April 2025",
    "url": "https://www.the-star.co.ke/news/2025-04-23-heavy-rains-six-killed-after-flash-floods-in-nairobi"
  },
  {
    "id": "2025-04-26",
    "year": "2025",
    "label": "26 Apr 2025 | GFM detections",
    "mode": "radar",
    "kind": "Satellite detections - 26 April",
    "title": "A second satellite date.",
    "text": "The available GFM archive includes another partial radar observation on 26 April.",
    "note": "Coverage and detection conditions differ between satellite dates. Changing polygons does not establish water movement, flood onset or full event extent. No urban exclusion raster is bundled.",
    "source": "Copernicus GFM / JRC-GDACS event 1103225",
    "url": "https://www.gdacs.org/Floods/report.aspx?detail=true&episodeid=2&eventid=1103225&eventtype=FL",
    "date": "2025-04-26"
  },
  {
    "id": "2025-october-reported",
    "year": "2025",
    "label": "3-4 Oct 2025 | Reported flooding",
    "mode": "reports",
    "kind": "Reported locations - October",
    "title": "The short rains disrupt roads again.",
    "text": "Reporting on 4 October describes overnight flooding affecting CBD roads and traffic near Nyayo Stadium after the 3 October rains.",
    "note": "Reference points are approximate. The report does not provide flood-water polygons or surveyed affected road lengths. This chapter has no satellite extent.",
    "source": "Citizen Digital / 4 October 2025",
    "url": "https://www.citizen.digital/article/nairobians-wake-up-to-flooded-city-roads-after-friday-rains-n370865"
  },
  {
    "id": "2026-march-reported",
    "year": "2026",
    "label": "6-7 Mar 2026 | Reported flooding",
    "mode": "reports",
    "kind": "Reported locations - March",
    "title": "When streets become waterways.",
    "text": "Visit dated March 2026 reports across Nairobi, including T-Mall, South C and the Bellevue corridor. Some locations are supported by broader March reporting periods.",
    "note": "Pins locate reported roads or neighbourhoods approximately. Road highlights are OSM context, not flooded lengths or current road-closure notices. Individual pins retain their publication date or reporting period. No surveyed March 2026 flood extent is included.",
    "source": "Kenya Red Cross reports, Citizen Digital and Copernicus",
    "url": "https://global-flood.emergency.copernicus.eu/news/239-floods-and-landslides-in-kenya-ethiopia-and-tanzania-march-2026"
  },
  {
    "id": "2026-03-12",
    "year": "2026",
    "label": "2026-03-12 | GFM radar detections",
    "mode": "radar",
    "kind": "Satellite detections - 2026-03-12",
    "title": "A dated radar view after the March reports.",
    "text": "Copernicus GFM archive observations from 2026-03-12 intersect the Nairobi study area. Animated blue areas show the available water detections.",
    "note": "Partial, unverified Sentinel-1 detections. Urban flooding can be missed; water changes and treatment ponds can be misclassified. These later observations do not establish the extent or peak of the 6-7 March road incidents. Blank areas are unknown.",
    "source": "Copernicus GFM / JRC GDACS event 1103792",
    "url": "https://www.gdacs.org/Floods/report.aspx?eventtype=FL&eventid=1103792",
    "date": "2026-03-12"
},  {
    "id": "2026-03-16",
    "year": "2026",
    "label": "2026-03-16 | GFM radar detections",
    "mode": "radar",
    "kind": "Satellite detections - 2026-03-16",
    "title": "A dated radar view after the March reports.",
    "text": "Copernicus GFM archive observations from 2026-03-16 intersect the Nairobi study area. Animated blue areas show the available water detections.",
    "note": "Partial, unverified Sentinel-1 detections. Urban flooding can be missed; water changes and treatment ponds can be misclassified. These later observations do not establish the extent or peak of the 6-7 March road incidents. Blank areas are unknown.",
    "source": "Copernicus GFM / JRC GDACS event 1103792",
    "url": "https://www.gdacs.org/Floods/report.aspx?eventtype=FL&eventid=1103792",
    "date": "2026-03-16"
},
  {
    "id": "2026-november-outlook",
    "year": "Outlook",
    "label": "3-9 Nov 2026 | Rainfall outlook",
    "mode": "outlook",
    "kind": "Rain expected - extent not predicted",
    "title": "Incoming rain, with the evidence kept separate.",
    "text": "The KMD weekly forecast issued 2 November includes Nairobi for morning rain and afternoon and night showers, valid 3-9 November 2026.",
    "note": "A dated forecast snapshot, not a live warning. No Nairobi storm-intensity series or calibrated inundation model is available here. Past flood footprints cannot be scaled into a forecast boundary. See the dated satellite chapters for observed water and Model for independent long-term hazard.",
    "source": "KMD / weekly outlook issued 2 November 2026",
    "url": "https://meteo.go.ke/documents/5513/Weekly_Weather_Forecast_valid_from_3rd_to_9th__November_2026.pdf",
    "date": "2026-11-03 / 2026-11-09"
},
  {
    "id": "model-baseline",
    "year": "Model",
    "label": "Model baseline | Not a dated event",
    "mode": "model",
    "kind": "Long-term model - not a forecast",
    "title": "Keep the model separate from the history.",
    "text": "JRC river-hazard bands provide long-term recurrence context. This is a model chapter without an event date.",
    "note": "Approximately 90 m model cells. Annual bands derive from sampled 10-, 50- and 100-year return periods, with supplied permanent-water and spurious-depth flags excluded. They are not a 2026 prediction, observed flood extent, parcel probability or complete urban drainage assessment. Blank cells are not proven safe.",
    "source": "European Commission JRC / CEMS hazard maps v2.1.2",
    "url": "https://jeodpp.jrc.ec.europa.eu/ftp/jrc-opendata/CEMS-GLOFAS/flood_hazard/README.txt"
  }
];
 const event=()=>events[index];
 const mode=()=>event().mode;
 const hasGeometry=()=>['reports','observed2024','radar','model'].includes(mode());
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const compact=window.matchMedia('(max-width:900px)');
 let currentPlace='city';
 let currentReportKey='',focusKey='',hazardPeriod=10;
 const stopCache=new Map();
 let followRiver=true,lastTourStop='',showBuildings=true,pins=[],pinKey='',pinPopup=null,lastSnapshot='';
 let analysis=false,observedArea=0,basemapPaint=[],hasLaunched=false;
 let scenes=[],satelliteOn=true,satelliteKey='';
 let active=false,index=10,playing=false,progress=0,speed=1,raf=0,last=0,lastPaint=0,data={},loadError=false,dataReady=false,overlayVisible=true,lastVisibility='';
 const ids=['flood-clouds','flood-observed','flood-edge','flood-observed-2025','flood-edge-2025','flood-water-shimmer','flood-extent-waves-2024','flood-extent-waves-2025','flood-hazard','flood-hazard-edge','flood-pulse','flood-buildings','flood-reported-road','flood-reported-sections','flood-focus-fill','flood-focus-edge','flood-focus-waves','flood-road-wash','flood-road-flow'];
 let lastInteraction=0;
 const duration=()=>!hasGeometry()?8000:mode()==='model'?12000:Math.max(42000,reportLocations().length*5500);
 const cameraEase=t=>1-Math.pow(1-t,4);
 const smooth=value=>value*value*(3-2*value);
 function install(){
  if(!map||!styleReady||!features.length||!dataReady||!Object.keys(data).length||map.getSource('flood-rivers'))return;
  const before=map.getLayer('network-glow')?'network-glow':undefined;
  for(const [id,value] of Object.entries(data))map.addSource(id,{type:'geojson',data:value});
  // Reorient each visual path west-to-east without mutating the source dataset.
  const flowPaths=features.filter(f=>['nairobi river','mathare river','ngong river'].includes((f.properties.name||'').toLowerCase())).flatMap(feature=>feature.geometry.coordinates.map(path=>({type:'Feature',properties:feature.properties,geometry:{type:'LineString',coordinates:path[0][0]<=path[path.length-1][0]?path.slice():path.slice().reverse()}})));
  map.addSource('flood-rivers',{type:'geojson',lineMetrics:true,data:{type:'FeatureCollection',features:flowPaths}});
  if(data['flood-clouds'])map.addLayer({id:'flood-clouds',type:'fill',source:'flood-clouds',paint:{'fill-color':'#7d8b96','fill-opacity':.25}},before);
  if(data['flood-observed']){
   map.addLayer({id:'flood-observed',type:'fill',source:'flood-observed',paint:{'fill-color':'#1686c8','fill-opacity':.55}},before);
   map.addLayer({id:'flood-edge',type:'line',source:'flood-observed',paint:{'line-color':'#0872ad','line-width':1,'line-opacity':.8}},before);
  }
  if(data['flood-observed-2025']){
   map.addLayer({id:'flood-observed-2025',type:'fill',source:'flood-observed-2025',paint:{'fill-color':'#26a8df','fill-opacity':.6}},before);
   map.addLayer({id:'flood-edge-2025',type:'line',source:'flood-observed-2025',paint:{'line-color':'#8ed9ef','line-width':1.5,'line-opacity':.85}},before);
   map.addLayer({id:'flood-water-shimmer',type:'line',source:'flood-observed-2025',paint:{'line-color':'#d8f9ff','line-width':3,'line-blur':1,'line-opacity':0}},before);
  }
  if(data['flood-hazard']){
   const colors=['match',['get','rp'],10,'#dfa23c',50,'#b477ad','#736eaf'];
   map.addLayer({id:'flood-hazard',type:'fill',source:'flood-hazard',paint:{'fill-color':colors,'fill-opacity':.46}},before);
   map.addLayer({id:'flood-hazard-edge',type:'line',source:'flood-hazard',paint:{'line-color':colors,'line-width':.6,'line-opacity':.7}},before);
  }
  if(map.getSource('openmaptiles'))map.addLayer({id:'flood-buildings',type:'fill-extrusion',source:'openmaptiles','source-layer':'building',minzoom:13,paint:{'fill-extrusion-color':'#8aa7a0','fill-extrusion-height':['max',0,['to-number',['get','render_height'],0]],'fill-extrusion-base':['max',0,['to-number',['get','render_min_height'],0]],'fill-extrusion-opacity':.62}},before);
  map.addLayer({id:'flood-pulse',type:'line',source:'flood-rivers',paint:{'line-color':'#b9dac7','line-width':6,'line-opacity':0,'line-blur':.4}});
  if(data['flood-reported-sections'])map.addLayer({id:'flood-reported-sections',type:'line',source:'flood-reported-sections',paint:{'line-color':'#dfb969','line-width':['interpolate',['linear'],['zoom'],10,2,15,4],'line-opacity':.75}},before);
  if(data['flood-reported-sections'])map.addLayer({id:'flood-reported-road',type:'line',source:'flood-reported-sections',paint:{'line-color':'#76d9ee','line-width':5,'line-opacity':.8,'line-dasharray':[2,2]}},before);
  if(!map.getSource('flood-focus-area'))map.addSource('flood-focus-area',{type:'geojson',data:{type:'FeatureCollection',features:[]}});
  map.addLayer({id:'flood-focus-fill',type:'fill',source:'flood-focus-area',paint:{'fill-color':'#39bce8','fill-opacity':.3}},before);
  map.addLayer({id:'flood-focus-edge',type:'line',source:'flood-focus-area',paint:{'line-color':'#b4f5ff','line-width':2.5,'line-opacity':.95}},before);
  const roadFlow=(data['flood-reported-sections']?.features||[]).flatMap(f=>f.geometry.coordinates.map(line=>({type:'Feature',properties:f.properties,geometry:{type:'LineString',coordinates:line}})));
  map.addSource('flood-road-flow-source',{type:'geojson',lineMetrics:true,data:{type:'FeatureCollection',features:roadFlow}});
  map.addLayer({id:'flood-road-wash',type:'line',source:'flood-road-flow-source',paint:{'line-color':'#2f9cc9','line-width':20,'line-blur':9,'line-opacity':.32}},before);
  map.addLayer({id:'flood-road-flow',type:'line',source:'flood-road-flow-source',paint:{'line-color':'#c7f7ff','line-width':4,'line-opacity':.9}},before);
  for(let phase=0;phase<24;phase++){
   const canvas=document.createElement('canvas');canvas.width=64;canvas.height=64;const c=canvas.getContext('2d');c.strokeStyle='rgba(195,246,255,.65)';c.lineWidth=1.4;
   for(let y=8;y<64;y+=16){c.beginPath();for(let x=-4;x<=68;x++){const v=y+2*Math.sin(x/64*Math.PI*2+phase/24*Math.PI*2);x===-4?c.moveTo(x,v):c.lineTo(x,v);}c.stroke();}
   if(!map.hasImage('flood-wave-'+phase))map.addImage('flood-wave-'+phase,c.getImageData(0,0,64,64));
  }
  // Repeat water motion across every measured footprint, not just the tour stop.
  for(const [id,source] of [['flood-extent-waves-2024','flood-observed'],['flood-extent-waves-2025','flood-observed-2025']]){
   if(data[source])map.addLayer({id,type:'fill',source,paint:{'fill-pattern':'flood-wave-0','fill-opacity':.55}},before);
  }
  map.addLayer({id:'flood-focus-waves',type:'fill',source:'flood-focus-area',paint:{'fill-pattern':'flood-wave-0','fill-opacity':.55}},before);
  installSatellite();
  focusKey='';stopCache.clear();
  lastVisibility='';paint();
  if(analysis)styleAnalysis(true);
 }
 function styleAnalysis(dark){
  if(!map||!styleReady)return;
  if(dark&&basemapPaint.length===0){
   const save=(layer,key,value)=>{basemapPaint.push([layer.id,key,map.getPaintProperty(layer.id,key)]);map.setPaintProperty(layer.id,key+'-transition',{duration:reduced.matches?0:600});map.setPaintProperty(layer.id,key,value);};
   for(const layer of map.getStyle().layers){
    if(layer.type==='background')save(layer,'background-color','#243736');
    if(layer.source!=='openmaptiles')continue;
    const water=/water/.test(layer['source-layer']||'');
    if(layer.type==='fill')save(layer,'fill-color',water?'#24546c':/park|landcover/.test(layer['source-layer']||'')?'#2c403a':'#2a3b3a');
    if(layer.type==='line')save(layer,'line-color',water?'#47777c':/transportation/.test(layer['source-layer']||'')?'#6f8880':'#405351');
    if(layer.type==='symbol'){save(layer,'text-color','#8baba5');save(layer,'text-halo-color','#253835');}
   }
   for(const id of ['network-solid','network-seasonal'])if(map.getLayer(id)){save({id},'line-color',['match',['get','category'],'river','#6cb7c8','stream','#447d86','#706e63']);}
   if(map.getLayer('network-glow'))save({id:'network-glow'},'line-color','#517c7e');
  }else if(!dark){for(const [id,key,value] of basemapPaint)if(map.getLayer(id))map.setPaintProperty(id,key,value===undefined?null:value);basemapPaint=[];}
 }
 function setAnalysis(value){
  analysis=value;
  document.querySelector('main').classList.toggle('analysis-view',analysis);
  document.documentElement.dataset.theme=analysis?'dark':'light';
  const viewButton=$('analysis-toggle');
  viewButton.textContent=analysis?'Back to dashboard':'Open analysis view';
  viewButton.classList.toggle('in-explorer',!analysis);
  if(analysis)$('map-panel').append(viewButton);else $('flood-panel').prepend(viewButton);
  $('analysis-toggle').setAttribute('aria-pressed',String(analysis));
  styleAnalysis(analysis);placeControls();map.resize();if(active)camera();
 }
 function polygonArea(geometry){
  const ringArea=ring=>{let sum=0;for(let i=0;i<ring.length-1;i++){const a=ring[i],b=ring[i+1];sum+=(b[0]-a[0])*Math.PI/180*(2+Math.sin(a[1]*Math.PI/180)+Math.sin(b[1]*Math.PI/180));}return Math.abs(sum*6371008.8**2/2);};
  const polygons=geometry.type==='Polygon'?[geometry.coordinates]:geometry.coordinates;
  return polygons.reduce((total,rings)=>total+Math.max(0,ringArea(rings[0])-rings.slice(1).reduce((sum,ring)=>sum+ringArea(ring),0)),0)/1e6;
 }
 function observedData(){return mode()==='observed2024'?data['flood-observed']:mode()==='radar'?data['flood-observed-2025']:undefined;}
 function snapshotDate(){return event().date||'';}
 function areaOf(input){return (input?.features||[]).reduce((total,feature)=>total+polygonArea(feature.geometry),0);}
 function reportLocations(){return (data['flood-reported-locations']?.features||[]).filter(f=>mode()==='reports'&&f.properties.event_id===event().id);}
 // Clip contextual OSM road lines to a local reference window, never an inundation boundary.
 function prepareRoadSections(){
  const reports=data['flood-reported-locations']?.features||[],output=[];
  for(const road of data['flood-reported-roads']?.features||[]){
   const report=reports.find(f=>f.properties.id===road.properties.report_id);if(!report)continue;
   const [x,y]=report.geometry.coordinates,box=[x-.0045,y-.0035,x+.0045,y+.0035],lines=[];
   const coords=road.geometry.coordinates;
   for(let i=1;i<coords.length;i++){
    const a=coords[i-1],b=coords[i],dx=b[0]-a[0],dy=b[1]-a[1];let low=0,high=1,keep=true;
    for(const [p,q] of [[-dx,a[0]-box[0]],[dx,box[2]-a[0]],[-dy,a[1]-box[1]],[dy,box[3]-a[1]]]){
     if(p===0){if(q<0){keep=false;break;}}else{const t=q/p;if(p<0)low=Math.max(low,t);else high=Math.min(high,t);if(low>high){keep=false;break;}}
    }
    if(keep)lines.push([[a[0]+low*dx,a[1]+low*dy],[a[0]+high*dx,a[1]+high*dy]]);
   }
   if(lines.length)output.push({type:'Feature',properties:{...road.properties,meaning:'Approximate reported road location; highlighted geometry is context, not surveyed flooded length'},geometry:{type:'MultiLineString',coordinates:lines}});
  }
  data['flood-reported-sections']={type:'FeatureCollection',features:output};
 }
 function extentAround(coordinates,minimum=.0025){
  const points=[];const visit=value=>{if(typeof value[0]==='number')points.push(value);else value.forEach(visit);};visit(coordinates);
  const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);let west=Math.min(...xs),east=Math.max(...xs),south=Math.min(...ys),north=Math.max(...ys);
  const x=(west+east)/2,y=(south+north)/2,dx=Math.max(minimum,(east-west)*.65),dy=Math.max(minimum*.7,(north-south)*.65);
  return [[x-dx,y-dy],[x+dx,y+dy]];
 }
 function satelliteGroups(){
  const input=observedData();if(!input)return [];
  const groups=new Map();
  for(const pin of input.metadata.map_pins||[]){
   if(mode()==='radar'&&pin.observed!==snapshotDate())continue;
   const name=pin.name.trim().toLowerCase().replace(/\s+/g,' '),key=pin.observed+'/'+name;
   const feature=mode()==='observed2024'?input.features[pin.component]:input.features.find(f=>f.properties.component===pin.component);
   if(!feature)continue;
   if(!groups.has(key))groups.set(key,{pin:{...pin,key},features:[],components:new Set()});
   const group=groups.get(key);if(!group.components.has(pin.component)){group.features.push(feature);group.components.add(pin.component);}
   const previous=mode()==='observed2024'?input.features[group.pin.component]:input.features.find(f=>f.properties.component===group.pin.component);
   if(polygonArea(feature.geometry)>polygonArea(previous.geometry))group.pin={...pin,key};
  }
  return [...groups.values()];
 }
 function tourStops(){
  const key=event().id+'/'+dataReady;if(stopCache.has(key))return stopCache.get(key);
  let stops=reportLocations().map(f=>{
   const roadPoints=(data['flood-reported-roads']?.features||[]).filter(r=>r.properties.report_id===f.properties.id).flatMap(r=>r.geometry.coordinates).filter(p=>Math.hypot(p[0]-f.geometry.coordinates[0],p[1]-f.geometry.coordinates[1])<.008);
   return {bounds:extentAround([...roadPoints,f.geometry.coordinates],f.properties.kind==='road'?.0025:.004),report:f,pin:{coordinates:f.geometry.coordinates,name:f.properties.name,key:f.properties.id}};
  });
  const input=observedData();
  if(['observed2024','radar'].includes(mode())){
   let groups=satelliteGroups();
   if(mode()==='observed2024'){
    const tourComponents=new Set((input.metadata.visual_tour?.stops||[]).map(s=>s.observed_component));
    groups=groups.filter(g=>[...g.components].some(c=>tourComponents.has(c)));
   }
   stops=groups.map(g=>({bounds:extentAround(g.features.map(f=>f.geometry.coordinates)),feature:g.features[0],features:g.features,pin:g.pin}));
  }
  if(mode()==='model'&&data['flood-hazard'])stops=[{bounds:extentAround(data['flood-hazard'].features.map(f=>f.geometry.coordinates),.004)}];
  stopCache.set(key,stops);return stops;
 }
 function currentStop(){const stops=tourStops();return stops[Math.min(stops.length-1,Math.floor(progress*stops.length))];}
 function fitStop(stop,force=false,immediate=false){
  if(!stop)return;const height=$('map').clientHeight||400,width=$('map').clientWidth||800,side=Math.min(100,width*.25);
  const bounds=stop.bounds.map(p=>p.slice());
  if(stop.pin){const [x,y]=stop.pin.coordinates;bounds[0][0]=Math.min(bounds[0][0],x-.0003);bounds[0][1]=Math.min(bounds[0][1],y-.0003);bounds[1][0]=Math.max(bounds[1][0],x+.0003);bounds[1][1]=Math.max(bounds[1][1],y+.0003);}
  map.fitBounds(bounds,{padding:{top:Math.min(92,height*.22),bottom:Math.min(32,height*.08),left:side,right:side},duration:reduced.matches||immediate?0:force?1100:1500,easing:cameraEase,bearing:0,pitch:0,maxZoom:15.8,essential:false});setActiveView(null);
 }
 function paintFocus(){
  const stop=currentStop(),features=active&&overlayVisible?(stop?.features||(stop?.feature?[stop.feature]:[])):[],key=features.length?event().id+'/'+stop.pin.key:'none';
  if(key!==focusKey&&map.getSource('flood-focus-area')){focusKey=key;map.getSource('flood-focus-area').setData({type:'FeatureCollection',features});}
 }
 function activeReport(){const reports=reportLocations();return reports[Math.min(reports.length-1,Math.floor(progress*reports.length))];}
 function chart(){
  $('analysis-plot').innerHTML='';
  $('analysis-source').textContent=events[index].source;$('analysis-source').href=events[index].url;
  $('analysis-summary').textContent=event().text+' '+event().note;
  $('analysis-chart-note').textContent='Water texture, camera travel and pin rings are illustrative motion. Flood footprints stay fixed to their observation date; this does not reconstruct flood growth.';
 }
 function sectionReading(){
  const e=event(),stop=currentStop(),report=activeReport();
  $('flood-event-date').textContent=e.label.split(' | ')[0];
  $('flood-section-name').textContent=stop?.pin?.name?.replace(/KATANI/g,'Katani')|| (mode()==='model'?'Long-term river model':'Historical context');
  let measure='Flood extent not available';
  if(mode()==='reports'){
   $('flood-event-date').textContent=report?.properties.period||e.label.split(' | ')[0];
   measure='Reported impact - extent not measured';
  }else if(['observed2024','radar'].includes(mode())&&stop){
   const km2=areaOf({features:stop.features||[stop.feature]});
   const area=km2<.01?`${Math.round(km2*1e6).toLocaleString()} m\u00b2`:`${km2.toFixed(2)} km\u00b2`;
   measure=`${area} mapped water - depth unknown`;
   $('flood-event-date').textContent=mode()==='radar'?snapshotDate():'1 May 2024';
  }else if(mode()==='outlook'){
   $('flood-section-name').textContent='Rain and showers expected in Nairobi';
   measure='KMD outlook - no predicted flood boundary';
  }else if(mode()==='model'){
   const km2=areaOf({features:(data['flood-hazard']?.features||[]).filter(f=>f.properties.rp<=hazardPeriod)});
   measure=`${km2.toFixed(2)} km\u00b2 model footprint - ${hazardPeriod}-year scenario`;
   $('flood-event-date').textContent='No event date - not a 2026 forecast';
  }
  $('flood-section-measure').textContent=mode()==='reports'?measure+' - water effect illustrative':measure;
  $('flood-section-measure').title='Area describes highlighted mapped polygons, not flood depth, discharge or severity. Reported impacts and model output are separate evidence types; dates have incomplete and differing coverage.';
  document.querySelectorAll('[data-flood-year]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.floodYear===e.year)));
 }
 function paintReportFocus(){
  const report=activeReport(),key=currentStop()?.pin?.key||'';
  const reports=reportLocations();
  if(key!==currentReportKey){
   currentReportKey=key;
   for(const marker of pins)marker.getElement?.().classList.toggle('is-current',marker.getElement().dataset.pinKey===key);
  }
  if(map.getLayer('flood-reported-sections'))map.setFilter('flood-reported-sections',['in',['get','report_id'],['literal',reports.filter(f=>f.properties.kind==='road').map(f=>f.properties.id)]]);
  for(const id of ['flood-road-wash','flood-road-flow'])if(map.getLayer(id))map.setFilter(id,['==',['get','report_id'],key]);
  if(map.getLayer('flood-reported-road')){map.setFilter('flood-reported-road',['==',['get','report_id'],key]);map.setPaintProperty('flood-reported-road','line-opacity',playing&&!reduced.matches?.65+.25*Math.sin(progress*Math.PI*80):.8);}
 }
 function clearPins(){for(const marker of pins)marker.remove();pins=[];pinPopup?.remove();pinPopup=null;}
 function syncPins(){
  const key=`${active}/${index}/${mode()==='radar'?snapshotDate():''}/${overlayVisible}/${dataReady}`;if(key===pinKey)return;pinKey=key;clearPins();
  if(!active||!overlayVisible||!hasGeometry()||!window.maplibregl)return;
  const locations=satelliteGroups().map(group=>group.pin);
  for(const feature of reportLocations()){
   const p=feature.properties,element=document.createElement('button');element.type='button';element.className='flood-place-pin report-pin'+(p.kind==='road'?' road-pin':'');element.dataset.reportId=p.id;element.dataset.pinKey=p.id;element.textContent=p.name;const water=document.createElement('span');water.className='pin-water-motion';water.setAttribute('aria-hidden','true');element.append(water);element.setAttribute('aria-label',p.name+'. Reported flood location, approximate. '+p.period);
   element.onclick=event=>{event.stopPropagation();pause();progress=reportLocations().indexOf(feature)/reportLocations().length;currentReportKey='';paint();pinPopup?.remove();pinPopup=new maplibregl.Popup({anchor:'bottom',offset:38,maxWidth:'300px',className:'flood-report-popup'}).setLngLat(feature.geometry.coordinates).setHTML(`<strong>${escapeHTML(p.name)}</strong><p>${escapeHTML(p.period)} - Reported flooding</p><p>${escapeHTML(p.description)}</p><p>${escapeHTML(p.location_precision)}. ${escapeHTML(p.interpretation)}</p><a target="_blank" rel="noopener noreferrer" href="${escapeHTML(p.source.url)}">${escapeHTML(p.source.title)}</a><br><a target="_blank" rel="noopener noreferrer" href="${escapeHTML(p.geometry_source)}">Map location source</a>`).addTo(map);};
   pins.push(new maplibregl.Marker({element,anchor:'bottom'}).setLngLat(feature.geometry.coordinates).addTo(map));
  }
  currentReportKey='';
  for(const pin of locations){
   const element=document.createElement('button');element.type='button';element.className='flood-place-pin satellite-pin';element.dataset.pinKey=pin.key;element.setAttribute('aria-label',`${pin.name}. ${pin.observed} satellite detection; ${pin.validation}`);element.textContent=pin.name.replace(/KATANI/g,'Katani');
   element.onclick=event=>{event.stopPropagation();pinPopup?.remove();pinPopup=new maplibregl.Popup({offset:12,maxWidth:'280px'}).setLngLat(pin.coordinates).setHTML(`<strong>${escapeHTML(pin.name)}</strong><p>${escapeHTML(pin.observed)} satellite observation</p><p>${escapeHTML(pin.validation)}</p><p>Place reference is ${escapeHTML(pin.place_source.distance_m)} m from the observation pin.</p><a target="_blank" rel="noopener noreferrer" href="${escapeHTML(pin.place_source.url)}">Place name source</a>`).addTo(map);};
   pins.push(new maplibregl.Marker({element,anchor:'bottom'}).setLngLat(pin.coordinates).addTo(map));
  }
 }
 function selectedScene(){
  const date={'2024-april-reported':'2024-04-22','2024-may-observed':'2024-04-22',
   '2025-april-reported':'2025-04-27','2025-04-26':'2025-04-27',
   '2026-march-reported':'2026-03-13','2026-03-12':'2026-03-13','2026-03-16':'2026-03-13'}[event().id];
  return scenes.find(scene=>scene.date===date);
 }
 function installSatellite(){
  if(!map||!styleReady||!scenes.length||map.getSource('satellite-reference'))return;
  const scene=selectedScene()||scenes[0];
  map.addSource('satellite-reference',{type:'image',url:scene.image,coordinates:scene.coordinates});
  const before=map.getLayer('flood-clouds')?'flood-clouds':map.getLayer('network-glow')?'network-glow':undefined;
  map.addLayer({id:'satellite-reference',type:'raster',source:'satellite-reference',
   layout:{visibility:'none'},paint:{'raster-opacity':.88,'raster-fade-duration':300}},before);
  satelliteKey=scene.date;
 }
 function paintSatellite(){
  const scene=selectedScene(),button=$('satellite-toggle'),caption=$('satellite-caption');
  button.hidden=!active||!scene;button.setAttribute('aria-pressed',String(satelliteOn));
  caption.hidden=!active||!scene||!satelliteOn;
  if(scene){
   $('satellite-date').textContent='Sentinel-2 - '+scene.date;
   $('satellite-source').href=scene.catalogue;
   $('satellite-caption-note').textContent=['observed2024','radar'].includes(mode())?'Water observation - '+(snapshotDate()||'2024-05-01')+' - dates differ':'Optical reference - not a flood boundary';
  }
  installSatellite();
  const source=map.getSource('satellite-reference');
  if(source&&scene&&satelliteOn&&satelliteKey!==scene.date){source.updateImage({url:scene.image,coordinates:scene.coordinates});satelliteKey=scene.date;}
  if(map.getLayer('satellite-reference'))map.setLayoutProperty('satellite-reference','visibility',active&&scene&&satelliteOn?'visible':'none');
 }
 function paintExtentWater(){
  // Visual texture only: polygon boundaries remain fixed to the source observation.
  const phase=reduced.matches?0:Math.floor(progress*duration()/65)%24;
  for(const id of ['flood-extent-waves-2024','flood-extent-waves-2025']){
   if(!map.getLayer(id))continue;
   if(id.endsWith('2025'))map.setFilter(id,['==',['get','observed'],snapshotDate()]);
   map.setPaintProperty(id,'fill-pattern','flood-wave-'+phase);
  }
 }
 function paint(){
  if(!map)return;
  paintSatellite();
  if(active){for(const id of ['network-solid','network-seasonal'])if(map.getLayer(id))map.setPaintProperty(id,'line-opacity',hasGeometry()&&overlayVisible ? .38 : .8);if(map.getLayer('network-glow'))map.setPaintProperty('network-glow','line-opacity',.25);}
  if(map.getLayer('flood-hazard')){const filter=['<=',['get','rp'],hazardPeriod];map.setFilter('flood-hazard',filter);map.setFilter('flood-hazard-edge',filter);map.setPaintProperty('flood-hazard','fill-color','#42b7d2');map.setPaintProperty('flood-hazard-edge','line-color','#8ce1ed');}
  document.querySelectorAll('[data-hazard-period]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.hazardPeriod)===hazardPeriod)));
  const date=snapshotDate(),visibility=`${active}/${index}/${overlayVisible}/${showBuildings}`;
  if(visibility!==lastVisibility){
   for(const id of ids)if(map.getLayer(id)){
    const show=id==='flood-extent-waves-2024'?mode()==='observed2024':id==='flood-extent-waves-2025'?mode()==='radar':['flood-road-wash','flood-road-flow'].includes(id)?mode()==='reports':id==='flood-reported-sections'?mode()==='reports':id.startsWith('flood-focus-')?['observed2024','radar'].includes(mode()):id==='flood-reported-road'?mode()==='reports':id==='flood-buildings'?showBuildings&&hasGeometry():id==='flood-pulse'?hasGeometry():mode()==='observed2024'?['flood-clouds','flood-observed','flood-edge'].includes(id):mode()==='radar'?['flood-observed-2025','flood-edge-2025','flood-water-shimmer'].includes(id):mode()==='model'?['flood-hazard','flood-hazard-edge'].includes(id):false;
    map.setLayoutProperty(id,'visibility',active&&overlayVisible&&show?'visible':'none');
   }lastVisibility=visibility;
  }
  if(map.getLayer('flood-observed-2025')){
   const filter=['==',['get','observed'],date];map.setFilter('flood-observed-2025',filter);map.setFilter('flood-water-shimmer',filter);map.setFilter('flood-edge-2025',filter);
   map.setPaintProperty('flood-water-shimmer','line-opacity',playing&&!reduced.matches&&!document.hidden ? .4+.25*Math.sin(progress*Math.PI*20):0);
  }
  if(map.getLayer('flood-observed')){map.setPaintProperty('flood-observed','fill-opacity',.45);map.setPaintProperty('flood-edge','line-opacity',.65);}
  if(map.getLayer('flood-pulse')){const show=playing&&!reduced.matches&&!document.hidden;map.setPaintProperty('flood-pulse','line-opacity',show ? .9 : 0);if(show)map.setPaintProperty('flood-pulse','line-gradient',['interpolate',['linear'],['sin',['*',['-',['line-progress'],progress*2],Math.PI*6]],-1,'rgba(0,0,0,0)',.25,'rgba(0,0,0,0)',1,mode()==='model'?'#edce86':'#c9fff5']);}
  const waterMoving=playing&&!reduced.matches&&!document.hidden;
  if(map.getLayer('flood-road-flow')){
   map.setPaintProperty('flood-road-flow','line-opacity',waterMoving?.9:.55);
   map.setPaintProperty('flood-road-flow','line-gradient',['interpolate',['linear'],['sin',['*',['-',['line-progress'],progress*8],Math.PI*4]],-1,'rgba(75,180,213,.1)',.2,'rgba(75,180,213,.2)',1,'#defbff']);
  }
  paintExtentWater();
  if(map.getLayer('flood-focus-waves'))map.setPaintProperty('flood-focus-waves','fill-pattern','flood-wave-'+(reduced.matches?0:Math.floor(progress*duration()/65)%24));
  $('flood-stage').textContent=event().note;
  $('flood-timeline').value=Math.round(index*100+progress*100);$('flood-timeline').setAttribute('aria-valuetext',`${event().label}, ${Math.round(progress*100)} percent navigation phase`);
  $('flood-prev').disabled=index===0;$('flood-next').disabled=index===events.length-1;
  $('hazard-legend').hidden=mode()!=='model';syncPins();paintReportFocus();paintFocus();sectionReading();
  document.querySelectorAll('.report-pin').forEach(el=>el.classList.toggle('is-animating',playing&&!reduced.matches&&!document.hidden));
 }
 function render(){
  const e=events[index];observedArea=areaOf(observedData());lastSnapshot='';
  document.querySelector('main').classList.add('chart-free');
  document.querySelector('.analysis-chart').hidden=true;
  $('hazard-legend').hidden=mode()!=='model';
  map?.resize();
  $('flood-year').textContent=e.year;$('flood-kind').textContent=e.kind;
  $('flood-content').innerHTML=`<div class="eyebrow">${escapeHTML(e.kind)}</div><h2>${escapeHTML(e.title)}</h2><p>${escapeHTML(e.text)}</p><details class="flood-reading"><summary>How to read this layer</summary><div class="flood-explanation">${escapeHTML(e.note)}</div></details><a class="story-source" target="_blank" rel="noopener noreferrer" href="${e.url}">${escapeHTML(e.source)} ↗</a>${loadError?'<p class="flood-load-warning">Some flood layers could not load. Missing layers are not evidence of dry ground.</p>':''}`;
  $('flood-content').scrollTop=0;
  $('flood-panel').classList.toggle('scenario',mode()==='model');
  $('flood-overlay').classList.toggle('scenario',mode()==='model');
  $('flood-map-legend').textContent=events[index].kind;
  $('flood-overlay-label').textContent=`${e.year} / ${e.kind}`;
  $('flood-map-year').textContent=e.year;
  $('flood-map-kind').textContent=mode()==='model'?`Modelled river flooding - ${hazardPeriod}-year scenario`:e.kind;
  $('flood-map-stamp').classList.toggle('scenario',mode()==='model');
  chart();$('flood-event-select').value=String(index);
  $('flood-compare').disabled=!hasGeometry();
  $('flood-map-stamp').classList.remove('stamp-enter');
  if(!reduced.matches){void $('flood-map-stamp').offsetWidth;$('flood-map-stamp').classList.add('stamp-enter');}
  paint();
 }
 function camera(place=currentPlace){
  if(analysis&&followRiver&&hasGeometry()&&followTour(true))return;
  currentPlace=place;
  const bounds={city:[[36.77,-1.35],[36.96,-1.23]],mathare:[[36.835,-1.274],[36.875,-1.247]],mukuru:[[36.847,-1.333],[36.91,-1.294]]}[place];
  const small=compact.matches&&!$('map-panel').classList.contains('is-fullview');
  const padding=analysis?{top:85,bottom:30,left:35,right:60}:small?{top:55,bottom:30,left:20,right:50}:{top:95,bottom:Math.min(220,$('map').clientHeight*.4),left:84,right:document.querySelector('.sidebar').getBoundingClientRect().width+32};
  map.fitBounds(bounds,{padding,duration:reduced.matches?0:1300,easing:cameraEase,maxZoom:15,pitch:analysis&&hasGeometry()?40:0,bearing:analysis&&hasGeometry()?-15:0,essential:false});setActiveView(null);
 }
 function followTour(force=false){
  const stops=tourStops();
  if(!active||!analysis||!followRiver||!hasGeometry()||(reduced.matches&&!force)||!stops.length)return false;
  const position=Math.min(stops.length-1,Math.floor(progress*stops.length)),key=`${index}/${position}`;
  if(force||key!==lastTourStop){
   lastTourStop=key;const stop=stops[position];
   fitStop(stop,force);
  }
  return true;
 }
 function resumeFollow(){followRiver=true;syncFollow();}
 function syncFollow(){$('flood-follow').setAttribute('aria-pressed',String(followRiver));$('flood-follow').textContent=followRiver?'Pause camera follow':'Follow river';}
 function select(value,reframe=false){if(reframe)resumeFollow();index=Math.max(0,Math.min(events.length-1,Number(value)));progress=0;lastTourStop='';render();if(reframe)camera();else if(!followTour(true)&&!hasGeometry())camera();}
 function pause(){const wasPlaying=playing;playing=false;cancelAnimationFrame(raf);if(active)map?.stop();$('flood-play').textContent='Play';$('flood-play').setAttribute('aria-pressed','false');$('flood-overlay').classList.remove('is-playing','controls-idle');paint();if(wasPlaying&&active&&analysis&&followRiver)fitStop(currentStop(),true,true);}
 function tick(now){
  if(!playing||!active)return;
  if(document.hidden){last=now;raf=requestAnimationFrame(tick);return;}
  progress+=Math.max(0,Math.min(now-last,100))/duration()*speed;last=now;
  if(progress>=1){if(index===events.length-1){progress=1;pause();return;}select(index+1);}
  if(now-lastPaint>32){paint();followTour();lastPaint=now;}
  if(now-lastInteraction>3000&&!$('flood-overlay').querySelector(':focus-visible')&&!$('flood-options').open)$('flood-overlay').classList.add('controls-idle');
  raf=requestAnimationFrame(tick);
 }
 function play(){if(playing){pause();return;}resumeFollow();if(index===events.length-1&&progress>=1)select(0);playing=true;last=performance.now();lastInteraction=last;$('flood-overlay').classList.remove('controls-idle');$('flood-play').textContent='Pause';$('flood-play').setAttribute('aria-pressed','true');$('flood-overlay').classList.add('is-playing');followTour(true);raf=requestAnimationFrame(tick);}
 function setActive(value){
  active=value;$('flood-panel').hidden=!active;$('flood-overlay').hidden=!active;
  $('analysis-toggle').hidden=!active;
  $('flood-map-stamp').hidden=!active;
  document.querySelector('.sidebar').classList.toggle('flood-mode',active);
  $('flood-mode').setAttribute('aria-pressed',String(active));
  if(active){render();setAnalysis(true);if(!hasLaunched){hasLaunched=true;if(!reduced.matches)play();}}else{pause();clearPins();pinKey='';setAnalysis(false);}paint();
 }
 function placeControls(){
  const inSidebar=!analysis&&compact.matches&&!$('map-panel').classList.contains('is-fullview');
  const overlay=$('flood-overlay');overlay.classList.toggle('in-sidebar',inSidebar);
  if(inSidebar){if(overlay.parentElement!==$('flood-panel'))$('flood-panel').insertBefore(overlay,$('flood-content'));}
  else if(overlay.parentElement!==$('map-panel'))$('map-panel').append(overlay);
 }
 async function init(){
  compact.addEventListener('change',()=>{placeControls();if(active){map.resize();camera();}});
  new MutationObserver(placeControls).observe($('map-panel'),{attributes:true,attributeFilter:['class']});
  placeControls();
  document.addEventListener('visibilitychange',paint);
  $('flood-mode').onclick=()=>setMode('flood');
  $('satellite-toggle').onclick=()=>{satelliteOn=!satelliteOn;paintSatellite();};
  $('flood-timeline').max=String(events.length*100);
  const years=[...new Set(events.map(e=>e.year))];
  $('flood-years').innerHTML=years.map(year=>`<button type="button" data-flood-year="${escapeHTML(year)}" aria-pressed="false">${escapeHTML(year)}</button>`).join('');
  document.querySelectorAll('[data-flood-year]').forEach(button=>button.onclick=()=>{const i=events.findIndex(e=>e.year===button.dataset.floodYear);pause();select(i,true);});
  $('flood-event-select').innerHTML=events.map((e,i)=>`<option value="${i}">${escapeHTML(e.label)}</option>`).join('');
  $('flood-event-select').onchange=e=>{const chosen=Number(e.target.value);pause();select(chosen,true);};
  $('analysis-toggle').onclick=()=>{if(analysis)setMode('explore');else setAnalysis(true);};
  const scrubGlobal=value=>{
   pause();resumeFollow();const position=Math.max(0,Math.min(events.length*100,Number(value)));const next=Math.min(events.length-1,Math.floor(position/100));
   if(next!==index){index=next;progress=(position-index*100)/100;render();}else{progress=(position-index*100)/100;paint();}if(!followTour(true))camera();
  };
  $('flood-timeline').oninput=event=>scrubGlobal(event.target.value);
  $('flood-timeline').onkeydown=event=>{if(event.key===' '){event.preventDefault();play();}};
  const wake=()=>{lastInteraction=performance.now();$('flood-overlay').classList.remove('controls-idle');};
  for(const event of ['pointermove','pointerdown','keydown','focusin'])$('map-panel').addEventListener(event,wake);
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&$('flood-options').open){$('flood-options').open=false;$('flood-options').querySelector('summary').focus();}});
  document.addEventListener('pointerdown',event=>{if($('flood-options').open&&!$('flood-options').contains(event.target))$('flood-options').open=false;});
  const scrubChart=event=>{const rect=$('analysis-plot').getBoundingClientRect();pause();progress=Math.max(0,Math.min(1,(event.clientX-rect.left-rect.width*.038)/(rect.width*.924)));paint();followTour(true);};
  $('analysis-plot').onpointerdown=event=>{event.preventDefault();$('analysis-plot').setPointerCapture(event.pointerId);scrubChart(event);};
  $('analysis-plot').onpointermove=event=>{if(event.buttons===1)scrubChart(event);};
  $('flood-play').onclick=play;
  $('flood-prev').onclick=()=>{pause();select(index-1,true);};
  $('flood-next').onclick=()=>{pause();select(index+1,true);};
  $('flood-replay').onclick=()=>{pause();progress=0;play();};
  $('flood-compare').onclick=()=>{
   overlayVisible=!overlayVisible;$('flood-compare').textContent=overlayVisible?'Hide overlay':'Show overlay';
   $('flood-compare').setAttribute('aria-pressed',String(!overlayVisible));
   $('flood-map-stamp').classList.toggle('overlay-hidden',!overlayVisible);paint();
  };

  document.querySelectorAll('[data-hazard-period]').forEach(button=>button.onclick=()=>{hazardPeriod=Number(button.dataset.hazardPeriod);$('flood-map-kind').textContent=`Modelled river flooding - ${hazardPeriod}-year scenario`;paint();});
  $('flood-speed').onchange=event=>{speed=Number(event.target.value);};
  // Manual dragging pauses travel until Play or a timeline selection resumes it.
  $('flood-buildings').onclick=()=>{showBuildings=!showBuildings;$('flood-buildings').setAttribute('aria-pressed',String(showBuildings));paint();};
  $('flood-follow').onclick=()=>{followRiver=!followRiver;syncFollow();if(followRiver)followTour(true);};
  map?.on('dragstart',event=>{if(event.originalEvent){followRiver=false;syncFollow();}});
  syncFollow();
  document.querySelectorAll('[data-flood-place]').forEach(b=>b.onclick=()=>camera(b.dataset.floodPlace));
  const inputs=[['flood-reported-locations','flood-reported-locations'],['flood-reported-roads','flood-reported-roads'],['flood-observed','flood-observed-2024'],['flood-clouds','flood-clouds-2024'],['flood-observed-2025','flood-observed-2025'],['flood-hazard','flood-hazard-baseline'],['flood-observed-2026','flood-observed-2026']];
  getJSON('data/satellite-scenes.json').then(value=>{scenes=value.scenes;paintSatellite();}).catch(()=>{$('satellite-toggle').hidden=true;});
  const results=await Promise.allSettled(inputs.map(async([id,file])=>{data[id]=await getJSON(`data/${file}.geojson?v=20261103-unique-places`);}));
  // One date-filtered radar rendering pipeline; source files retain their own provenance.
  if(data['flood-observed-2026']){
   const radar=data['flood-observed-2025'];
   if(radar){radar.features.push(...data['flood-observed-2026'].features);radar.metadata.map_pins.push(...data['flood-observed-2026'].metadata.map_pins);}
   else data['flood-observed-2025']=data['flood-observed-2026'];
  }
  prepareRoadSections();
  loadError=results.some(r=>r.status==='rejected');dataReady=true;
  observedArea=(data['flood-observed']?.features||[]).reduce((sum,feature)=>sum+polygonArea(feature.geometry),0);
  install();map?.on('style.load',()=>{basemapPaint=[];install();if(analysis)styleAnalysis(true);});
  pinKey='';if(active){render();camera();}
 }
 init();
 return {setActive,get active(){return active;},install,pause,refresh:paint};
})();
