import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  styled,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

//components
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import "./Header.css";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const BoxComponent = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [openHeader, setOpenHeader] = useState(false);

  const handleOpen = () => {
    setOpenHeader(true);
  };

  const handleClose = () => {
    setOpenHeader(false);
  };

  const list = () => {
    return (
      <Box style={{ width: 200 }} onClick={handleClose}>
        <List>
          <ListItem button>
            <CustomButtons />
          </ListItem>
        </List>
      </Box>
    );
  };

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <IconButton color="inherit" className="menuIcon" onClick={handleOpen}>
          <MenuIcon />
        </IconButton>
        <Drawer open={openHeader} onClose={handleClose}>
          {list()}
        </Drawer>
        <BoxComponent to={"/"}>
          <img src={logoURL} alt="Logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#ffe500" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subURL} alt="plus-logo" />
          </Box>
        </BoxComponent>
        <Search />
        <Box className="CustomButtonWrapper">
          <CustomButtons />
        </Box>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
