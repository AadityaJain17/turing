import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const FlippingCard = ({ image, text }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card
      onMouseEnter={handleCardFlip}
      onMouseLeave={handleCardFlip}
      style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
    >
      <CardMedia
        component="img"
        alt="Image"
        height="200"
        image={image}
        style={{ visibility: isFlipped ? 'hidden' : 'visible' }}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FlippingCard;
