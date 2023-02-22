
import * as React from "react";
import { Typography, Box, Card, CardActionArea,Button, CardContent} from "@mui/material";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


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
      <Box component="main" sx={{ flexGrow: 1, p: 3 , paddingTop:'80px'}}> 
      <Card sx={{height: '400px', width: '400px'}}>
        <center><Typography paragraph sx={{alignContent:'center',paddingBottom:'0px'}}>Item 1</Typography></center>
        <Carousel autoPlay>
        {images.map((image:any, index:any)=>(
            <div key={index}>
                <img alt={image} src={image} />
            </div>
        ))}
        </Carousel>
        </Card>
      </Box>
    </React.Fragment>
  );
}
