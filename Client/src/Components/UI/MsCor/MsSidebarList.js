import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";

export const MsSidebarList = (props) => {
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
          props.onActiveTab("VIEW STUDENT DETAILS");
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="View Student Details" />
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
      </ListItem>

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("MANAGE SUBMISSION DEADLINE");
        }}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Submission Deadline" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("MANAGE SYNOPSIS SCHEDULE");
        }}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Synopsis Schedule" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("Create a Schedule");
        }}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Create a Schedule" />
      </ListItem>

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
          props.onActiveTab("GENERATE SYNOPSIS REPORT");
        }}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Generate Synopsis Report" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("VIEW SYNOPSIS REPORT");
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="View Synopsis Report" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("SEND SYNOPSIS REPORT");
        }}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Send Synopsis Report" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("MANAGE THESIS SCHEDULE");
        }}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Thesis Schedule" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("Create a Schedule");
        }}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Create a Schedule" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("EVALUATE THESIS (MS)");
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Evaluate Thesis (MS)" />
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
          props.onActiveTab("GENERATE THESIS REPORT");
        }}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Generate Thesis Report" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("VIEW THESIS REPORT");
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="View Thesis Report" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("SEND THESIS REPORT");
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="SendThesisReport" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          props.onActiveTab("MANAGE NOTIFICATION");
        }}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Notification" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          props.onActiveTab("SEND NOTIFICATION (MS)");
        }}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Send Notification (MS)" />
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
