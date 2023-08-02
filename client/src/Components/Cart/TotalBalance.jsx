import { Box, Typography, styled } from "@mui/material";
import React from "react";
import "./Cart.css";

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0:

`;
const Heading = styled(Typography)`
  color: #878787;
`;

const Container = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
  & > h6 {
    margin-bottom: 20px;
  }
`;
const PriceDetails = styled(Typography)`
  display: flex;
  justify-content: space-between;
`;

const TotalBalance = ({ cartItems }) => {
  let price = 0;
  let discount = 0;
  let Delivery_charges = 40;
  let Total_Amount = 0;
  cartItems.map(
    (item) => (
      (price += item.price.mrp),
      (discount += item.price.mrp - item.price.cost),
      (Total_Amount += item.price.cost)
    )
  );
  return (
    <Box className="totalValue">
      <Header>
        <Heading style={{ borderBottom: "1px solid #000" }}>
          Price Details
        </Heading>
      </Header>
      <Container>
        <PriceDetails>
          Price ({cartItems?.length} item)
          <Box component="span"> ₹{price} </Box>
        </PriceDetails>
        <PriceDetails>
          Discount
          <Box component="span" style={{ color: "green" }}>
            {" "}
            -₹{discount}{" "}
          </Box>
        </PriceDetails>
        <PriceDetails>
          Delivery charges
          <Box component="span"> ₹{Delivery_charges} </Box>
        </PriceDetails>
        <PriceDetails
          // variant="h6"
          className="TotalAmountContainer"
          style={{
            borderTop: "1px solid #000",
            borderBottom: "1px solid #000",
            padding: "10px 0",
            fontSize: 18,
          }}
        >
          Total Amount
          <Box component="span"> ₹{Total_Amount + Delivery_charges} </Box>
        </PriceDetails>
        <Typography style={{ color: "green", fontWeight: 550 }}>
          You will save ₹{discount - Delivery_charges} on this order.
        </Typography>
      </Container>
    </Box>
  );
};

export default TotalBalance;
