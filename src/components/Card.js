import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ActionAreaCard() {
  return (
    <Card sx={{width:'80'}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Turing
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Turing -The Techno-learning Club is renowned for fostering a culture of 
          innovation, learning, and technical excellence among our student community.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ActionAreaCard;