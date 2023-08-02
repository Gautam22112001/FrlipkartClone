import styled from "@emotion/styled";
import { ButtonGroup, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  reduceQuantity,
  increaseQuantity,
} from "../../redux/actions/cartActions";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  border-color: black;
  border-radius: 50%;
  color: black;
`;

const GroupedButton = ({ item }) => {
  const dispatch = useDispatch();
  // const cartItems = useSelector((state) => state.cartItems);
  // let quantity = 1;

  const reduceCartItem = (id) => {
    dispatch(reduceQuantity(id));
  };

  const increaseCartItem = (id) => {
    dispatch(increaseQuantity(id));
  };

  // useEffect()

  return (
    <Component className="GroupedButton">
      <StyledButton onClick={() => reduceCartItem(item.id)}>-</StyledButton>
      <Button disabled>{item.quantity}</Button>
      <StyledButton onClick={() => increaseCartItem(item.id)}>+</StyledButton>
    </Component>
  );
};

export default GroupedButton;
