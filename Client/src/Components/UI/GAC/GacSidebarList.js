/* import ListSubheader from "@mui/material/ListSubheader";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom"; */

import * as React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";

export const GacSidebarList = (props) => {
  return (
    <div>
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("HOME");
        }}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>

      {/* <ListItem
        button
        onClick={() => {
          props.onActiveTab("MANAGE PROGRAM");
        }}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Programs" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("ADD PROGRAM");
        }}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Add Programs" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("MANAGE SESSION");
        }}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Session" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("ADD SESSION");
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Add Sessions" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("VIEW FACULTY");
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="View Faculty" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("MANAGE STUDENTS");
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Manage students" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("ADD STUDENTS");
        }}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Add Student" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("MANAGE PROGRESS REPORT");
        }}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Progress Report" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("ADD PROGRESS REPORT");
        }}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Add Progress Report" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("MANAGE SUPERVISORY COMMITTEE");
        }}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Supervisory Committee" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("ADD SUPERVISORY COMMITTEE");
        }}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Add Supervisory Committee" />
      </ListItem> */}
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("EVALUATE SYNOPSIS (MS)");
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Evaluate Synopsis (MS)" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("EVALUATE SYNOPSIS (PhD)");
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Evaluate Synopsis (PhD)" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("PENDING THESIS");
        }}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Pending Thesis" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("EVALUATE THESIS (MS)");
        }}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Evaluate Thesis (MS)" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("EVALUATE THESIS (PhD)");
        }}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Evaluate Thesis (PhD)" />
      </ListItem>

      {/* 
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("SEND NOTIFICATION TO ALL");
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Send Notification to All" />
      </ListItem> */}

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("VIEW MS STUDENT DETAILS");
        }}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="View MS Student Details" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("VIEW PhD STUDENT DETAILS");
        }}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="View PhD Student Details" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("SUPERVISOR'S REPORT");
        }}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Supervisor's Report" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("PROGRAM-WISE REPORT");
        }}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Program-Wise Report" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("THESIS-WISE REPORT");
        }}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Thesis-Wise Report" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("SYNOPSIS-WISE REPORT");
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Synopsis-Wise Report" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("VIEW SUPERVISOR/PROGRAM-WISE REPORT");
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="View Supervisor/Program-Wise Report" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("SESSION-WISE REPORT");
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Session-Wise Report" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("CHANGE PASSWORD");
        }}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Change Password" />
      </ListItem>
    </div>
  );
};
