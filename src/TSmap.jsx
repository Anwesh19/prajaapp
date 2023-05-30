import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";
import Adilabad from './topojsons/telangana/Adilabad.json';
import BhadradriKothagudem from './topojsons/telangana/Bhadradri Kothagudem.json';
import Hyderabad  from './topojsons/telangana/Hyderabad.json';
import Jagitial from './topojsons/telangana/Jagitial.json';
import Jangoan from './topojsons/telangana/Jangoan.json';
import JayaShankar from './topojsons/telanganaJayaShankar.json';
import JogulambaGadhwal from './topojsons/telangana/Jogulamba Gadhwal.json';
import Karimnagar from './topojsons/telangana/Karimnagar.json';
import Khammam from './topojsons/telangana/Khammam.json';
import KumaramBheemAsifabad from './topojsons/telangana/Kumaram Bheem Asifabad.json';
import Mahabubnagar from './topojsons/telangana/Mahabubnagar.json';
import Mahbubabad from './topojsons/telangana/Mahbubabad.json';
import Mancherial from './topojsons/telangana/Mancherial.json';
import Medak from './topojsons/telangana/Medak.json';
import MedchalMalkajgiri from './topojsons/telangana/Medchal Malkajgiri.json';
import Mulugu from './topojsons/telangana/Mulugu.json';
import NagarKurnool from './topojsons/telangana/Nagarkurnool.json';
import Nalgonda from './topojsons/telangana/Nalgonda.json';
import Naryanpet from './topojsons/telangana/Naryanpet.json';
import Nirmal from './topojsons/telangana/Nirmal.json';
import Nizamabad from './topojsons/telangana/Nizamabad.json';
import Peddapalli from './topojsons/telangana/Peddapalli.json';
import RajannaSircilla from './topojsons/telangana/Rajanna sircilla.json';
import Rangareddy from './topojsons/telangana/Ranga Reddy.json';
import Sangareddy from './topojsons/telangana/Sangareddy.json';
import Siddipet from './topojsons/telangana/Siddipet.json';
import Suryapet from './topojsons/telangana/Suryapet.json';
import Vikarabad from './topojsons/telangana/Vikarabad.json';
import Wanaparthy from './topojsons/telangana/Wanaparthy.json';
import WarangalRural from './topojsons/telangana/Warangal Rural.json';
import WarangalUrban from './topojsons/telangana/Warangal Urban.json';
import YadadriBhuvanagiri from './topojsons/telangana/Yadadri Bhuvanagiri.json';
import Kamareddy from './topojsons/telangana/kamareddy.json';

const DistrictChart = ({ selectedDistrict }) => {
    let geoURL;
    let zoomMap = 1;
    let centerMap = [80, 22];
    let scaleMap = 400;
  
      if (selectedDistrict === 'Adilabad') {
      geoURL = Adilabad;
      scaleMap = 8000;
      centerMap = [73.8478, 18.5236];
      } 
      if (selectedDistrict === 'Bhadradri Kothagudem') {
      geoURL = BhadradriKothagudem;
      scaleMap = 9000;
      centerMap = [73.7910, 19.9973];
      } 
      if (selectedDistrict === 'Hyderabad') {
      geoURL = Hyderabad ;
      scaleMap = 12000;
      centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Jagitial') {
        geoURL = Jagitial;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Jangoan') {
        geoURL = Jangoan;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'JayaShankar') {
        geoURL = JayaShankar;Karimnagar
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'JogulambaGadhwal') {
        geoURL = JogulambaGadhwal;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Karimnagar') {
        geoURL = Karimnagar;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Khammam ') {
        geoURL = Khammam ;KumaramBheemAsifabad
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'KumaramBheemAsifabad') {
        geoURL = KumaramBheemAsifabad;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Mahabubnagar') {
        geoURL = Mahabubnagar;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Mahbubabad') {
        geoURL = Mahbubabad;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Mancherial') {
        geoURL = Mancherial;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Medak') {
        geoURL = Medak;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'MedchalMalkajgiri') {
        geoURL = MedchalMalkajgiri;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Mulugu') {
        geoURL = Mulugu;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'NagarKurnool') {
      geoURL = NagarKurnool;
      scaleMap = 12000;
      centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Nalgonda') {
      geoURL = Nalgonda;
      scaleMap = 12000;
      centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Naryanpet') {
        geoURL = Naryanpet;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Nirmal') {
        geoURL = Nirmal;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Nizamabad') {
        geoURL = Nizamabad;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Peddapalli') {
        geoURL = Peddapalli;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'RajannaSircilla') {
        geoURL = RajannaSircilla;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Rangareddy') {
        geoURL = Rangareddy;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Sangareddy') {
        geoURL = Sangareddy;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Siddipet') {
        geoURL = Siddipet;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Suryapet') {
        geoURL = Suryapet;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Vikarabad') {
        geoURL = Vikarabad ;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'Wanaparthy') {
      geoURL = Wanaparthy ;
      scaleMap = 12000;
      centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'WarangalRural') {
        geoURL = WarangalRural;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'WarangalUrban') {
        geoURL = WarangalUrban;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 
      if (selectedDistrict === 'YadadriBhuvanagiri') {
        geoURL = YadadriBhuvanagiri;
        scaleMap = 12000;
        centerMap = [74.123996,   21.378178];
      } 

      if (selectedDistrict === 'Kamareddy') {
      geoURL = Kamareddy;
      scaleMap = 12000;
      centerMap = [74.123996,   21.378178];
      }
    }
      return (
          <ComposableMap data-tip="" projection="geoMercator" width={400} height={400} projectionConfig={{ scale: scaleMap }}>
            <ZoomableGroup zoom={zoomMap} center={centerMap}>
              <Geographies geography={geoURL}>
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
                      }}
                    />
                  ))
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
)

