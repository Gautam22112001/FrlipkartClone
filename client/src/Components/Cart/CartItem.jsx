import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

//Components
import "./Cart.css";
import { addEllipsis } from "../../utils/commonUtils";
import GroupedButton from "./GroupedButton";
import { removeFromCart } from "../../redux/actions/cartActions";

const CartItem = ({ item }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Box className="Component">
      <Box className="LeftComponent">
        <Box className="imageContainer">
          <img
            src={item.url}
            alt="product"
            style={{ height: 100, width: 100 }}
          />
        </Box>
        <GroupedButton item={item} />
      </Box>
      <Box style={{ margin: 20 }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <Typography className="SmallText">
          Seller: RetailNet{" "}
          <Box component="span">
            <img
              src={fassured}
              alt="flipkartAssured"
              style={{ width: 50, marginLeft: 10 }}
            />
          </Box>
        </Typography>
        <Typography style={{ margin: "20px 0" }}>
          <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>
            ₹{item.price.cost}
          </Box>
          &nbsp; &nbsp; &nbsp;
          <Box component="span" style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
          &nbsp; &nbsp; &nbsp;
          <Box component="span" style={{ color: "#388E3C" }}>
            {item.price.discount}
          </Box>
        </Typography>
        <Box className="RemoveWrapper">
          <Button
            className="Remove"
            onClick={() => removeItemFromCart(item.id)}
          >
            Remove
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
