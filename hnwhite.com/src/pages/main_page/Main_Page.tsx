import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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
const drawerWidth = 240;
const router_arry = [
  "/home",
  "/the_white_story",
  "/our_collection",
  "/the_archives",
  "/famous_artists",
  "wam",
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
            ].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                component={Link}
                to={router_arry[index]}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
      </Routes>
    </Box>
  );
}
