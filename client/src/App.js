import { Box } from "@mui/material";

//Components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

//contexAPI
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: 55 }}>
        {" "}
        //#region Why Box Explained:
        {/* this Box and margin was required because the header had position fixed thus all the content after the header was going under it thus applied margin to the div equivalent of the height of the header */}
        //#endregion
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
