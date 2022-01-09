import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./Pages/Cart/CartHandler";
import { CookiesProvider } from "react-cookie";
ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
