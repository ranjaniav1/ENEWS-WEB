"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { loginWithEmail, signUpWithEmail } from "../utils/auth";
import { useThemeContext } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

const LoginDialog = ({ open, onClose }) => {
  const { config, themeData } = useThemeContext();
  const { setUser } = useAuth();

  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone_no: "",
    avatar: "",
  });
  const [emailLoading, setEmailLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
    setError("");
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData((prev) => ({ ...prev, [id]: value }));
  };

  const handleAuthAction = async () => {
    setEmailLoading(true);
    setError("");

    const { email, password, name } = userData;
    if (!email || !password || (!isLogin && !name)) {
      setError("Please fill in all required fields.");
      setEmailLoading(false);
      return;
    }

    try {
      const user = isLogin
        ? await loginWithEmail(userData)
        : await signUpWithEmail(userData);
      setUser(user);
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setEmailLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: themeData?.background?.card,
          color: themeData?.text?.primary,
          borderRadius: config?.borderRadius || 8,
          fontFamily: config?.fontFamily,
          fontSize: config?.fontSizeBase,
        },
      }}
    >
      <DialogTitle
        sx={{
          color: themeData?.text?.heading,
          borderBottom: `1px solid ${themeData?.text?.border}`,
          fontWeight: 600,
        }}
      >
        {isLogin ? "Login" : "Sign Up"}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: themeData?.icon?.default,
            "&:hover": { color: themeData?.icon?.main },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {!isLogin && (
          <>
            <TextField
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              variant="outlined"
              value={userData.name}
              onChange={handleInputChange}
              InputProps={{
                sx: {
                  borderRadius: config?.borderRadius,
                  color: themeData?.text?.primary,
                },
              }}
            />
            <TextField
              margin="dense"
              id="phone_no"
              label="Phone Number"
              fullWidth
              variant="outlined"
              value={userData.phone_no}
              onChange={handleInputChange}
              InputProps={{
                sx: {
                  borderRadius: config?.borderRadius,
                  color: themeData?.text?.primary,
                },
              }}
            />

            {/* Avatar Upload */}
            <Box sx={{ mt: 2, mb: 2 }}>
              <label
                htmlFor="avatar-upload"
                style={{
                  display: "block",
                  marginBottom: 6,
                  fontWeight: 500,
                  color: themeData?.text?.secondary,
                }}
              >
                Avatar
              </label>
              <Box
                sx={{
                  border: `1px solid ${themeData?.text?.border}`,
                  borderRadius: config?.borderRadius,
                  padding: "10px 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: themeData?.text?.secondary }}>
                  {userData.avatar ? userData.avatar.name : "No file chosen"}
                </span>
                <label htmlFor="avatar-upload">
                  <Button variant="outlined" size="small" component="span">
                    Choose File
                  </Button>
                </label>
              </Box>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) =>
                  setUserData({ ...userData, avatar: e.target.files[0] })
                }
              />
            </Box>
          </>
        )}

        <TextField
          margin="dense"
          id="email"
          label="Email Address"
          fullWidth
          variant="outlined"
          value={userData.email}
          onChange={handleInputChange}
          InputProps={{
            sx: {
              borderRadius: config?.borderRadius,
              color: themeData?.text?.primary,
            },
          }}
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          value={userData.password}
          onChange={handleInputChange}
          InputProps={{
            sx: {
              borderRadius: config?.borderRadius,
              color: themeData?.text?.primary,
            },
          }}
        />

        {error && (
          <Box sx={{ color: "red", fontSize: "0.875rem", mt: 1 }}>{error}</Box>
        )}

        <Button
          onClick={handleAuthAction}
          disabled={emailLoading}
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: themeData?.background?.button,
            color: themeData?.text?.button,
            my: 2,
            py: 1.2,
            borderRadius: config?.borderRadius,
            fontWeight: 600,
            fontSize: "0.95rem",
            textTransform: "uppercase",
            "&:hover": {
              backgroundColor: themeData?.icon?.main,
            },
          }}
        >
          {emailLoading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
        </Button>

        <Button
          onClick={toggleLogin}
          fullWidth
          variant="text"
          sx={{
            color: themeData?.text?.secondary,
            fontWeight: 500,
            fontSize: "0.85rem",
            textTransform: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
