import React from "react";
import {ComposableMap,Geographies,Geography,ZoomableGroup} from "react-simple-maps";
import India from './topojsons/india.json';

const IndiaM = ({ setTooltipContent, setStateName, setShowDistrict }) => {
  return (
    <>
      <ComposableMap  data-tip="" projection="geoMercator" 
      width={600} height={283} 
      projectionConfig={{ scale: 420 }}>
        <ZoomableGroup zoom={1} center={[70,23]}>
          <Geographies geography={India}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography  
                  key={geo.rsmKey}
                  geography={geo}
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
      </>
    );
};
export default IndiaM;