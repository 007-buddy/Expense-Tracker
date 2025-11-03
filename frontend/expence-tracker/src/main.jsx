import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx"
import UserProvider from "./context/UserContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>,
)
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css"; // if you have tailwind / styles
// import UserProvider from "./context/UserContext";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <UserProvider>
//       <App />
//     </UserProvider>
//   </React.StrictMode>
// );
