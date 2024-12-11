import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { formValidation } from "../../services/form";
import {
  Modal,
  Box,
  Typography,
  Button,
  Backdrop,
  Fade,
} from "@mui/material";
import { useModal } from "../../helper/useHelper";

export default function NavbarModal({
  modalRef,
}: {
  modalRef: React.RefObject<HTMLDivElement>;
}) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { isShowModal, handleToggleModal, modalRef: modalContentRef } = useModal();

  const handleLogout = async () => {
    console.log("Logout initiated");
    try {
      await formValidation.logout();
      console.log("Logout successful");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const modalStyle = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  return (
    <div
      ref={modalRef}
      className="absolute right-0 mt-3 sm:mt-8 w-48 p-3 bg-gray-700 text-md text-white rounded-lg shadow-lg"
    >
      <p>{user?.email.split("@")[0]}</p>
      <button
        onClick={handleToggleModal}
        className="text-red-500 hover:text-red-400"
      >
        Logout
      </button>

      {/* Confirmation Modal */}
      <Modal
        open={isShowModal}
        onClose={handleToggleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isShowModal}>
          <Box sx={modalStyle} ref={modalContentRef}>
            <Typography variant="h6" component="h2">
              Are you sure you want to logout?
            </Typography>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
              }}
            >
              <Button onClick={handleToggleModal} variant="outlined">
                Cancel
              </Button>
              <Button
                onClick={() => {
                  console.log("Logout button clicked");
                  handleToggleModal();
                  handleLogout();
                }}
                variant="contained"
                color="error"
              >
                Logout
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
