import { Box } from '@mui/material';
import React from 'react';

function Row({ children, sx={} }) {
  const style = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    ...sx,
  };

  return <Box sx={style}>{children}</Box>
}

export default Row;