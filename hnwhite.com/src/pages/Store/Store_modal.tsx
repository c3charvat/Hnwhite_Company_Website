import * as React from "react";
import { Typography, Box, Divider, Button, Modal } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 2,
  borderRadius: "10px",
  p: 4,
};

interface ModalProps {
    Title?: string|undefined;
    Data?: string|undefined;
}

export default function BasicModal(props: ModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          marginBottom: "7px",
          marginLeft: "-22px",
          height: "32px",
          scale: ".75",
        }}
        variant="contained"
      >
        Specifications
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Specifications: {props.Title}
          </Typography>
          <Divider />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.Data}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
