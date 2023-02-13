import * as React from "react";
import { Typography, Box } from "@mui/material";

function apples() {
  return 0;
}

export default function HomeContent() {
  return (
    <React.Fragment>
      <Box component="main" sx={{ flexGrow: 1, p: 3 , paddingTop:'80px'}}> 
        <Typography paragraph>conetent 2.</Typography>
        <Typography paragraph>Content 1</Typography>
      </Box>
    </React.Fragment>
  );
}
