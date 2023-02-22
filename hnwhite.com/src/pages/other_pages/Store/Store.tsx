
import * as React from "react";
import { Typography, Box, Card, CardActions,Button, CardContent} from "@mui/material";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
var logo= require('../Static_Img/Background_V1.gif');

const directory = require.context("./img", false, /\.(png|jpe?g|svg)$/);
let imagePaths = getImagePaths(directory);

let images:any = [];
imagePaths.map((path:any) => images.push(require("./img/" + path)));


function getImagePaths(directory:any) {
  let images:any = [];
  directory.keys().map((item:any, index:unknown) => images.push(item.replace("./", "")));
  console.log(images)
  return images;
}

export default function StoreContent() {
  return (
    <React.Fragment>
      <Box component="main" sx={{ flexGrow: 1, p: 3 , paddingTop:'80px',backgroundImage:`url(${logo})`,width: '100vw', height: '100vh'}}> 
      <Card sx={{height: '500px', width: '400px'}}>
        <center><Typography paragraph sx={{alignContent:'center',paddingTop:'3px',paddingBottom:'0px'}}>Item 1</Typography></center>
        <Box sx={{height: '400px', width: '400px'}}>
        <Carousel autoPlay showThumbs={false}>
        {images.map((image:any, index:any)=>(
            <div key={index}>
                <img alt={image} src={image} />
            </div>
        ))}
        </Carousel>
        </Box>
        <CardActions disableSpacing  sx={{ flexGrow: 1, flexDirection:'row-reverse' }}>
          <Button size="large" variant="contained" sx={{width:"100%"}} >Buy</Button>
        </CardActions>
        </Card>
      </Box>
    </React.Fragment>
  );
}
