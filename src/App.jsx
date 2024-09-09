import React from "react";
import { Header, HeroSlider } from "./index";
import { LocaleProvider } from "./context/LocaleContext";

const App = () => {
  return (
    <>
      <div className="container">
        <LocaleProvider>
          <Header />
        </LocaleProvider>
      </div>
      <LocaleProvider>
        <HeroSlider />
      </LocaleProvider>
    </>
  );
};

export default App;
