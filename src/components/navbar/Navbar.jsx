import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import './navbar.css';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} sx={{ boxShadow: "none", bgcolor: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography variant="body1" component="div" sx={{ flexGrow: 1, mr: 2, color: "black", textAlign: 'end' }}>
            <p>Version 0.0.2</p>
          </Typography>

          {/* Email icon */}
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="black"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          {/* Notifications icon */}
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="black"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Profile icon */}
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="black"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
