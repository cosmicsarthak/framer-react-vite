// Add this at the top of main.jsx or index.js
window.process = { env: { NODE_ENV: "development" } };

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { getPageRoot } from "./framerRoutes.jsx";

const container = document.getElementById("root");

async function loadFramerApp() {
  const routeId = "/";
  const localeId = "default";
  const pathVariables = {};

  const page = await getPageRoot({ routeId, localeId, pathVariables });

  ReactDOM.createRoot(container).render(page);
}

loadFramerApp();
