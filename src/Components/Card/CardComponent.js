import React from "react";
import cardImage from "../../assets/images/image1.webp";
import "./CardComponent.css";

const CardComponent = ({ cardData }) => {
  return (
    <>
      {cardData && cardData.length > 0 ? (
        cardData.map((item, index) => (
          <div className="card-items" key={index}>
            <span className="card-title">{item.title}</span>
            <span className="card-icon">
              <img src={item.url} className="card-image" alt="card image" />
            </span>
            <span className="card-des">
              officia porro iure quia iusto qui ipsa ut modi
            </span>
            <button className="learnmore">Learn More</button>
          </div>
        ))
      ) : (
        <p>No Data Available</p>
      )}
    </>
  );
};

export default CardComponent;
