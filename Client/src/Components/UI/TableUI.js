import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable(props) {
  return (
    <div style={{ height: 400, width: "100%", backgroundColor: "white" }}>
      <DataGrid
        rows={props.data}
        columns={props.header}
        pageSize={5}
        rowsPerPageOptions={[5]}
        /* checkboxSelection */
      />
    </div>
  );
}
