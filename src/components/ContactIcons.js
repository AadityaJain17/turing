import React from "react";
import { IconButton } from "@mui/material";
import Row from "./Row";
import { LinkedIn, GitHub, Google, WhatsApp, Instagram } from "@mui/icons-material";

function ContactIcons() {
  return(
    <Row>
        <IconButton href="https://www.linkedin.com/in/aadityajain17/" target="_blank" color='primary' sx={{p:1 }}>
            <LinkedIn sx={{width: 30, height: 30 }} />
        </IconButton>
        <IconButton href="https://github.com/AadityaJain17" target="_blank" color='primary' sx={{p:1 }}>
            <GitHub sx={{width: 30, height: 30 }} />
        </IconButton>
        <IconButton href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aadityajain017@gmail.com" target="_blank" color='primary' sx={{p:1 }}>
            <Google sx={{width: 30, height: 30 }} />
        </IconButton>
        <IconButton href="https://wa.me/7000321403" target="_blank" color='primary' sx={{p:1 }}>
            <WhatsApp sx={{width: 30, height: 30 }} />
        </IconButton>
        <IconButton href="https://www.instagram.com/orewaaaditya/" target="_blank" color='primary' sx={{p:1 }}>
            <Instagram sx={{width: 30, height: 30 }} />
        </IconButton>
    </Row>
  );
}

export default ContactIcons;
