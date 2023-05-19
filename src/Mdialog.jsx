import Dialog from '@mui/material/Dialog';
import React,{ useState } from "react";
import  Tooltip from 'react-tooltip';
import StateMap from './StateMap';
// import './App.css';

const Mdialog = props => {
    const [contentD, setContentD] = useState("");
    const [DTName, setDTName] = useState("");
    return (
        // <div className="map">
        <Dialog  fullScreen  open={props.show} onClose={props.closeModal}>
            <h5>{DTName}</h5>
            <StateMap setTooltipContent={setContentD} setDistrictName={setDTName} selectedState={props.StateName} />
            <Tooltip>{contentD}</Tooltip>
            
        </Dialog>
        // </div>
    )
};
export default Mdialog;