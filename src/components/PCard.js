import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions , Button } from '@mui/material';
import Column from './Column';


function MultiActionAreaCard({ image, title, description, links }) {
  return (
    <Card sx={{ m:1, height:"25rem", width:"100%" }}>
        <CardMedia
          component="img"
          sx={{height:"40%"}}
          image={image}
          alt={title}
        />
        <CardContent sx={{height:"50%"}}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      <Column sx={{height: "10%", alignItems:"flex-end", flexDirection:"column-reverse"}}>
      
      <CardActions>
        {links.map((link, index) => (
          <Button
            key={index}
            href={link.url}
            target={link.target || '_blank'}
            rel="noopener noreferrer"
          >
            {link.text}
          </Button>
        ))}
        
      </CardActions>
      </Column>  
    </Card>
  );
}

export default MultiActionAreaCard;
