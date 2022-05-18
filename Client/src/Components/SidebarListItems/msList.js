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
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import LayersIcon from "@mui/icons-material/Layers";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";

export const msListitems = [
  {
    text: "Home",
    icon: <HomeIcon />,
    path: "/Dashboard/HomeMsCor",
  },

  {
    text: "Student",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "Manage Students",
        icon: <LayersIcon />,
        path: "/Dashboard/ManageStudents",
      },

      {
        text: "Add Student",
        icon: <PersonAddIcon />,
        path: "/Dashboard/AddStudent",
      },
      /*{
        text: "View Detail",
        icon: <PageviewIcon />,
        path: "/Dashboard/ViewMSStudentDetails",
      },*/
    ],
  },
  {
    text: "Progress Report",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "Manage Report",
        icon: <DonutSmallIcon />,
        path: "/Dashboard/ManageProgressReport",
      },

      {
        text: "Add Report",
        icon: <AutoStoriesIcon />,
        path: "/Dashboard/AddProgressReport",
      },
    ],
  },

  {
    text: "Supervisory Committee",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "Manage Committee",
        icon: <DashboardIcon />,
        path: "/Dashboard/ManageSupervisoryCommittee",
      },

      {
        text: "Add Committee",
        icon: <AddModeratorIcon />,
        path: "/Dashboard/AddSupervisoryCommittee",
      },
    ],
  },
  {
    text: "Manage Submission Deadline",
    icon: <AddModeratorIcon />,
    path: "/Dashboard/ManageMsDeadline",
  },

  {
    text: "Synopsis",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "Manage Schedule",
        icon: <LayersIcon />,
        path: "/Dashboard/ManageSynopsisSchedule",
      },
      {
        text: "Create a Schedule",
        icon: <LayersIcon />,
        path: "/Dashboard/CreateSynopsisSchedule",
      },
      {
        text: "Evaluate Synopsis MS",
        icon: <AnalyticsIcon />,
        path: "/Dashboard/EvaluateSynopsis(MS)",
      },
      /* {
        text: "Generate Report",
        icon: <PersonAddIcon />,
        path: "/Dashboard/GenerateSynopsisReport",
      }, */
      {
        text: "View Report",
        icon: <LayersIcon />,
        path: "/Dashboard/ViewSynopsisReport",
      },

      {
        text: "Send Report",
        icon: <PersonAddIcon />,
        path: "/Dashboard/SendSynopsisReport",
      },
    ],
  },

  {
    text: "Thesis",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "Manage Schedule",
        icon: <LayersIcon />,
        path: "/Dashboard/ManageThesisSchedule",
      },
      {
        text: "Create a Schedule",
        icon: <LayersIcon />,
        path: "/Dashboard/create-schedule-ms",
      },
      {
        text: "Evaluate Thesis MS",
        icon: <AnalyticsIcon />,
        path: "/Dashboard/EvaluateThesis(MS)",
      },
      {
        text: "Pending Thesis",
        icon: <EditNotificationsIcon />,
        path: "/Dashboard/PendingThesis",
      },
      /* {
        text: "Generate Report",
        icon: <PersonAddIcon />,
        path: "/Dashboard/GenerateThesisReport",
      }, */
      {
        text: "View Report",
        icon: <LayersIcon />,
        path: "/Dashboard/ViewThesisReport",
      },

      {
        text: "Send Report",
        icon: <PersonAddIcon />,
        path: "/Dashboard/SendThesisReport",
      },
    ],
  },
  {
    text: "Update Thesis Status",
    icon: <PersonAddIcon />,
    path: "/Dashboard/UpdateThesisStatus",
  },

  /* {
    text: "Evaluate Thesis",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "Thesis PhD",
        icon: <MapIcon />,
        path: "/Dashboard/EvaluateThesis(PhD)",
      },
    ],
  }, */

  /* {
    text: "Notification",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "Manage Notification",
        icon: <EditNotificationsIcon />,
        path: "/Dashboard/ManageNotification",
      },

      {
        text: "Send Notification (MS)",
        icon: <NotificationsActiveIcon />,
        path: "/Dashboard/SendNotification(MS)",
      },
    ],
  }, */

  {
    text: "Student Details",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "MS Students",
        icon: <PageviewIcon />,
        path: "/Dashboard/ViewMSStudentDetails",
      },

      {
        text: "PhD Students",
        icon: <ContentPasteSearchIcon />,
        path: "/Dashboard/ViewPhDStudentDetails",
      },
    ],
  },

  {
    text: "Reports",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      /* {
        text: "Supervisor's Report",
        icon: <PeopleIcon />,
        path: "/Dashboard/Supervisor'sReport",
      },
      {
        text: "Program-Wise Report",
        icon: <LeaderboardIcon />,
        path: "/Dashboard/Program-WiseReport",
      },

      {
        text: "Thesis-Wise Report",
        icon: <TableChartIcon />,
        path: "/Dashboard/Thesis-WiseReport",
      }, */

      {
        text: "Summary Report",
        icon: <PieChartIcon />,
        path: "/Dashboard/summary-report",
      },

      /* {
        text: "Supervisor/Program-Wise Report",
        icon: <FindInPageIcon />,
        path: "/Dashboard/ViewSupervisorProgram-WiseReport",
      },

      {
        text: "Session-Wise Report",
        icon: <ScreenSearchDesktopIcon />,
        path: "/Dashboard/Session-WiseReport",
      }, */
    ],
  },
  /* {
    text: "View Notification",
    icon: <ManageAccountsIcon />,
    path: "/Dashboard/ViewNotification",
  },
  {
    text: "View Announcement",
    icon: <ManageAccountsIcon />,
    path: "/Dashboard/ViewAnnouncement",
  }, */
  {
    text: "Change Password",
    icon: <ChangeCircleIcon />,
    path: "/Dashboard/ChangePassword",
  },
];
