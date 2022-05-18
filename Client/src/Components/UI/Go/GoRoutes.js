import ManagePrograms from "../../Pages/managePrograms";
import AddManageProgram from "../../Pages/AddManageProgram";
import AddManageSupervisoryCommittee from "../../Pages/AddManageSupervisoryCommittee";
import AddProgressReport from "../../Pages/AddProgressReport";
import AddSession from "../../Pages/AddSession";
import AddStudent from "../../Pages/AddStudent";
import ChangePassword from "../../Pages/ChangePassword";
import Home from "../../Pages/Home";
import ManageProgressReport from "../../Pages/ManageProgressReport";
import ManageSession from "../../Pages/ManageSession";
import ManageStudent from "../../Pages/ManageStudent";
import ManageSupervisoryCommittee from "../../Pages/ManageSupervisoryCommittee";
import ProgramWiseReports from "../../Pages/ProgramWiseReports";
import SendNotification from "../../Pages/SendNotification";
import SendNotificationAll from "../../Pages/SendNotificationAll";
import SendNotificationMS from "../../Pages/SendNotificationMS";
import EvaluateSynopsisMS from "../../Pages/EvaluateSynopsisMS";
import EvaluateSynopsisPhD from "../../Pages/EvaluateSynopsisPhD";
import SessionWiseReports from "../../Pages/SessionWiseReports";
import SupervisorReports from "../../Pages/SuperivorReports";
import SupervisorWiseReports from "../../Pages/SupervisorWiseReports";
import ManageNotification from "../../Pages/managenotification";
import SynopsisWiseReports from "../../Pages/SynopsisWiseReports";
import ThesisWiseReports from "../../Pages/ThesisWiseReports";
import ViewFaculty from "../../Pages/ViewFaculty";
import ViewMSStudentDetail from "../../Pages/ViewMSStudentDetail";
import ViewPhDStudentDetail from "../../Pages/ViewPhDStudentDetail";
import GoDashboard from "../../../Dashboards/GoDashboard";

import React from "react";
import { Route, Routes } from "react-router-dom";

const GoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GoDashboard />}>
        <Route path="Home" element={<Home />} />
        <Route path="Manage Programs" element={<ManagePrograms />} />
        <Route path="Add Programs" element={<AddManageProgram />} />
        <Route path="Manage Sessions" element={<ManageSession />} />
        <Route path="Add Sessions" element={<AddSession />} />
        <Route path="View Faculty" element={<ViewFaculty />} />
        <Route path="Manage students" element={<ManageStudent />} />
        <Route path="Add Student" element={<AddStudent />} />
        <Route
          path="Manage Progress Report"
          element={<ManageProgressReport />}
        />
        <Route path="Add Progress Report" element={<AddProgressReport />} />
        <Route
          path="Manage Supervisory Committee"
          element={<ManageSupervisoryCommittee />}
        />
        <Route
          path="Add Supervisory Committee"
          element={<AddManageSupervisoryCommittee />}
        />
        <Route path="Evaluate Synopsis (MS)" element={<EvaluateSynopsisMS />} />
        <Route
          path="Evaluate Synopsis (PhD)"
          element={<EvaluateSynopsisPhD />}
        />
        <Route path="Manage Notification" element={<ManageNotification />} />
        <Route path="Send Notification (PhD)" element={<SendNotification />} />
        <Route path="Send Notification (MS)" element={<SendNotificationMS />} />
        <Route
          path="Send Notification to All"
          element={<SendNotificationAll />}
        />
        <Route
          path="View MS Student Details"
          element={<ViewMSStudentDetail />}
        />
        <Route
          path="View PhD Student Details"
          element={<ViewPhDStudentDetail />}
        />
        <Route path="Supervisor's Report" element={<SupervisorReports />} />
        <Route path="Program-Wise Report" element={<ProgramWiseReports />} />
        <Route path="Synopsis-Wise Report" element={<SynopsisWiseReports />} />
        <Route path="Session-Wise Report" element={<SessionWiseReports />} />
        <Route path="Thesis-Wise Report" element={<ThesisWiseReports />} />
        <Route
          path="View Supervisor/Program-Wise Report"
          element={<SupervisorWiseReports />}
        />
        <Route path="Change Password" element={<ChangePassword />} />
      </Route>
    </Routes>
  );
};

export default GoRoutes;
