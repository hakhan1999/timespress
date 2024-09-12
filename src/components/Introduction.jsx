import React from "react";
import { useLocale } from "../context/LocaleContext";

const Introduction = () => {
  const data = useLocale();

  if (!data) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="introduction">
        <div className="wrapper">
          <div className="col-1">
            <h2 className="green-subheading">{data.introSubheading}</h2>
            <h2 className="main-heading">{data.introHeading}</h2>
            <div className="para-col">
              <p className="para">{data.introPara1}</p>
              <p className="para">{data.introPara2}</p>
              <p className="para">{data.introPara3}</p>
            </div>
            <div className="global-btn">
              <a href="#">{data.introButton}</a>
            </div>
          </div>
          <div className="col-2">
            <div className="video-div">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/n0_7a8bwlkk"
                title="The Times Press Private Limited  - Pioneers of Printing in Pakistan"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
