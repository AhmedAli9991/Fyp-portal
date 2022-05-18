import { Button } from "@mui/material";
import React from "react";

import { programWiseData } from "../DummyData/DummyData";
import DataTable from "../UI/TableUI";

export default function SendSynopsisReport() {
  const programWiseHeader = [
    {
      field: "id",
      headerName: "ID",
      width: 80,
    },
    {
      field: "Session",
      headerName: "Name",
      width: 200,
    },
    { field: "Description", headerName: "Registration No.", width: 200 },
    { field: "Status", headerName: "Email", width: 350 },
    { field: "Professor", headerName: "Professor", width: 300 },
    {
      field: "actions",
      headerName: "Action",
      width: 200,
      renderCell: (props) => (
        <>
          <Button
            /* onClick={() => {
              setselectedobj(props.row);
              handleOpen();
            }} */
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 10 }}
          >
            Send Report
          </Button>
        </>
      ),
    },
  ];
  return (
    <>
      <DataTable header={programWiseHeader} data={programWiseData} />
    </>
  );
}
