import * as React from "react";
import { Typography, Box, Button } from "@mui/material";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { Link } from "react-router-dom";
var logo = require("./static_Img/Background_V1.gif");

function getImagePaths(directory: any) {
  let images: any = [];
  directory
    .keys()
    .map((item: any, index: unknown) => images.push(item.replace("./", "")));
  console.log(images);
  return images;
}

const directory = require.context("./img", false, /\.(png|jpe?g|svg)$/);
let imagePaths = getImagePaths(directory);

let images: any = [];
//console.log(imagePaths)
imagePaths.map((path: any) => images.push(require("./img/" + path)));

export default function StoreLandingPage() {
  return (
    <React.Fragment>
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
        <ImageList variant="masonry" cols={3} gap={2}>
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              sx={{ height: "25vh" }}
              component={Link}
              to={item.link}
            >
              <img
                key={item.img}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}

              />
              <ImageListItemBar
                sx={{
                  background:'transparent'
                }}
                position="bottom"
                // actionIcon={
                //   <Button variant="text" sx={{fontSize:'20'}} component={Link} to={item.link}>
                //     {item.title}
                //   </Button>
                // }
                // actionPosition="right"
              />''
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </React.Fragment>
  );
}

const itemData = [
  {
    img: images[1],
    title: "Click here to view trombones",
    link: "/store/trombones",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: images[2],
    title: "Burger",
    link: "/store/trumpets",
    cols: 1,
  },
  {
    img: images[3],
    title: "Camera",
    link: "/store/low_brass",
  },
  {
    img: images[5],
    title: "Coffee",
    link: "/store/woodwinds",
    cols: 2,
  },
  {
    img: images[6],
    title: "Hats",
    link: "/Store",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    link: "/Store",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    link: "/Store",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    link: "/Store",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    link: "/Store",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    link: "/Store",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    link: "/Store",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    link: "/Store",
    cols: 2,
  },
];
