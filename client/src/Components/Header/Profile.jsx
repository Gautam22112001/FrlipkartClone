import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useState } from "react";

const Componenet = styled(Menu)`
  margin-top: 5px;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 15px;
`;

const Profile = ({ userAccount, setAcoount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const logoutUser = () => {
    setAcoount("");
  };

  return (
    <>
      <Box onClick={(e) => handleClick(e)}>
        <Typography style={{ marginTop: 2, cursor: "pointer" }}>
          {userAccount}
        </Typography>
        <Componenet
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              logoutUser();
            }}
          >
            <PowerSettingsNewIcon color="primary" fontSize="small" />
            <Logout>Logout</Logout>
          </MenuItem>
        </Componenet>
      </Box>
    </>
  );
};

export default Profile;
