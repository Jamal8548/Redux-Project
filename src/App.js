import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductComponent from "./containers/ProductComponent";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div>
      <Router>
        <h1 style={{ marginTop: 45, textAlign: "center" }}>
          State Management with Redux
        </h1>
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          <Route>404 Not Found!</Route>
        </Routes>
        <footer>
          <p>By &copy; 2022-JAMAL ASHRAF.</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
