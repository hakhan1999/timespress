import React from "react";
import { Header } from "./index";
import { LocaleProvider } from "./context/LocaleContext";

const App = () => {
  return (
    <div className="container">
      <LocaleProvider>
        <Header />
      </LocaleProvider>
    </div>
  );
};

export default App;
