import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (  // The main App component that serves as the entry point for the application
    <>
      <Header /> {/* Header component that likely contains the navigation and branding */}  
      <Main />  {/* Main component that contains the main content of the application */}
    </>
  );
};

export default App;
