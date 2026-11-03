# Underflow - Nairobi Waterways

**Day 2: Lines | #30DayMapChallenge 2026**

A map of Nairobi's rivers, streams and drainage lines, connecting the waterway network to stories of flooding and the streets and neighbourhoods affected.

The app opens directly into the flood animation: dated reports, satellite observations and a separate long-term model comparison. The map and playback controls fill the main view.

## Explore the map

- Play or scrub the flood timeline, jump between years, and follow named location pins.
- Animated water textures cover every available satellite flood footprint for the selected observation date. Boundaries stay fixed; the motion does not reconstruct flood growth. Report-only locations remain pins without invented flood extents.
- Compare three long-term river-flood scenarios in the undated Model chapter.
- Use full map view on desktop, tablet or phone. Reduced-motion preferences suppress decorative motion.

The network contains **792 mapped ways**, approximately **530.6 km**, inside a rectangular Nairobi study area. OpenStreetMap snapshot: **2 November 2026, 11:57 UTC**. The query, bounds and processing details are embedded in `data/waterways.geojson`.

Named segments are grouped by source name and type; that does not establish connected channels. Lengths cover the study area, not whole rivers. Dashed lines are explicitly tagged intermittent or seasonal; solid lines do not prove year-round flow. The Nairobi County outline provides context and does not clip the waterway dataset.

## Flood timeline

| Chapter | Evidence displayed |
| --- | --- |
| 1961 | Retrospective historical account; no local extent |
| 1997-98 | Historical context; no local extent |
| March-April 2018 | Published rainfall and flood research; no local extent |
| 2023-24 | El Nino climate context; no local extent |
| 21 April 2024 | Reported locations, including T-Mall, South C and a Kangundo Road reference |
| 1 May 2024 | Preliminary UNOSAT observation and cloud mask |
| 14 April 2025 | Partial GFM radar detections |
| 21-23 April 2025 | Approximate reported locations |
| 26 April 2025 | Partial GFM radar detections |
| 3-4 October 2025 | Reported road and city-centre references |
| 6-7 March 2026 | Reported locations with individual dates or broader March reporting periods |
| Model baseline | Long-term model scenarios, without an event date |

Timeline spacing is for navigation, not elapsed-year scale. The earliest included account is 1961, not a claim about Nairobi's first flood. Climate context does not attribute every local flood to El Nino. Casualty totals are omitted to avoid mixing different reporting dates and geographic areas.

### Reading the active section

The map stamp shows the selected year, event date or reporting period, active place name and section readout. Click a year on the timeline to open its first chapter; use previous/next or scrub the slider to visit the other dates within that year.

- Satellite sections show the area of highlighted water polygons in square metres or square kilometres, with depth unknown.
- Reported locations state that the extent is not measured; their water effects are illustrative.
- Model sections show the selected return-period footprint separately from historical observations.

The place-name dropdown is removed. Names appear directly on map pins. Playback options contain speed, replay, camera-follow, overlay comparison and source explanations.

### Reports and observations

There are **39 approximate report references**: three for April 2024, four for April 2025, two for October 2025 and thirty for March 2026. Each pin retains its source, date or reporting period and location qualification. This is a selected inventory, not every affected road or incident in Nairobi. Pins are not live road-closure notices.

Report coordinates use OSM place nodes or road vertices near the reported landmark. Contextual road highlights are clipped locally for orientation; they do not establish surveyed flooded lengths. The Kangundo Road pin near Ruai is a road reference: the April 2024 article does not specify an exact affected section. South B and Mathare references likewise do not claim surveyed incident addresses.

The 2024 observation contains 751 clipped polygon components. The 2025 data contains 13 partial detections from two satellite dates. These are not complete or field-validated event extents. Radar may miss urban flooding, and some detections near Ruai treatment ponds may reflect water changes or classification errors. No urban exclusion raster is included. Missing detections or cloud-obscured areas are not evidence of dry ground.

Repeated satellite place names are grouped into one display pin and camera stop per observation date; all source polygons remain. Names prefixed with Near identify a nearby OSM reference, not flooding throughout the entire neighbourhood. Satellite readouts measure highlighted polygon area, not depth, discharge or severity. Different coverage and evidence types prevent direct comparisons of full-event magnitude.

### Long-term model scenarios

The Model chapter compares one derived footprint at a time:

| Return period | Annual exceedance chance under model assumptions |
| --- | --- |
| 10-year | 10% |
| 50-year | 2% |
| 100-year | 1% |

These are not fixed schedules, observations or calibrated 2026 forecasts. The approximately 90 m JRC river model does not resolve every small channel, urban drainage problem or individual property's risk. Unmapped cells are not proven safe.

The prepared dataset retains the lowest sampled return period with modelled depth of at least 0.1 m, excluding supplied permanent-water and spurious-depth flags. Scenario comparisons accumulate these sampled bands. Processing and source notices are embedded in `flood-hazard-baseline.geojson`.

### Animation

Camera views frame the active reference or observation group. Selected road sections receive moving light, report pins have a screen-sized water ripple, and selected satellite polygons receive wave texture. These effects are illustrative: they do not simulate flood spread, timing, water depth, velocity or inundated road width. Decorative river pulses move west to east and do not measure actual flow direction.

Playback can be paused, replayed or adjusted in speed; camera follow and overlay comparison are available. Returning to the dashboard stops playback and removes flood pins, popups and overlays. Current roads and buildings are context, not historical damage inventories. Building heights appear only where the basemap supplies a height.

## Sources and attribution

**Base geography:** [OpenStreetMap contributors, ODbL 1.0](https://www.openstreetmap.org/copyright). Waterways, place references and the county outline retain source metadata. The local style adapts [OpenFreeMap Positron](https://tiles.openfreemap.org/styles/positron); the map retains OpenFreeMap, OpenMapTiles and OSM attribution.

**Satellite data:** [UNITAR-UNOSAT Nairobi product](https://unosat.org/products/3834). Analysis/production: UNOSAT. Source imagery: CNES 2024 / Airbus Defence and Space. Only derived vectors are bundled, not imagery. [JRC GDACS archive, event 1103225](https://www.gdacs.org/Floods/report.aspx?detail=true&episodeid=2&eventid=1103225&eventtype=FL) supplies the GFM detections; see [GFM limitations](https://confluence.ecmwf.int/spaces/CEMS/pages/242067378/Web+Layers).

**Model:** [JRC global river flood hazard maps](https://jeodpp.jrc.ec.europa.eu/ftp/jrc-opendata/CEMS-GLOFAS/flood_hazard/), European Commission Joint Research Centre, Baugh et al. (2024). The source README specifies ODbL 1.0 and its copyright notice specifies CC BY 4.0; both notices are retained in the prepared data.

**History and climate:** [1961 retrospective](https://www.standardmedia.co.ke/business/amp/nairobi/article/2001543062/city-under-water-nairobi-drowned-by-poor-leadership-planning-failures-and-corruption), [Ngecu and Mathu (1999)](https://erepository.uonbi.ac.ke/items/490371c8-27b3-4f4a-9d46-3842e4d47a16), [Kilavi et al. (2018)](https://www.mdpi.com/2073-4433/9/12/472), and [WMO's March 2024 El Nino update](https://wmo.int/news/media-centre/el-nino-weakens-impacts-continue).

**Flood reports:** [Citizen Digital, April 2024](https://citizen.digital/article/nairobi-the-green-city-under-the-sun-marooned-by-floods-n340750), [The Star, April 2025](https://www.the-star.co.ke/news/2025-04-23-heavy-rains-six-killed-after-flash-floods-in-nairobi), [Citizen Digital, October 2025](https://www.citizen.digital/article/nairobians-wake-up-to-flooded-city-roads-after-friday-rains-n370865), [Citizen Digital, March 2026](https://citizen.digital/article/nairobi-streets-turn-to-filthy-rivers-as-rain-pounds-city-vehicles-nearly-submerged-n378622/), [The Star's Kenya Red Cross road list](https://www.the-star.co.ke/news/realtime/2026-03-07-nairobi-floods-red-cross-lists-affected-roads), [Eastleigh Voice](https://eastleighvoice.co.ke/national%20disaster%20management%20unit/307797/five-dead-in-nairobi-floods-as-rains-batter-city-emergency-response-activated), and [Copernicus EMS](https://global-flood.emergency.copernicus.eu/news/239-floods-and-landslides-in-kenya-ethiopia-and-tanzania-march-2026). The app includes original paraphrased summaries and links, not article text or photographs.

**Story:** [UNICEF's Mathare account](https://www.unicef.org/kenya/stories/children-leading-climate-action-mathare-after-devastating-floods), [SPACE4ALL / University of Twente flooding diagnostic](https://ris.utwente.nl/ws/portalfiles/portal/483486672/FloodExposure_Report_Nairobi_Space4All_1_.pdf), and [Nairobi Rivers Commission trunk-sewer programme](https://www.nrc.go.ke/construction-twin-trunk-sewer-lines). Highlighted waterways do not constitute a sewer inventory or measured pollution plume.
