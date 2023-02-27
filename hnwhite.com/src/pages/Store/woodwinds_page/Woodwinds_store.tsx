import * as React from "react";
import { Typography, Box,Paper } from "@mui/material";
import StoreListing from "../Store_comp";
var logo = require("../static_Img/Background_V1.gif");

function apples() {
  return 0;
}

export default function WoodwindsStoreContent() {
  return (
    <React.Fragment>
      <Box component="main" sx={{ flexGrow: 1, p: 3 , paddingTop:'80px',backgroundImage:`url(${logo})`,width: '100vw', height: '100vh'}}> 
        <Typography paragraph>Wooodwinds Store</Typography>
        <Typography paragraph>Content 1</Typography>
        <StoreListing></StoreListing>
      </Box>
    </React.Fragment>
  );
}
