// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { JobsProvider } from "./context/JobsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JobsProvider>
      <App />
    </JobsProvider>
  </React.StrictMode>
);
