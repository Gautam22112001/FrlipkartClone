import { Box, Button, styled } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import "./Details.css";

const Image = styled("img")({
  padding: "15px",
  width: "80%",
});

const ActionItem = ({ product }) => {
  return (
    <Box className="LeftContainer">
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={product.url} alt="imgs" />
      </Box>
      <Button
        className="StyledButton"
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
      >
        <ShoppingCartIcon />
        Add to Cart
      </Button>
      <Button
        className="StyledButton"
        variant="contained"
        style={{ background: "#fb541b" }}
      >
        <FlashOnIcon />
        Buy Now
      </Button>
    </Box>
  );
};

export default ActionItem;
