import { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  Backdrop,
  Fade,
  CircularProgress,
  Alert,
} from "@mui/material";

interface ResetModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (lrn: string) => void;
  resetLoading: boolean;
}

export default function ResetModal({ open, onClose, onSubmit, resetLoading }: ResetModalProps) {
    const [lrn, setLrn] = useState("");
    const [notification, setNotification] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLrn(event.target.value);
    };
  
    const handleSubmit = async () => {
      setError(null); 
      try {
        await onSubmit(lrn);
        setNotification("Check your email for reset instructions");
        setLrn(""); 
      } catch (err) {
        setError("Failed to send reset link. Please try again.");
        console.error("Error in handleSubmit:", err);
      }
    };
  
    useEffect(() => {
      if (notification || error) {
        const timer = setTimeout(() => {
          setNotification(null);
          setError(null);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }, [notification, error]);
  
    const modalStyle = {
      position: "absolute" as const,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 600,
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 4,
      borderRadius: 2,
    };
  
    return (
      <Modal
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <Typography variant="h6" component="h2">
              Reset Password
            </Typography>
            {notification && (
              <Alert severity="success" sx={{ mb: 2 }}>
                {notification}
              </Alert>
            )}
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            <TextField
              fullWidth
              margin="normal"
              label="LRN"
              type="text"
              value={lrn}
              onChange={handleEmailChange}
            />
            <Box
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
              }}
            >
              <Button onClick={onClose} variant="outlined">
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                disabled={resetLoading}
                startIcon={resetLoading ? <CircularProgress size={20} /> : null}
              >
                {resetLoading ? "Sending..." : "Send Reset Link"}
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    );
  }
  