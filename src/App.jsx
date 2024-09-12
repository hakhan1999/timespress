import React from "react";
import { Header, HeroSlider, Introduction } from "./index";
import { LocaleProvider } from "./context/LocaleContext";

const App = () => {
  return (
    <>
      <LocaleProvider>
        <Header />
        <HeroSlider />
        <Introduction />
      </LocaleProvider>
    </>
  );
};

export default App;
