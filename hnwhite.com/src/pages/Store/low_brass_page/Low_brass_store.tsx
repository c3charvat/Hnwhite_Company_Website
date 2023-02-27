import * as React from "react";
import {
  Typography,
  Box,
  Card,
  CardActions,
  Button,
  CardContent,
} from "@mui/material";
import * as _ from "lodash";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { chunk } from "lodash";
var logo = require("../static_Img/Background_V1.gif");

function getImagePaths(directory: any) {
  let imagePath: Array<any> = [];
  let images: Array<Array<any>> = [];
  directory
    .keys()
    .map((item: any, index: unknown) => {
      imagePath.push(item.replace("./",""))
      item=item.replace("./item1/", "")
      item=item.replace("./item2/", "")
      images.push(item)
    });
  //console.log(imagePath);
  return { images,imagePath };
}

const directory = require.context("./img/", true, /\.(png|jpe?g|svg)$/);
//console.log(directory);
let imagePaths = getImagePaths(directory);
//console.log(imagePaths);

let images: any = [];
imagePaths.imagePath.map((path: any) => images.push(require("./img/" + path)));
const chunks = _.chunk(images, 12);

export default function LowBrassStoreContent() {
  return (
    <React.Fragment>
      {chunks.map((imageArray: any, index: number) => (
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            paddingTop: "80px",
            backgroundImage: `url(${logo})`,
            width: "100vw",
            height: "100vh",
          }}
        >
          <Card sx={{ height: "500px", width: "400px" }}>
            <center>
              <Typography
                paragraph
                sx={{
                  alignContent: "center",
                  paddingTop: "3px",
                  paddingBottom: "0px",
                }}
              >
                Item 1
              </Typography>
            </center>
            <Box sx={{ height: "400px", width: "400px" }}>
              <Carousel autoPlay={false} showThumbs={false}>
                {chunks[index].map((image: any, index: any) => (
                  <div key={index}>
                    <img alt={image} src={image} />
                  </div>
                ))}
              </Carousel>
            </Box>
            <CardActions
              disableSpacing
              sx={{ flexGrow: 1, flexDirection: "row-reverse" }}
            >
              <Button size="large" variant="contained" sx={{ width: "100%" }}>
                Buy
              </Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </React.Fragment>
  );
}
