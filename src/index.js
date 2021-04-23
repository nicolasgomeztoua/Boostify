import React from "react";

import App from "./App";
import { CartProvider } from "./Pages/Cart/CartHandler";
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <CartProvider>
      <App />
    </CartProvider>,
    rootElement
  );
} else {
  render(
    <CartProvider>
      <App />
    </CartProvider>,
    rootElement
  );
}
