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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LightDarkSwitch from "./components/LightDarkSwitch";
import FooterContent from "../footer/footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../other_pages/Home";
import Hnw_Story from "../other_pages/Hnw_Story";
import Archives from "../other_pages/Archives";
import Collection from "../other_pages/Collection";
import Famous_Artists from "../other_pages/Famous_Artists";
import Store from "../other_pages/Store/Store";
const drawerWidth = 240;
const router_arry = [
  "/home",
  "/the_white_story",
  "/our_collection",
  "/the_archives",
  "/famous_artists",
  "/store",
  "/404",
];

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ display: "flex" }}>
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
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, border: "none" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              "Home",
              "The White Story",
              "Our Collection",
              "The Archives",
              "Famous Artists",
              "Store"
            ].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                component={Link}
                to={router_arry[index]}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 ? <HomeOutlinedIcon />:'' }
                    {index === 1 ? <AutoStoriesOutlinedIcon/>:'' }
                    {index === 2 ? < AutoAwesomeOutlinedIcon/>:'' }
                    {index === 3 ? <Inventory2OutlinedIcon />:'' }
                    {index === 4 ? <MusicNoteOutlinedIcon />:'' }
                    {index === 5 ? < LocalGroceryStoreOutlinedIcon/>:'' }
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/the_white_story" element={<Hnw_Story/>}/>
        <Route path="/our_collection" element={<Collection/>}/>
        <Route path="/the_archives" element={<Archives/>}/>
        <Route path="/famous_artists" element={<Famous_Artists/>}/>
        <Route path="/store" element={<Store/>}/>
      </Routes>
    </Box>
  );
}
