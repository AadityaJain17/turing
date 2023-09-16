import { Box } from '@mui/material';
import React from 'react';

function Column({ children, sx={} }) {
  const style = {
    display: "flex",
    flexDirection: "column",
    ...sx,
  };

  return <Box sx={style}>{children}</Box>;
}

export default Column;
