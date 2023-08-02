import { Box } from "@mui/material";

//Components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import DetailVew from "./Components/Details/DetailVew";
import Cart from "./Components/Cart/Cart";

//contexAPI
import DataProvider from "./context/DataProvider";

//Add routing to app.js
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 55 }}>
          {" "}
          <>
            {/* this Box and margin was required because the header had position fixed thus all the content after the header was going under it thus applied margin to the div equivalent of the height of the header */}
          </>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/product/:id" element={<DetailVew />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
