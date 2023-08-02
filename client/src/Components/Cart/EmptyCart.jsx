import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Component = styled(Box)`
  height: 65vh;
  width: 80%;
  background: #fff;
  margin: 80px 140px;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const Container = styled(Box)`
  //   text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptyCart = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  return (
    <Component>
      <Container>
        <img
          src={imgurl}
          alt="empty cart"
          style={{ width: "35%", margin: "5% 0 2% 0" }}
        />
        {/* <Typography> Missing Cart Items </Typography> */}
        <Typography style={{ marginBottom: 10 }}>
          {" "}
          Your Cart is Empty{" "}
        </Typography>
        <Link to={"/"} style={{ textDecoration: "none", fontWeight: 600 }}>
          <Typography style={{ fontSize: "18px", fontWeight: 600 }}>
            {" "}
            Add items now{" "}
          </Typography>
        </Link>
      </Container>
    </Component>
  );
};

export default EmptyCart;
