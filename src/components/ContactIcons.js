import React from "react";
import { IconButton } from "@mui/material";
import Row from "./Row";
import { LinkedIn, GitHub, Google, WhatsApp, Instagram } from "@mui/icons-material";

function ContactIcons({linkedinlink, githublink , gmaillink , instalink , walink}) {
  return(
    <Row>
        <IconButton href={linkedinlink} target="_blank" color='primary' sx={{p:1 }}>
            <LinkedIn sx={{width: 30, height: 30 }} />
        </IconButton>
        <IconButton href={githublink} target="_blank" color='primary' sx={{p:1 }}>
            <GitHub sx={{width: 30, height: 30 }} />
        </IconButton>
        <IconButton href={gmaillink} target="_blank" color='primary' sx={{p:1 }}>
            <Google sx={{width: 30, height: 30 }} />
        </IconButton>
        <IconButton href={walink} target="_blank" color='primary' sx={{p:1 }}>
            <WhatsApp sx={{width: 30, height: 30 }} />
        </IconButton>
        <IconButton href={instalink} target="_blank" color='primary' sx={{p:1 }}>
            <Instagram sx={{width: 30, height: 30 }} />
        </IconButton>
    </Row>
  );
}

export default ContactIcons;
