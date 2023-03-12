import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightDarkSwitch from "./components/LightDarkSwitch";
import FooterContent from "../footer/footer";
import {Routes, Route, Link } from "react-router-dom";
import Home from "../other_pages/Home";
import Hnw_Story from "../other_pages/HnwStory";
import Archives from "../other_pages/Archives";
import Collection from "../other_pages/Collection";
import Famous_Artists from "../other_pages/FamousArtists";
import TromboneStoreContent from "../Store/trombones_page/Trombone_store";
import LowBrassStoreContent from "../Store/low_brass_page/Low_brass_store";
import TrumpetStoreContent from "../Store/trumpets_page/Trumept_store";
import WoodwindsStoreContent from "../Store/woodwinds_page/Woodwinds_store";
import StoreLandingPage from "../Store/landing_page/Landing_page";
var logo= require('./img/1960_Factory_Out_Line.png');
const drawerWidth = 240;
const router_arry = [
  "/",
  "/the_white_story",
  "/our_collection",
  "/the_archives",
  "/famous_artists",
  "/store",
  "/store/trumpets",
  "/store/trombones",
  "/store/low_brass",
  "/store/woodwinds",
  "/404",
];

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex",backgroundImage:`url(${logo})`,backgroundRepeat:'no-repeat',backgroundPositionX:'center',backgroundPositionY:'50px',backgroundSize:'40% 40%'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ display: "flex" ,backgroundColor:'transparent'}}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            insert hnwhite logo here
          </Typography>
          <Typography variant="h6" sx={{ paddingRight: "20px" }}>
            -- links to different parts of the website?
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        PaperProps={{sx:{backgroundColor:'transparent'} }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, border: "none" },
        }}
      >
        <Toolbar/>
          <List sx={{backgroundColor:'transparent'}}>
            {[
              "Home",
              "The White Story",
              "Our Collection",
              "The Archives",
              "Famous Artists",
              "Store",
              "Store: Trumpet",
              "Store: Tromebone",
              "Store: Low Brass",
              "Store: Woodwinds",
            ].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                component={Link}
                to={router_arry[index]}
              >
                <ListItemButton sx={{color:theme.palette.primary.main}}>
                  <ListItemIcon>
                    {index === 0 ? <HomeOutlinedIcon />:'' }
                    {index === 1 ? <AutoStoriesOutlinedIcon/>:'' }
                    {index === 2 ? < AutoAwesomeOutlinedIcon/>:'' }
                    {index === 3 ? <Inventory2OutlinedIcon />:'' }
                    {index === 4 ? <MusicNoteOutlinedIcon />:'' }
                    {index === 5 ? < LocalGroceryStoreOutlinedIcon/>:'' }
                    {index === 6 ? < LocalGroceryStoreOutlinedIcon/>:'' }
                    {index === 7 ? < LocalGroceryStoreOutlinedIcon/>:'' }
                    {index === 8 ? < LocalGroceryStoreOutlinedIcon/>:'' }
                    {index === 9 ? < LocalGroceryStoreOutlinedIcon/>:'' }
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
      </Drawer>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/the_white_story" element={<Hnw_Story/>}/>
        <Route path="/our_collection" element={<Collection/>}/>
        <Route path="/the_archives" element={<Archives/>}/>
        <Route path="/famous_artists" element={<Famous_Artists/>}/>
        <Route path="/store" element={<StoreLandingPage/>}/>
        <Route path="/store/trumpets" element={<TrumpetStoreContent/>}/>
        <Route path="/store/trombones" element={<TromboneStoreContent/>}/>
        <Route path="/store/low_brass" element={<LowBrassStoreContent/>}/>
        <Route path="/store/woodwinds" element={<WoodwindsStoreContent/>}/>
      </Routes>
    </Box>
  );
}
