import { Button } from "@mui/material";
import React from "react";
import {
  viewAnnouncementeData,
  viewAnnouncementHeader,
} from "../DummyData/DummyData";
import DataTable from "../UI/TableUI";

export default function ViewAnnouncement() {
  const viewAnnouncementHeader = [
    {
      field: "id",
      headerName: "ID",
      width: 80,
    },
    {
      field: "Session",
      headerName: "Announcement",
      width: 400,
    },
    { field: "Description", headerName: "Date", width: 400 },
    {
      renderCell: (props) => (
        <Button
          /* onClick={() => {
            axios
              .delete(`${process.env.REACT_APP_URL}/admin/faculty/` + props.row.id, {
                headers: {
                  Authorization: `Bearer ${gettoken}`,
                },
              })
              .then((response) => {
                console.log(response.data.msg);

                getData();
                alert("Faculty deleted");
              })
              .catch((err) => console.log(err));
          }} */
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 0 }}
        >
          Delete
        </Button>
      ),
    },
  ];
  return (
    <>
      <DataTable header={viewAnnouncementHeader} data={viewAnnouncementeData} />
    </>
  );
}
