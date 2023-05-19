import Dialog from '@mui/material/Dialog';
import React,{ useState } from "react";
import  Tooltip from 'react-tooltip';
import StateMap from './StateMap';

const Mdialog = props => {
    const [contentD, setContentD] = useState("");
    const [DTName, setDTName] = useState("");
    return (
        <Dialog fullScreen  open={props.show} onClose={props.closeModal} style={{ backgroundColor: 'black !important' }}>
            <StateMap setTooltipContent={setContentD} setDistrictName={setDTName} selectedState={props.StateName} />
            <Tooltip>{contentD}</Tooltip>
        </Dialog>
    )
};
export default Mdialog;