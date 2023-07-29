import React from "react";
import {
  Box,
  Typography,
  styled,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const SmallText = styled(Box)`
  vertical-align: baseline;
  font-size: 14px;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge = styled(LocalOfferIcon)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;

const ColoumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
  }
`;
const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const currentDate = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <Box className="details">
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 ratings & 1 review
        <Box component="span">
          <img
            src={fassured}
            alt="flipkart assured"
            style={{ width: 77, marginLeft: 20 }}
          />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp; &nbsp; &nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp; &nbsp; &nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          {product.price.discount}
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge />
          Get extra 20% off (price inclusive of cashback/coupon)T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Flat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced
          between ₹15,000 to ₹39,999T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Flat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced
          between ₹40,000 to ₹49,999T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Flat ₹4,000 Off on HDFC Bank Credit Card EMI Trxns on orders of
          ₹50,000 and aboveT&C
        </Typography>
        <Typography>
          <StyledBadge />
          Flat ₹4,000 Off on HDFC Bank Credit Card EMI Trxns on orders of
          ₹50,000 and aboveT&C
        </Typography>
        <Typography>
          <StyledBadge />
          Flat ₹4,000 Off on HDFC Bank Credit Card EMI Trxns on orders of
          ₹50,000 and aboveT&C
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <ColoumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery By {currentDate.toDateString()} | ₹40{" "}
            </TableCell>
          </ColoumnText>
          <ColoumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColoumnText>
          <ColoumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: "#2874f0" }}>
                SuperComet
              </Box>
              <Typography>GST Invoice available</Typography>
              <Typography>
                view more sellers starting from ₹{product.price.cost}
              </Typography>
              <Typography></Typography>
            </TableCell>
          </ColoumnText>
          <ColoumnText>
            <TableCell colSpan={2}>
              <img src={adURL} alt="addd" style={{ width: 390 }} />
            </TableCell>
          </ColoumnText>
          <ColoumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{product.title.longTitle}</TableCell>
          </ColoumnText>
        </TableBody>
      </Table>
    </Box>
  );
};

export default ProductDetail;
