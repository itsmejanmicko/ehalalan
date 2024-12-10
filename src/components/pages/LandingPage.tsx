import { useEffect, useState } from "react";
import logo from "../../../public/image/logo.png";
import loginanimation from "../../../public/image/logoanimation.webm";
import { renderEllipses } from "../../helper/ellipsePosition";
import { Button } from "../common/Button";
import { FormField } from "../common/Form";
import { formValidation } from "../../services/form";
import { useNavigate } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import { FirebaseError } from "firebase/app";
import ResetModal from "../common/ResetModal";

const LandingPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    lrn: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [resetModalOpen, setResetModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state
    try {
      const response = await formValidation.login(
        formValues.lrn,
        formValues.password
      );
      if (response.user) {
        setLoading(false);
        navigate("/controlpanel");
      }
    } catch (error: unknown) {
      setLoading(false);
      // Extract Firebase error message
      const firebaseError = (error as FirebaseError).message || "Something went wrong!";
      setError(firebaseError);
      console.log(error);
    }
  };

  const handleResetSubmit =async (lrn: string) => {
    setResetLoading(true);
    try {
      await formValidation.sendEmailReset(lrn);
      setResetLoading(false)
      setResetModalOpen(false);
    } catch (error) {
      setResetLoading(false);
      console.error("Email reset failed:", error);
    }
  };

  const handleOpenResetModal = () => {
    setResetModalOpen(true);
  };

  const handleCloseResetModal = () => {
    setResetModalOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [error]);

  return (
    <main className="bg-[#23304c] h-screen relative">
      <nav className="fixed top-0 left-0 w-full flex justify-between p-4">
        <img src={logo} alt="Company logo" className="h-10 animate-bounce" />
      </nav>
      <section className="pt-14 flex flex-col lg:flex-row justify-between">
        {renderEllipses()}

        {/* Left Section - Video */}
        <div className="hidden sm:block flex-1 max-w-2xl relative p-4">
          <video
            src={loginanimation}
            autoPlay
            loop
            muted
            className="relative left-36 w-full h-auto"
          />
        </div>

        {/* Right Section - Login Form */}
        <div className="flex-1 flex justify-center items-center p-6 bg-[#23304c]/50 rounded-lg">
          <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
            <p className="text-center text-sm mb-4">
              New here?{" "}
              <button 
                onClick={handleOpenResetModal}
                className="text-blue-500"
              >
                Forgot your password?
              </button>
            </p>

            {/* Show Alert if there's an error */}
            {error && (
              <Alert severity="error" className="mb-4">
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <FormField
                name="lrn"
                value={formValues.lrn}
                onChange={handleChange}
                label="LRN"
                type="text"
                placeholder="1088*******"
              />
              <FormField
                name="password"
                value={formValues.password}
                onChange={handleChange}
                label="Password"
                type="password"
                placeholder="***********"
              />
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button
                  type="submit"
                  disabled={loading}
                  loading={loading}
                  label="Login"
                />
              </Stack>
            </form>
          </div>
        </div>
      </section>

      <ResetModal
        open={resetModalOpen}
        onClose={handleCloseResetModal}
        onSubmit={handleResetSubmit}
        resetLoading = {resetLoading}
      />
    </main>
  );
};

export default LandingPage;