import { StrictMode } from "react"; // Importing React's StrictMode for highlighting potential problems in an application
import { createRoot } from "react-dom/client"; // Importing createRoot from react-dom/client for rendering React components
import "./index.css";
import App from "./App.jsx"; // Importing the main App component

// Importing the main App component and rendering it into the root element of the HTML document
// The createRoot function is used to create a root for the React application
createRoot(document.getElementById("root")).render(
  <StrictMode>  {/* Wrapping the application in StrictMode to enable additional checks and warnings for its descendants*/}
    <App />
  </StrictMode>
);
