import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./Pages/Cart/CartHandler";
import ReactPixel from "react-facebook-pixel";
const advancedMatching = { em: "nicolasnourgt@gmail.com" }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};
ReactPixel.init("777582332876660", advancedMatching, options);

ReactPixel.pageView(); // For tracking page view
ReactPixel.track(event, data); // For tracking default events, more info about events and data https://developers.facebook.com/docs/ads-for-websites/pixel-events/v2.9
ReactPixel.trackSingle("PixelId", event, data); // For tracking default events, more info about events and data https://developers.facebook.com/docs/ads-for-websites/pixel-events/v2.9
ReactPixel.trackCustom(event, data); // For tracking custom events
ReactPixel.trackSingleCustom("PixelId", event, data); // For tracking custom events
ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
