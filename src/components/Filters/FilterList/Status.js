import React from "react";
import FilterButtons from "../FilterButtons";

const Status = ({ setCharacterStatus, setPageNumber }) => {
  const characterStatus = ["Alive", "Dead", "Unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {characterStatus.map((items, index) => (
            <FilterButtons
              setPageNumber={setPageNumber}
              task={setCharacterStatus}
              key={index}
              index={index}
              name="status"
              //   task={updateStatus}
              //   updatePageNumber={updatePageNumber}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
