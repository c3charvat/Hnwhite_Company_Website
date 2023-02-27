import * as React from "react";
import { Typography, Box } from "@mui/material";
var logo= require('./Static_Img/Background_V1.gif');

function apples() {
  return 0;
}

export default function HnwStoryContent() {
  return (
    <React.Fragment>
      <Box component="main" sx={{ flexGrow: 1, p: 3 , paddingTop:'80px',backgroundImage:`url(${logo})`,width: '100vw', height: '100vh'}}> 
        <Typography paragraph>Our Story</Typography>
        <Typography paragraph>Content 1</Typography>
      </Box>
    </React.Fragment>
  );
}
