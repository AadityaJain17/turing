import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import EventImage from './EventImage';

function TitlebarBelowImageList() {
  
  return (
    <ImageList sx={{ width:'auto', height:'auto'}}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} >
          <EventImage 
          img={item.img}
          title={item.title}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>{item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/assets/technex23.png',
    title: 'TECHNEX 2023',
  },
  {
    img: '/assets/technovation.png',
    title: 'TECHNOVATION ',
  },
  {
    img: '/assets/execute.png',
    title: '36 Hours Hackathon',
  },
  
  {
    img: '/assets/agile.png',
    title: 'Agile Software Development Workshop',
  },
  {
    img: '/assets/workshop.png',
    title: 'Hands On Workshop',
  },
  {
    img: '/assets/bootcamp.jpg',
    title: 'C++ Bootcamp',
  },
  {
    img: '/assets/xenex.png',
    title: 'E-Sports Event',
  },
  {
    img: '/assets/xyro.jpg',
    title: 'Flagship E-Sports Event',
  },
  {
    img: '/assets/problemscape.jpg',
    title: 'Entrepreneurship', 
  },
  {
    img: '/assets/enigma.jpeg',
    title: '24 Hours Datathon',
  },
  {
    img: '/assets/decodeit.png',
    title: 'Technical Quiz',
  },
  {
    img: '/assets/graphix.png',
    title: 'Graphics Desiging',
  },
  {
    img: '/assets/arcania.jpg',
    title: 'Flagship Technical Quiz',
  }
];

export default TitlebarBelowImageList;