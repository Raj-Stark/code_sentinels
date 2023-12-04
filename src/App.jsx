import { useState } from "react";
import { useGlobalContext } from "./Context/AppContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./Pages/ProductListing";
import Checkout from "./Pages/Checkout";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <BrowserRouter>
      <TopBar></TopBar>
      <Routes>
        <Route path={"/"} element={<ProductListing></ProductListing>}></Route>
        <Route path={"/checkout"} element={<Checkout></Checkout>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
