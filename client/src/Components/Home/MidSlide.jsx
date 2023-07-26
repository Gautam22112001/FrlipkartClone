import { Box, styled } from "@mui/material";
import React from "react";
import Slide from "./Slide";

const Componenet = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)(({ theme }) => ({
  width: "83%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

// const RightComponent = styled(Box)`
//   background: #ffffff;
//   padding: 5px;
//   margin-top: 10px;
//   margin-left: 10px;
//   width: 17%;
//   text-align: center;
// `; had to convert this i9nto an object format to use theme
const RightComponent = styled(Box)(({ theme }) => ({
  marginTop: 10,
  background: "#FFFFFF",
  width: "17%",
  marginLeft: 10,
  padding: 5,
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MidSlide = ({ products, title, timer }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  return (
    <Componenet>
      <LeftComponent>
        <Slide products={products} title={title} timer={timer} />
      </LeftComponent>
      <RightComponent>
        <img src={adURL} alt="ad" style={{ width: 217 }} />
      </RightComponent>
    </Componenet>
  );
};

export default MidSlide;
