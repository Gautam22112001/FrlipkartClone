import { Box, Button, styled } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import "./Details.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../redux/actions/cartActions";

//Components
import { paywWithPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const Image = styled("img")({
  padding: "15px",
  width: "80%",
});

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const { cartItems } = useSelector((state) => state.cart);
  const { id } = product;
  const itemExists = cartItems.find((product) => product.id === id);
  // console.log(itemExists);

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };
  const buyNow = async () => {
    let response = await paywWithPaytm({ amount: 500, email: "gg@gmail.com" });

    let infrormation = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };

    post(infrormation);
  };

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
        onClick={() => addItemToCart()}
        style={{ marginRight: 10, background: "#ff9f00" }}
      >
        <ShoppingCartIcon />
        {itemExists ? "View in Cart" : "add to cart"}
      </Button>
      <Button
        className="StyledButton"
        variant="contained"
        style={{ background: "#fb541b" }}
        onClick={() => buyNow()}
      >
        <FlashOnIcon />
        Buy Now
      </Button>
    </Box>
  );
};

export default ActionItem;
