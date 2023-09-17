import React from 'react';
// import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function UserCard({ avatarSrc, username, description }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* <Avatar alt={username} src={avatarSrc} /> */}
      <Card sx={{ width:'80%',alignContent:'center',justifyContent:'center', display:'flex', margin:'auto',backgroundColor:"#212121"}}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {username}
            </Typography>
            <Typography variant="h5" color="white">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default UserCard;
