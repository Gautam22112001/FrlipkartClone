import React, { useContext, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";

//componenets
import LoginDialog from "../Login/LoginDialog";
import DataContext from "../../context/DataContext";
import Profile from "./Profile";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > * {
    margin-right: 40px !important;
    font-size: 16px;
    align-items: center;
  }
`;
const CartContainer = styled(Box)`
  display: flex;
`;
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
  return (
    <Wrapper>
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
      <CartContainer>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </CartContainer>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
