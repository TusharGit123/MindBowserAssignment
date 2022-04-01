import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/css/cardStyle.css";

const Cards = ({ results, page }) => {
  let showData;
  if (results) {
    showData = results.map((item) => {
      let { id, name, image, status, location } = item;
      return (
        <Link
          to={`${page}${id}`}
          style={{ textDecoration: "none" }}
          className="col-4 mb-4 position-relative text-dark"
          key={id}
        >
          <div className="card d-flex flex-column justify-content-center">
            <img src={image} alt="character-image" className="img img-fluid" />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">last location</div>
                <div className="fs-5">{location.name}</div>
              </div>
              <i className="fas fa-heart"></i>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div className="badge bg-danger position-absolute">
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div className="badge bg-success position-absolute">
                  {status}
                </div>
              );
            } else {
              return (
                <div className="badge bg-secondary position-absolute">
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    showData = "We don't have such character.";
  }
  return <>{showData}</>;
};

export default Cards;
