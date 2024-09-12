import React from "react";
import { useLocale } from "../context/LocaleContext";
import { clients } from "../constants";

const Clients = () => {
  const data = useLocale();

  if (!data) return <div>Loading...</div>;

  return (
    <div className="clients">
      <div className="container">
        <div className="wrapper">
          <div className="heading-div">
            <h2 className="green-subheading">{data.clientsSubheading}</h2>
            <h2 className="main-heading">{data.clientsHeading}</h2>
          </div>
          <div className="logo-clients">
            {clients.map((item) => (
              <img key={item.id} src={item.imageURL} />
            ))}
          </div>
          <div className="global-btn-div">
            <div className="global-btn center">
              <a href="#">{data.clientsButton}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
