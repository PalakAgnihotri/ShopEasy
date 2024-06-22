import { Box } from "@mui/system";
import Cart from "./components/Cart/Cart";

//Components

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DataProvider from "./context/dataProvider";
import DetailView from "./components/details/DetailView";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 56 }}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
