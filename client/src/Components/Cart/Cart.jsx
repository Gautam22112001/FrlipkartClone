import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

//Components
import "./Cart.css";
import CartItem from "./CartItem";
import TotalBalance from "./TotalBalance";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      {cartItems.length ? (
        <Grid container className="GridContainer">
          <Grid item lg={9} md={9} sm={12} xs={12} style={{ paddingRight: 15 }}>
            <Box className="Header">
              <Typography>My Cart ({cartItems.length}) </Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <Box className="ButtonWrapper">
              <Button className="StyledOrderButton">Place Order</Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalBalance cartItems={cartItems} />
          </Grid>
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
