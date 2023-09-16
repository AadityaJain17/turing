import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function TitlebarBelowImageList() {
  return (
    <ImageList sx={{ width:'auto', height:'auto' }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
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
    author: '<description ?>',
  },
  {
    img: '/assets/technovation.png',
    title: 'TECHNOVATION ',
    author: '@rollelflex_graphy726',
  },
  {
    img: '/assets/execute.png',
    title: '36 Hours Hackathon',
    author: '@helloimnik',
  },
  {
    img: '/assets/enigma.jpeg',
    title: '24 Hours Datathon',
    author: '@nolanissac',
  },
  {
    img: '/assets/workshop.png',
    title: 'Hands On Workshop',
    author: '@hjrc33',
  },
  {
    img: '/assets/bootcamp.jpg',
    title: 'C++ Bootcamp',
    author: '@arwinneil',
  },
  {
    img: '/assets/xenex.png',
    title: 'E-Sports Event',
    author: '@tjdragotta',
  },
  {
    img: '/assets/xyro.jpg',
    title: 'Flagship E-Sports Event',
    author: '@katie_wasserman',
  },
  {
    img: '/assets/decodeit.png',
    title: 'Technical Quiz',
    author: '@silverdalex',
  },
  {
    img: '/assets/arcania.jpg',
    title: 'Flagship Technical Quiz',
    author: '@shelleypauls',
  },
  {
    img: '/assets/graphix.png',
    title: 'Graphics Desiging',
    author: '@peterlaster',
  },
  {
    img: '/assets/problemscape.jpg',
    title: 'Entrepreneur',
    author: '@southside_customs',
  },
];

export default TitlebarBelowImageList;