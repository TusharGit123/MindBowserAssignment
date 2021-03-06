import React from "react";
import FilterButtons from "../FilterButtons";

const Gender = ({ setPageNumber, setCharacterGender }) => {
  let characterGenders = ["female", "male", "genderless", "unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {characterGenders.map((items, index) => {
            return (
              <FilterButtons
                task={setCharacterGender}
                setPageNumber={setPageNumber}
                name="gender"
                index={index}
                key={index}
                items={items}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gender;
