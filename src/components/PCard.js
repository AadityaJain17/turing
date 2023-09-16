import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions , Button } from '@mui/material';


function MultiActionAreaCard({ image, title, description, links }) {
  return (
    <Card sx={{ m:1 }}>
      <CardActionArea>
        <CardMedia
          //image={image}
          alt={title}
        >
            <img src={image}  style={{height:"350px"}} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button style={{borderWidth:1, position:'absolute', bottom:-215, alignSelf:'flex-end'}}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target={link.target || '_blank'}
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '10px' , fontSize:'15px'}}
          >
            {link.text}
          </a>
        ))}
        </Button>
        
      </CardActions>
    </Card>
  );
}

export default MultiActionAreaCard;
