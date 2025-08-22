import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

import menImg from "./images/men.jpg";
import logoImg from "./images/logo.jpeg";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#bea221ff" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ mr: 2 }}>
            <img
              src={logoImg}
              alt="RC Logo"
              style={{ height: 40, verticalAlign: "middle" }}
            />
          </Typography>

          {/* ✅ Use Link instead of plain Button */}
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/temples">Temples</Button>

          <Box
            sx={{
              display: "flex",
              width: "300px",
              alignItems: "center",
              ml: 2,
              bgcolor: "rgba(255,255,255,0.15)",
              borderRadius: 1,
              pl: 1,
            }}
          >
            <SearchIcon />
            <InputBase placeholder="Search…" sx={{ color: "inherit", ml: 1 }} />
          </Box>

          <Box sx={{ flexGrow: 1 }}></Box>

          <IconButton color="inherit">
            <Badge color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <Badge color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit" onClick={handleMenuOpen}>
            <Avatar alt="User" src={menImg} sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default Navbar;
