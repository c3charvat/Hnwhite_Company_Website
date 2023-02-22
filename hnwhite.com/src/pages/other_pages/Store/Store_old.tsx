import * as React from "react";
import { Typography, Box, Card, CardActionArea,Button, CardContent} from "@mui/material";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
var img1 = require('./img/172663_1.jpg');
var img2 = require('./img/172663_2.jpg');
var img3 = require('./img/172663_3.jpg');
var img4 = require('./img/172663_4.jpg');
var img5 = require('./img/172663_5.jpg');
var img6 = require('./img/172663_6.jpg');

function apples() {
  return 0;
}


export default function StoreContent() {
  return (
    <React.Fragment>
      <Box component="main" sx={{ flexGrow: 1, p: 3 , paddingTop:'80px'}}> 
      <Card sx={{height: '400px', width: '400px'}}>
        <center><Typography paragraph sx={{alignContent:'center',paddingBottom:'0px'}}>Item 1</Typography></center>
        <Carousel autoPlay>
        <div>
            <img alt="" src={img1} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img alt="" src={img2} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img alt="" src={img3} />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img alt="" src={img4} />
            <p className="legend">Legend 4</p>
        </div>
        <div>
            <img alt="" src={img5} />
            <p className="legend">Legend 5</p>
        </div>
        <div>
            <img alt="" src={img6} />
            <p className="legend">Legend 6</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
            <p className="legend">Legend 7</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
            <p className="legend">Legend 8</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
            <p className="legend">Legend 9</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
            <p className="legend">Legend 10</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg" />
            <p className="legend">Legend 11</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg" />
            <p className="legend">Legend 12</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg" />
            <p className="legend">Legend 13</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" />
            <p className="legend">Legend 14</p>
        </div>
        </Carousel>
        </Card>
      </Box>
    </React.Fragment>
  );
}
