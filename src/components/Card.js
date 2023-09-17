import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ActionAreaCard() {
  return (
    <Card sx={{width:'80%',backgroundColor:'#212121',color:'white'}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            Turing
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            To Discover - To Share - To Build
          </Typography>
          <Typography align='justify' variant="body2" color="white">
            <h3>
            To provide value through leadership in the development and delivery of innovative 
            computing and information technology solutions to support the teaching, learning, 
            research, and administration goals of the University. 
            <br />
            To help students understand up-to-date computer technology, review Current hardware and 
            software products, explore different areas of interest, create a social environment where 
            students with various technology experiences come together and share information with one 
            another and Provide technology resources for less fortunate individuals in the form of charitable 
            giving and volunteerism. 
            <br />
            Turing is an innovative space that inspires everyone to be imaginative 
            and strive to be their best selves in order to shape and pioneer innovations 
            for the present and the future. 
            <br />
            To honour Sir Alan Turing’s contribution to the current computing world, 
            without whom we would not have the gadgets we use every day, it was given that name.
            </h3>
          </Typography>
          <Typography align="right" fontStyle={'italic'}>
            -Rahul Singh (Founder)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ActionAreaCard;