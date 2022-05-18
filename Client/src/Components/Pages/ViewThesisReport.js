import { flexbox } from "@mui/system";
import React, { useEffect } from "react";

import synopsisService from "../../API/synopsis";
import ReportPDF from "./ReportPDF";

const ViewSynopsisReport = () => {
  return (
    <div className="App">
      <div>
        <ReportPDF />
      </div>
    </div>
  );
};

export default ViewSynopsisReport;
