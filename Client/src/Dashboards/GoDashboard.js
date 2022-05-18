import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
/* import CssBaseline from "@mui/material/CssBaseline"; */
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";

import Paper from "@mui/material/Paper";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { GoSideBarList } from "../Components/UI/Go/GoSidebarList";
/* import { Outlet } from "react-router-dom"; */

import ManageSupervisoryCommittee from "../Components/Pages/ManageSupervisoryCommittee";

import ChangePassword from "../Components/Pages/ChangePassword";

import AddManageSupervisoryCommittee from "../Components/Pages/AddManageSupervisoryCommittee";
import AddProgressReport from "../Components/Pages/AddProgressReport";

import AddStudent from "../Components/Pages/AddStudent";

import Home from "../Components/Pages/Home";
import ManageProgressReport from "../Components/Pages/ManageProgressReport";

import ManageStudent from "../Components/Pages/ManageStudent";

import ProgramWiseReports from "../Components/Pages/ProgramWiseReports";
import SendNotification from "../Components/Pages/SendNotification";
import SendNotificationAll from "../Components/Pages/SendNotificationAll";
import SendNotificationMS from "../Components/Pages/SendNotificationMS";
import SendSynopsisReport from "../Components/Pages/SendSynopsisReport";
import SendThesisReport from "../Components/Pages/SendThesisReport";

import EvaluateSynopsisMS from "../Components/Pages/EvaluateSynopsisMS";
import EvaluateSynopsisPhD from "../Components/Pages/EvaluateSynopsisPhD";

import SessionWiseReports from "../Components/Pages/SessionWiseReports";
import SupervisorReports from "../Components/Pages/SuperivorReports";
import SupervisorWiseReports from "../Components/Pages/SupervisorWiseReports";

import SynopsisWiseReports from "../Components/Pages/SynopsisWiseReports";
import ThesisWiseReports from "../Components/Pages/ThesisWiseReports";

import ViewMSStudentDetail from "../Components/Pages/ViewMSStudentDetail";
import ViewPhDStudentDetail from "../Components/Pages/ViewPhDStudentDetail";
import ViewSynopsisReport from "../Components/Pages/ViewSynopsisReport";
import ViewThesisReport from "../Components/Pages/ViewThesisReport";
import ManageNotification from "../Components/Pages/managenotification";
import PendingThesis from "../Components/Pages/PendingThesis";
import ManageSynopsisSchedule from "../Components/Pages/ManageSynopsisSchedule";
import GenerateSynopsisReport from "../Components/Pages/GenerateSynopsisReport";
import GenerateThesisReport from "../Components/Pages/GenerateThesisReport";
import ManageThesisSchedule from "../Components/Pages/ManageThesisSchedule";
import { Avatar } from "@material-ui/core";

/* import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders"; */

/* function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
} */

const drawerWidth = 350;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [activeTab, setActiveTab] = React.useState("HOME");

  const checkActiveTab = (tab) => {
    if (tab === "HOME") {
      return <h1 style={{ textAlign: "center" }}>Welcome! GO</h1>;
    }

    if (tab === "PENDING THESIS") {
      return <PendingThesis />;
    }

    if (tab === "MANAGE SYNOPSIS SCHEDULE") {
      return <ManageSynopsisSchedule />;
    }
    if (tab === "GENERATE SYNOPSIS REPORT") {
      return <GenerateSynopsisReport />;
    }
    if (tab === "VIEW SYNOPSIS REPORT") {
      return <ViewSynopsisReport />;
    }
    if (tab === "SEND SYNOPSIS REPORT") {
      return <SendSynopsisReport />;
    }

    if (tab === "MANAGE THESIS SCHEDULE") {
      return <ManageThesisSchedule />;
    }
    if (tab === "GENERATE THESIS REPORT") {
      return <GenerateThesisReport />;
    }
    if (tab === "VIEW THESIS REPORT") {
      return <ViewThesisReport />;
    }
    if (tab === "SEND THESIS REPORT") {
      return <SendThesisReport />;
    }

    if (tab === "MANAGE STUDENTS") {
      return <ManageStudent />;
    }
    if (tab === "ADD STUDENTS") {
      return <AddStudent />;
    }
    if (tab === "MANAGE PROGRESS REPORT") {
      return <ManageProgressReport />;
    }
    if (tab === "ADD PROGRESS REPORT") {
      return <AddProgressReport />;
    }
    if (tab === "MANAGE SUPERVISORY COMMITTEE") {
      return <ManageSupervisoryCommittee />;
    }
    if (tab === "ADD SUPERVISORY COMMITTEE") {
      return <AddManageSupervisoryCommittee />;
    }
    if (tab === "EVALUATE SYNOPSIS (MS)") {
      return <EvaluateSynopsisMS />;
    }
    if (tab === "EVALUATE SYNOPSIS (PhD)") {
      return <EvaluateSynopsisPhD />;
    }
    if (tab === "MANAGE NOTIFICATION ") {
      return <ManageNotification />;
    }
    if (tab === "SEND NOTIFICATION (MS)") {
      return <SendNotificationMS />;
    }
    if (tab === "SEND NOTIFICATION (PhD)") {
      return <SendNotification />;
    }
    if (tab === "SEND NOTIFICATION TO ALL") {
      return <SendNotificationAll />;
    }
    if (tab === "VIEW MS STUDENT DETAILS") {
      return <ViewMSStudentDetail />;
    }
    if (tab === "VIEW PhD STUDENT DETAILS") {
      return <ViewPhDStudentDetail />;
    }
    if (tab === "SUPERVISOR'S REPORT") {
      return <SupervisorReports />;
    }
    if (tab === "PROGRAM-WISE REPORT") {
      return <ProgramWiseReports />;
    }
    if (tab === "SYNOPSIS-WISE REPORT") {
      return <SynopsisWiseReports />;
    }
    if (tab === "THESIS-WISE REPORT") {
      return <ThesisWiseReports />;
    }
    if (tab === "VIEW SUPERVISOR/PROGRAM-WISE REPORT") {
      return <SupervisorWiseReports />;
    }
    if (tab === "SESSION-WISE REPORT") {
      return <SessionWiseReports />;
    }
    if (tab === "CHANGE PASSWORD") {
      return <ChangePassword />;
    }
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        {/* <CssBaseline /> */}

        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <img
                style={{ width: "250px", marginTop: "10px" }}
                alt="Remy Sharp"
                src="../assets/images/cui.png"
              />
              {/* {activeTab} */}
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <Avatar alt="Remy Sharp" src="" />
                {/* <NotificationsIcon /> */}
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer sx={{ maxHeight: "640px" }} variant="permanent" open={open}>
          {/* <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        > */}
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List wrap>
            <GoSideBarList onActiveTab={setActiveTab} />
          </List>
          {/* <Divider />
          <List>{secondaryListItems}</List> */}
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: "max-content",
              }}
            >
              {checkActiveTab(activeTab)}
              {/* <Outlet /> */}
            </Paper>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function GoDashboard() {
  return <DashboardContent />;
}
