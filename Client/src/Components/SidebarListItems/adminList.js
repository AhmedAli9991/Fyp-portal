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
import ListIcon from "@mui/icons-material/List";

export const adminListitems = [
  {
    text: "Home",
    icon: <HomeIcon />,
    path: "/Dashboard/HomeAdmin",
  },

  {
    text: "Program",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "Manage Programs",
        icon: <PollIcon />,
        path: "/Dashboard/ManagePrograms",
      },

      {
        text: "Add Programs",
        icon: <AddBoxIcon />,
        path: "/Dashboard/AddPrograms",
      },
    ],
  },

  {
    text: "Session",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "Manage Session",
        icon: <ManageAccountsIcon />,
        path: "/Dashboard/ManageSessions",
      },

      {
        text: "Add Sessions",
        icon: <AddCircleIcon />,
        path: "/Dashboard/AddSessions",
      },
    ],
  },

  {
    text: "Faculty",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "View Faculty",
        icon: <PreviewIcon />,
        path: "/Dashboard/ViewFaculty",
      },
      {
        text: "Add Faculty",
        icon: <PreviewIcon />,
        path: "/Dashboard/AddFaculty",
      },
    ],
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
    text: "Evaluate Synopsis",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "Synopsis (MS)",
        icon: <AnalyticsIcon />,
        path: "/Dashboard/EvaluateSynopsis(MS)",
      },

      {
        text: "Synopsis (PhD)",
        icon: <MapIcon />,
        path: "/Dashboard/EvaluateSynopsis(PhD)",
      },
    ],
  },

  {
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
        text: "Send Notification (PhD)",
        icon: <CampaignIcon />,
        path: "/Dashboard/SendNotification(PhD)",
      },

      {
        text: "Send Notification (MS)",
        icon: <NotificationsActiveIcon />,
        path: "/Dashboard/SendNotification(MS)",
      },

      {
        text: "Send Notification to All",
        icon: <ContactMailIcon />,
        path: "/Dashboard/SendNotificationtoAll",
      },
    ],
  },

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
      /*  {
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

  {
    text: "Change Password",
    icon: <ChangeCircleIcon />,
    path: "/Dashboard/ChangePassword",
  },
];
