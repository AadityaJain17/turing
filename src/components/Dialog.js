import React from "react";
import Row from "./Row";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import Heading from "./Heading";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const CustomDialog = ({open, onClose, title, subtitle, children}) => {
    return (
        <Dialog open={open} onClose={onClose} sx={{p:2}} TransitionComponent={Transition}>
            <DialogTitle>
                <Row sx={{justifyContent: "space-between"}}>
                    <Heading title={title} subtitle={subtitle}/>
                    <IconButton onClick={onClose}>
                        <Close />
                    </IconButton>
                </Row>
            </DialogTitle>
            <DialogContent>
            {children}
            </DialogContent>
        </Dialog>
    );
};

export default CustomDialog;