import { Box, Typography, styled } from "@mui/material";
import { navData } from "../../Constants/data";
import "./NavBar.css";

// const Componenet = styled(Box)`
//   display: flex;
//   margin: 55px 130px 0 130px;
//   justify-content: space-between;
// `;

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center; // to center the text and the image
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const NavBar = () => {
  return (
    <Box
      style={{
        backgroundColor: "#fff",
      }}
    >
      <Box className="Componenet">
        {navData.map((data) => (
          <Container>
            <img src={data.url} alt="nav" style={{ width: 64 }} />
            <Text>{data.text}</Text>
          </Container>
        ))}
      </Box>
    </Box>
  );
};

export default NavBar;
