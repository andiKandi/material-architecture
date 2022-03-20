import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "./Architect.scss";
import EmailIcon from "@mui/icons-material/Email";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

export interface ArchitectProps {
  name: string;
  title: string;
  image: string;
  telephone: string;
  email: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Architect: React.FC<ArchitectProps> = ({
  name,
  telephone,
  email,
  title,
  image,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div onClick={handleOpen} className="architect">
        <img className="architect__picture" src={image} alt={name} />
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className="modal__box" sx={style}>
            <img className="architect__picture" src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>{title}</p>
              <address>
                <ul className="modal__contact-info">
                  <li className="modal__list-item">
                    <EmailIcon className="modal__icon" />
                    <a href={`mailto:${email}`}>{name}</a>
                  </li>
                  <li className="modal__list-item">
                    <AddIcCallIcon className="modal__icon" />
                    <a href={`tel:${telephone}`}>{telephone}</a>
                  </li>
                </ul>
              </address>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
