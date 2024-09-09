import React from "react";
import { useLocale } from "../context/LocaleContext";
import Navbar from "./Navbar";

const Header = () => {
  const data = useLocale();

  if (!data) return <div>Loading...</div>;

  return (
    <div className="header">
      <div className="wrapper">
        <div className="col-1">
          <div className="logo">
            <img src="src/assets/logo.jpg" alt="Logo" />
          </div>
        </div>
        <div className="col-2">
          <Navbar />
          <div className="contact-links">
            <a href="mailto:contacts@timespresspk.com">
              <div className="icon">
                <img src="src/assets/email.svg" alt="Email" />
              </div>
              <p className="text">{data.email}</p>
            </a>
            <a href="tel:+(92-21) 34932931-3">
              <div className="icon">
                <img src="src/assets/phone.svg" alt="Phone" />
              </div>
              <p className="text">{data.phoneNumbers}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
