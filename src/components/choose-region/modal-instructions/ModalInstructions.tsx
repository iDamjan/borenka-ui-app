import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "white",
  border: "none",
  padding: "20px",
  borderRadius: "10px",
  fontFamily: "Pangolin",
};

export const ModalInstructions = () => {
  const handleClose = () => setIsModalOpen(false);

  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <h1>Посади дрво и стани дел од Боренка</h1>
            <p>
              Изберете регион со опожарена историја, и посадете дрво, бидете
              добри и помогнете на природата. Откако ке изберете регион....
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
