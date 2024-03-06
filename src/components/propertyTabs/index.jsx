// import React from "react";
import { useState } from "react";
import heroImg from "../../assets/heroImg.png";
import "./propertyTabs.css";
const propertyCard = [
  {
    tab: "FOREIGN BUYERS",
    tabContent: [
      {
        cardImg: heroImg,
        cardTitle: "REGION1",
        cardSubTitle: "Property Specs",
        dateContent: "Lea Verbizier - dd/mm/yyyy",
        desc: "Caption describing the property in more detail.",
      },
      {
        cardImg: heroImg,
        cardTitle: "REGION1",
        cardSubTitle: "Property Specs",
        dateContent: "Lea Verbizier - dd/mm/yyyy",
        desc: "Caption describing the property in more detail.",
      },
      {
        cardImg: heroImg,
        cardTitle: "REGION1",
        cardSubTitle: "Property Specs",
        dateContent: "Lea Verbizier - dd/mm/yyyy",
        desc: "Caption describing the property in more detail.",
      },
    ],
  },
  {
    tab: "LOCAL BUYERS",
    tabContent: [
      {
        cardImg: heroImg,
        cardTitle: "REGION2",
        cardSubTitle: "Property Specs",
        dateContent: "Lea Verbizier - dd/mm/yyyy",
        desc: "Caption describing the property in more detail.",
      },
      {
        cardImg: heroImg,
        cardTitle: "REGION2",
        cardSubTitle: "Property Specs",
        dateContent: "Lea Verbizier - dd/mm/yyyy",
        desc: "Caption describing the property in more detail.",
      },
      {
        cardImg: heroImg,
        cardTitle: "REGION2",
        cardSubTitle: "Property Specs",
        dateContent: "Lea Verbizier - dd/mm/yyyy",
        desc: "Caption describing the property in more detail.",
      },
    ],
  },
  {
    tab: "LONG TERM RENTALS",
    tabContent: [
      {
        cardImg: heroImg,
        cardTitle: "REGION3",
        cardSubTitle: "Property Specs",
        dateContent: "Lea Verbizier - dd/mm/yyyy",
        desc: "Caption describing the property in more detail.",
      },
      {
        cardImg: heroImg,
        cardTitle: "REGION3",
        cardSubTitle: "Property Specs",
        dateContent: "Lea Verbizier - dd/mm/yyyy",
        desc: "Caption describing the property in more detail.",
      },
      {
        cardImg: heroImg,
        cardTitle: "REGION3",
        cardSubTitle: "Property Specs",
        dateContent: "Lea Verbizier - dd/mm/yyyy",
        desc: "Caption describing the property in more detail.",
      },
    ],
  },
  {
    tab: "REAL ESTATE PROJECTS",
    tabContent: [
      {
        cardImg: heroImg,
        cardTitle: "REGION4",
        cardSubTitle: "Property Specs",
        dateContent: "Lea Verbizier - dd/mm/yyyy",
        desc: "Caption describing the property in more detail.",
      },
      {
        cardImg: heroImg,
        cardTitle: "REGION4",
        cardSubTitle: "Property Specs",
        dateContent: "Lea Verbizier - dd/mm/yyyy",
        desc: "Caption describing the property in more detail.",
      },
      {
        cardImg: heroImg,
        cardTitle: "REGION4",
        cardSubTitle: "Property Specs",
        dateContent: "Lea Verbizier - dd/mm/yyyy",
        desc: "Caption describing the property in more detail.",
      },
    ],
  },
];
const PropertyTabs = () => {
  const [tabText, setTabText] = useState(propertyCard[0]);
  return (
    <div className="property-cards-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="property-tabs">
              {propertyCard.map((tab, index) => (
                <li
                  className={tabText?.tab == tab.tab ? "active" : ""}
                  key={index}
                  onClick={() => {
                    setTabText(
                      propertyCard.find((obj) => obj?.tab == tab?.tab)
                    );
                  }}
                >
                  {tab.tab}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12">
            <div className="row">
              {tabText?.tabContent &&
                tabText?.tabContent?.length != 0 &&
                tabText?.tabContent?.map((tabItem, index) => (
                  <div className="col-4" key={index}>
                    <div className="property-card">
                      <div className="property-img">
                        <img src={tabItem.cardImg} alt="property-img" />
                      </div>
                      <div className="heading">
                        <h3>{tabItem.cardTitle}</h3>
                        <h4>{tabItem.cardSubTitle}</h4>
                        <div className="date-content">
                          {tabItem.dateContent}
                        </div>
                        <p>{tabItem.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyTabs;
