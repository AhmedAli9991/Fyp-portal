import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  borderRadius: "6px",
  boxShadow: 24,
  p: 3,
};

export default function BackdropModal({
  showModal,
  setShowModal,
  title,
  children,
}) {
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            color={"#9C27B0"}
          >
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            {children}
          </Typography>
          <Button
            style={{
              alignSelf: "flex-end",
              marginTop: ".5rem",
            }}
            variant="contained"
            color="secondary"
            onClick={() => setShowModal(false)}
          >
            OK
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
