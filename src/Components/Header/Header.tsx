import * as React from "react";
import { useState } from "react";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";

import MenuList from "./Parts/MenuList";
import FirstView from "./Parts/FirstView";

function Header() {
  return (
    <AppBar position="static" sx={appbar}>
      <MenuList />
      <FirstView />
    </AppBar>
  );
}

export const appbar = {
  backgroundColor: "rgba(20,20,20)",
  backgroundImage: "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)",
  letterSpacing: "4px",
};

export const menu = {
  fontSize: "20px",
};

export default Header;
