import React, { useContext, useState } from "react";
import { Badge, Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//componenets
import LoginDialog from "../Login/LoginDialog";
import DataContext from "../../context/DataContext";
import Profile from "./Profile";

import "./Header.css";

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;

  // font-size: 14px;
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);

  const { userAccount, setAccount } = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  };

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Box className="Wrapper">
      {userAccount ? (
        <Profile userAccount={userAccount} setAcoount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}

      <Typography style={{ margintop: 3, width: 135, display: "flex" }}>
        Become a Seller
      </Typography>
      <Typography style={{ margintop: 3, display: "flex" }}>More</Typography>
      <Link className="CartContainer" to="/cart">
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} />
    </Box>
  );
};

export default CustomButtons;
