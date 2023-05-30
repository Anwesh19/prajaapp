
import Dialog from '@mui/material/Dialog';
import React,{ useState } from "react";
import  Tooltip from 'react-tooltip';
import './dialog.css';
import StateMap from './StateMap';
// import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
// import { createTheme,ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main:'#2c3e50',
//       contrastText: '#fff',
//     },
//     secondary: {
//       main: '#bdc3c7',
//       contrastText: '#000',
//     },
//   },
// });


const Mdialog = props => {
    // const classes = useStyles();
    const [contentD, setContentD] = useState("");
    const [DTName, setDTName] = useState("");
    return (
        <>
        <div className="statep">
        {/* <ThemeProvider > */}
          <Dialog fullScreen open={props.show} onClose={props.closeModal}  style={{ backgroundColor: 'black !important' }}>
            {/* <ArrowBackIosSharpIcon></ArrowBackIosSharpIcon> */}
            <StateMap setTooltipContent={setContentD} setDistrictName={setDTName} selectedState={props.StateName} />
            <Tooltip>{contentD}</Tooltip>
            <h5 className="stname"> {props.StateName}</h5>
            <div className="container">
              <div className="card">
                <div className="content">
                  <div className="front">
                    Capital
                    </div>
                  <div className="back">
                    Hyderabad
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <div className="front">
                    CM
                  </div>
                  <div className="back">
                    KCR!
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <div className="front">
                    Population
                  </div>
                  <div className="back">
                    98673000
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <div className="front">
                    Area
                  </div>
                  <div className="back">
                    349864500 sqkm
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <div className="front">
                    Assemblies
                  </div>
                  <div className="back">
                    280
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <div className="front">
                    parliament
                  </div>
                  <div className="back">
                    88
                  </div>
                </div>
              </div>
              


            </div>
        </Dialog>

  
      {/* </ThemeProvider> */}
      </div>
    
        </>

    )
};
export default Mdialog;