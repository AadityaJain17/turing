import React from "react";
import PersonComponent from "../Person";
import ContactIcons from "../ContactIcons";
import Column from "../Column";
import Row from "../Row";
import { Box, Typography } from "@mui/material";
import ActionAreaCard from "../Card";

export const About = () => {
  
  return (
    <div>
      <div style={{alignContent:'center',justifyContent:'center', display:'flex'}}>
      <ActionAreaCard />
      </div>
      <Row sx={{justifyContent:'space-evenly'}}>
      <Column sx={{alignItems: "center", m:2}}>
      <PersonComponent
        imgsrc='/assets/aj17.png'
        altname='Aaditya Jain'
        />
      <Box sx={{mt:2}}>
      <ContactIcons
        linkedinlink='https://www.linkedin.com/in/aadityajain17/'
        githublink='https://github.com/AadityaJain17'
        instalink='https://www.instagram.com/orewaaaditya/'
        walink='https://wa.me/7000321403'
        gmaillink='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aadityajain017@gmail.com'
        />
        <Typography>
          <h2>Aaditya Jain</h2>
          <h3>Turing Head (2022-23)</h3>
        </Typography>
      </Box>
      </Column>

      <Column sx={{alignItems: "center", m:2}}>
      <PersonComponent
        imgsrc='/assets/mv3.png'
        altname='Manas Vyas'
        />
      <Box sx={{mt:2}}>
      <ContactIcons
        linkedinlink='https://www.linkedin.com/in/manas-vyas-507b82262/'
        githublink='https://github.com/manasvyas03'
        instalink='https://www.instagram.com/manasvyas_/'
        walink='https://wa.me/7987601919'
        gmaillink='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=manasvyas3703@gmail.com'
        />
        <Typography>
          <h2>Manas Vyas</h2>
          <h3>Turing Core (2022-23)</h3>
        </Typography>
      </Box>
      </Column>

      <Column sx={{alignItems: "center", m:2}}>
      <PersonComponent
        imgsrc='/assets/founder.png'
        altname='Rahul Singh'
        />
      <Box sx={{mt:2}}>
      <ContactIcons
        linkedinlink='https://www.linkedin.com/in/rahul-singh-a53953178/'
        githublink='https://github.com/manasvyas03'
        instalink='https://www.instagram.com/rahul8698/'
        walink='https://wa.me/8347823834'
        gmaillink='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rahul8698@gmail.com'
        />
        <Typography>
          <h2>Rahul Singh</h2>
          <h3>Founder</h3>
        </Typography>
      </Box>
      </Column>
      </Row>

    </div>
    
  );
};
