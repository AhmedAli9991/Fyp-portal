import * as React from "react";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import PieChartIcon from "@mui/icons-material/PieChart";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import TableChartIcon from "@mui/icons-material/TableChart";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import PageviewIcon from "@mui/icons-material/Pageview";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import MapIcon from "@mui/icons-material/Map";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";
import CampaignIcon from "@mui/icons-material/Campaign";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PreviewIcon from "@mui/icons-material/Preview";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PollIcon from "@mui/icons-material/Poll";
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
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import "../ActiveTab.css";

export const MainListItems = (props) => {
  return (
    <div>
      <div className={props.onTab === "HOME" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("HOME");
          }}
        >
          <ListItemIcon /* style={{ color: "white" }} */>
            <HomeIcon /* className={props.onTab === "HOME" && "icon"} */ />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </div>

      <div className={props.onTab === "MANAGE PROGRAM" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("MANAGE PROGRAM");
          }}
        >
          <ListItemIcon>
            <PollIcon className={props.onTab === "MANAGE PROGRAM" && "icon"} />
          </ListItemIcon>
          <ListItemText primary="Manage Programs" />
        </ListItem>
      </div>

      <div className={props.onTab === "ADD PROGRAM" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("ADD PROGRAM");
          }}
        >
          <ListItemIcon>
            <AddBoxIcon className={props.onTab === "ADD PROGRAM" && "icon"} />
          </ListItemIcon>
          <ListItemText primary="Add Programs" />
        </ListItem>
      </div>

      <div className={props.onTab === "MANAGE SESSION" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("MANAGE SESSION");
          }}
        >
          <ListItemIcon>
            <ManageAccountsIcon
              className={props.onTab === "MANAGE SESSION" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Manage Session" />
        </ListItem>
      </div>

      <div className={props.onTab === "ADD SESSION" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("ADD SESSION");
          }}
        >
          <ListItemIcon>
            <AddCircleIcon
              className={props.onTab === "ADD SESSION" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Add Sessions" />
        </ListItem>
      </div>

      <div className={props.onTab === "VIEW FACULTY" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("VIEW FACULTY");
          }}
        >
          <ListItemIcon>
            <PreviewIcon className={props.onTab === "VIEW FACULTY" && "icon"} />
          </ListItemIcon>
          <ListItemText primary="View Faculty" />
        </ListItem>
      </div>

      <div className={props.onTab === "MANAGE STUDENTS" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("MANAGE STUDENTS");
          }}
        >
          <ListItemIcon>
            <LayersIcon
              className={props.onTab === "MANAGE STUDENTS" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Manage students" />
        </ListItem>
      </div>

      <div className={props.onTab === "ADD STUDENTS" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("ADD STUDENTS");
          }}
        >
          <ListItemIcon>
            <PersonAddIcon
              className={props.onTab === "ADD STUDENTS" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Add Student" />
        </ListItem>
      </div>

      <div className={props.onTab === "MANAGE PROGRESS REPORT" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("MANAGE PROGRESS REPORT");
          }}
        >
          <ListItemIcon>
            <DonutSmallIcon
              className={props.onTab === "MANAGE PROGRESS REPORT" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Manage Progress Report" />
        </ListItem>
      </div>

      <div className={props.onTab === "ADD PROGRESS REPORT" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("ADD PROGRESS REPORT");
          }}
        >
          <ListItemIcon>
            <AutoStoriesIcon
              className={props.onTab === "ADD PROGRESS REPORT" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Add Progress Report" />
        </ListItem>
      </div>

      <div className={props.onTab === "MANAGE SUPERVISORY COMMITTEE" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("MANAGE SUPERVISORY COMMITTEE");
          }}
        >
          <ListItemIcon>
            <DashboardIcon
              className={
                props.onTab === "MANAGE SUPERVISORY COMMITTEE" && "icon"
              }
            />
          </ListItemIcon>
          <ListItemText primary="Manage Supervisory Committee" />
        </ListItem>
      </div>

      <div className={props.onTab === "ADD SUPERVISORY COMMITTEE" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("ADD SUPERVISORY COMMITTEE");
          }}
        >
          <ListItemIcon>
            <AddModeratorIcon
              className={props.onTab === "ADD SUPERVISORY COMMITTEE" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Add Supervisory Committee" />
        </ListItem>
      </div>

      <div className={props.onTab === "EVALUATE SYNOPSIS (MS)" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("EVALUATE SYNOPSIS (MS)");
          }}
        >
          <ListItemIcon>
            <AnalyticsIcon
              className={props.onTab === "EVALUATE SYNOPSIS (MS)" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Evaluate Synopsis (MS)" />
        </ListItem>
      </div>

      <div className={props.onTab === "EVALUATE SYNOPSIS (PhD)" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("EVALUATE SYNOPSIS (PhD)");
          }}
        >
          <ListItemIcon>
            <MapIcon
              className={props.onTab === "EVALUATE SYNOPSIS (PhD)" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Evaluate Synopsis (PhD)" />
        </ListItem>
      </div>

      <div className={props.onTab === "MANAGE NOTIFICATION" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("MANAGE NOTIFICATION");
          }}
        >
          <ListItemIcon>
            <EditNotificationsIcon
              className={props.onTab === "MANAGE NOTIFICATION" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Manage Notification" />
        </ListItem>
      </div>

      <div className={props.onTab === "SEND NOTIFICATION (PhD)" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("SEND NOTIFICATION (PhD)");
          }}
        >
          <ListItemIcon>
            <CampaignIcon
              className={props.onTab === "SEND NOTIFICATION (PhD)" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Send Notification (PhD)" />
        </ListItem>
      </div>

      <div className={props.onTab === "SEND NOTIFICATION (MS)" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("SEND NOTIFICATION (MS)");
          }}
        >
          <ListItemIcon>
            <NotificationsActiveIcon
              className={props.onTab === "SEND NOTIFICATION (MS)" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Send Notification (MS)" />
        </ListItem>
      </div>

      <div className={props.onTab === "SEND NOTIFICATION TO ALL" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("SEND NOTIFICATION TO ALL");
          }}
        >
          <ListItemIcon>
            <ContactMailIcon
              className={props.onTab === "SEND NOTIFICATION TO ALL" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Send Notification to All" />
        </ListItem>
      </div>

      <div className={props.onTab === "VIEW MS STUDENT DETAILS" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("VIEW MS STUDENT DETAILS");
          }}
        >
          <ListItemIcon>
            <PageviewIcon
              className={props.onTab === "VIEW MS STUDENT DETAILS" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="View MS Student Details" />
        </ListItem>
      </div>

      <div className={props.onTab === "VIEW PhD STUDENT DETAILS" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("VIEW PhD STUDENT DETAILS");
          }}
        >
          <ListItemIcon>
            <ContentPasteSearchIcon
              className={props.onTab === "VIEW PhD STUDENT DETAILS" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="View PhD Student Details" />
        </ListItem>
      </div>

      <div className={props.onTab === "SUPERVISOR'S REPORT" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("SUPERVISOR'S REPORT");
          }}
        >
          <ListItemIcon>
            <PeopleIcon
              className={props.onTab === "SUPERVISOR'S REPORT" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Supervisor's Report" />
        </ListItem>
      </div>

      <div className={props.onTab === "PROGRAM-WISE REPORT" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("PROGRAM-WISE REPORT");
          }}
        >
          <ListItemIcon>
            <LeaderboardIcon
              className={props.onTab === "PROGRAM-WISE REPORT" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Program-Wise Report" />
        </ListItem>
      </div>

      <div className={props.onTab === "THESIS-WISE REPORT" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("THESIS-WISE REPORT");
          }}
        >
          <ListItemIcon>
            <TableChartIcon
              className={props.onTab === "THESIS-WISE REPORT" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Thesis-Wise Report" />
        </ListItem>
      </div>

      <div className={props.onTab === "SYNOPSIS-WISE REPORT" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("SYNOPSIS-WISE REPORT");
          }}
        >
          <ListItemIcon>
            <PieChartIcon
              className={props.onTab === "SYNOPSIS-WISE REPORT" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Synopsis-Wise Report" />
        </ListItem>
      </div>

      <div
        className={
          props.onTab === "VIEW SUPERVISOR/PROGRAM-WISE REPORT" && "tab"
        }
      >
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("VIEW SUPERVISOR/PROGRAM-WISE REPORT");
          }}
        >
          <ListItemIcon>
            <FindInPageIcon
              className={
                props.onTab === "VIEW SUPERVISOR/PROGRAM-WISE REPORT" && "icon"
              }
            />
          </ListItemIcon>
          <ListItemText primary="View Supervisor/Program-Wise Report" />
        </ListItem>
      </div>

      <div className={props.onTab === "SESSION-WISE REPORT" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("SESSION-WISE REPORT");
          }}
        >
          <ListItemIcon>
            <ScreenSearchDesktopIcon
              className={props.onTab === "SESSION-WISE REPORT" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Session-Wise Report" />
        </ListItem>
      </div>

      <div className={props.onTab === "CHANGE PASSWORD" && "tab"}>
        <ListItem
          button
          onClick={() => {
            props.onActiveTab("CHANGE PASSWORD");
          }}
        >
          <ListItemIcon>
            <ChangeCircleIcon
              className={props.onTab === "CHANGE PASSWORD" && "icon"}
            />
          </ListItemIcon>
          <ListItemText primary="Change Password" />
        </ListItem>
      </div>
    </div>
  );
};
