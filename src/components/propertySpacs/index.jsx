// import React from "react";
import heroImg from "../../assets/heroImg.png";
import "./property-card.css";
import Slider from "react-slick";
const PropertySpecs = () => {
  const propertyCard = [
    {
      cardImg: heroImg,
      cardTitle: "REGION",
      cardSubTitle: "Property Specs",
      dateContent: "Lea Verbizier - dd/mm/yyyy",
      desc: "Caption describing the property in more detail.",
    },
    {
      cardImg: heroImg,
      cardTitle: "REGION",
      cardSubTitle: "Property Specs",
      dateContent: "Lea Verbizier - dd/mm/yyyy",
      desc: "Caption describing the property in more detail.",
    },
    {
      cardImg: heroImg,
      cardTitle: "REGION",
      cardSubTitle: "Property Specs",
      dateContent: "Lea Verbizier - dd/mm/yyyy",
      desc: "Caption describing the property in more detail.",
    },
    {
      cardImg: heroImg,
      cardTitle: "REGION",
      cardSubTitle: "Property Specs",
      dateContent: "Lea Verbizier - dd/mm/yyyy",
      desc: "Caption describing the property in more detail.",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="property-cards-wrapper">
      <div className="container">
        <div className="heading">
          <h2>You May Also Like</h2>
        </div>
        <div className="property-slide-wrapper">
          <Slider {...settings}>
            {propertyCard.map((card, index) => {
              return (
                <div className="property-card" key={index}>
                  <div className="property-img">
                    <img src={card.cardImg} alt="property-img" />
                  </div>
                  <div className="heading">
                    <h3>{card.cardTitle}</h3>
                    <h4>{card.cardSubTitle}</h4>
                    <div className="date-content">{card.dateContent}</div>
                    <p>{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PropertySpecs;
