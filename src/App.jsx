import React from "react";
import { Clients, Header, HeroSlider, Introduction } from "./index";
import { LocaleProvider } from "./context/LocaleContext";

const App = () => {
  return (
    <>
      <LocaleProvider>
        <Header />
        <HeroSlider />
        <Introduction />
        <Clients />
      </LocaleProvider>
    </>
  );
};

export default App;
