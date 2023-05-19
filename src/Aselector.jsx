import React,{ useState } from "react";
import IndiaM from "./IndiaM";
import Mdialog from "./Mdialog";
import Tooltip  from 'react-tooltip';


const Aselector=()=>{
    const [content, setContent] = useState("");
    const [STName, setSTName] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return (
        <React.Fragment>
            <Mdialog show={show} StateName={STName} closeModal={handleClose} />
                <IndiaM setTooltipContent={setContent} setStateName={setSTName} setShowDistrict={setShow} />
                <Tooltip>{content}</Tooltip>
        </React.Fragment>
    );
}
export default Aselector;