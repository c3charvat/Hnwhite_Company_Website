import * as React from "react";
import {
  Typography,
  Box,
  Card,
  CardActions,
  Button, 
  Modal,
} from "@mui/material";
import * as _ from "lodash";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { PayPalButtons} from "@paypal/react-paypal-js";
import BasicModal from "../Store_modal";

var logo = require("../static_Img/Background_V1.gif");

function getImagePaths(directory: any) {
  let imagePath: Array<any> = [];
  let images: Array<Array<any>> = [];
  directory.keys().map((item: any) => {
    imagePath.push(item.replace("./", ""));
    item = item.replace("./item1/", "");
    item = item.replace("./item2/", "");
    images.push(item);
  });
  //console.log(imagePath);
  return { images, imagePath };
}

function getJsonPaths(directory: any) {
  let jsonPath: Array<any> = [];
  let jsonData: Array<Array<any>> = [];
  directory.keys().map((item: any, index: unknown) => {
    jsonPath.push(item.replace("./", ""));
    item = item.replace("./item1/", "");
    item = item.replace("./item2/", "");
    jsonData.push(item);
  });
  return { jsonData, jsonPath };
}


const directory = require.context("./img/", true, /\.(png|jpe?g|svg)$/);
const jsonDirectory = require.context("./img/", true, /\.json$/);
//console.log(directory);
//console.log(jsonDirectory);
let imagePaths = getImagePaths(directory);
let jasonPaths = getJsonPaths(jsonDirectory);
//console.log(imagePaths);
console.log(jasonPaths);

let images: any = [];
imagePaths.imagePath.map((path: any) => images.push(require("./img/" + path)));
const imageChunks = _.chunk(images, 12);

let jsonData: any = [];
jasonPaths.jsonPath.map((path: any) =>
  jsonData.push(JSON.parse(JSON.stringify(require("./img/" + path))))
);
console.log(jsonData[0].cost);

export default function LowBrassStoreContent() {
  return (
    <React.Fragment>
      <Box
        component="main"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          flexGrow: 1,
          p: 3,
          paddingTop: "80px",
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "repeat",
        }}
      >
        {imageChunks.map((imageArray: any, index: number) => (
          <div>
            <Card sx={{ margin: "5px", height: "500px", width: "410px" }}>
              <center>
                <Typography
                  paragraph
                  sx={{
                    alignContent: "center",
                    paddingTop: "3px",
                    paddingBottom: "0px",
                    marginBottom: "0px"
                  }}
                  fontFamily="Kaushan Script"
                  fontSize={25}
                >
                  {jsonData[index].title}
                </Typography>
              <Box sx={{ marginleft:'10px', height: "400px", width: "400px" }}>
                <Carousel autoPlay={false} showThumbs={false}>
                  {imageChunks[index].map((image: any, index: any) => (
                    <div key={index}>
                      <img alt={image} src={image} />
                    </div>
                  ))}
                </Carousel>
              </Box>
              </center>
              <CardActions
                sx={{ marginLeft: "70px", padding: "15px", scale: "1.5" }}
              >
                <Box>
                  <PayPalButtons
                    fundingSource="paypal"
                    createOrder={(data, actions: any) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: jsonData[index].cost,
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions: any) => {
                      return actions.order.capture().then((details: any) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                      });
                    }}
                  />
                </Box>
                <BasicModal Title={jsonData[index].title} Data={jsonData[index].description}></BasicModal>
              </CardActions>
            </Card>
          </div>
        ))}
      </Box>
    </React.Fragment>
  );
}
