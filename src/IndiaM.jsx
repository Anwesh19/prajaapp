import React from "react";
import {ComposableMap,Geographies,Geography,ZoomableGroup} from "react-simple-maps";
import India from './topojsons/india.json';

const IndiaM = ({ setTooltipContent, setStateName, setShowDistrict }) => {
  return (
    <>
    <div className="parent">
      <ComposableMap className="map" data-tip="" projection="geoMercator" 
      width={600} height={283} 
      projectionConfig={{ scale: 420 }}>
      <ZoomableGroup zoom={1} center={[73,23]}>
        <Geographies geography={India}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography  
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#2c3e50",
                    outline: "none"
                  },
                  hover: {
                    fill: "#b8bfc4",
                    outline: "none"
                  }
                  // pressed: {
                  //   fill: "aqua",
                  //   outline: "none"
                  // }
                }}
                onMouseEnter={() => {
                  const { ST_NM } = geo.properties;
                  setTooltipContent(`${ST_NM}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                onClick = {() => {
                  const { ST_NM } = geo.properties;
                  setStateName(`${ST_NM}`);
                  setShowDistrict(true);
                }}
                />
                ))
              }
      
          </Geographies>
        </ZoomableGroup>

      </ComposableMap>
      <div className="name">
        <h1>INDIA</h1>
        <h5>country infographic map</h5>
        <p>Interactive map</p>
      
      </div>
      <div className="info">
        
        <h5>total Population</h5>
        <h3>1,425,775,850 (2023 e)</h3>
        <h5>capital</h5>
        <h3>New Delhi</h3>
        <h5>Prime minister</h5>
        <h3>Narendra Modi</h3>

      </div>
      <div className="info1">
        <h3>BHARAT</h3>
        <h2>32, 87, 263 sq.km</h2>
        {/* <p>secular country</p>
        <p>Total Languages : 398</p> */}
        {/* <li>
          <ul>Area: 3,287,263 sq. km</ul>
          <ul>Coastline Length: 7,516 km</ul>
          <ul>currency: Indian Rupee</ul>
        </li> */}
      </div>
      </div>
      </>
    );
};
export default IndiaM;