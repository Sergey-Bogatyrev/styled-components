import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const Global = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  width: 100%;
   }
img {
  vertical-align: top;
}
body {
  position: relative;
  overflow: visible;
}
`;

const theme = {
  media: {
    phone: "(max-width: 428px)",
    tablet: "(max-width: 768px)",
    laptop: "(max-width: 1201px)",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

