import React, { Component } from "react";
import SideMenu from "./SideMenu.js";
import Profile from "../profile.js";
import { StackNavigator } from "react-navigation";

const SideMenuRouter = StackNavigator(
  {
    SideMenu: { screen: SideMenu },
    Profile: { screen: Profile }
  }

);
export default SideMenuRouter;