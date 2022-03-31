import React from "react";
import Gender from "./FilterList/Gender";
import Species from "./FilterList/Species";
import Status from "./FilterList/Status";

const Filters = ({
  setCharacterStatus,
  setCharacterGender,
  setCharacterSpecies,
  setPageNumber,
}) => {
  const clear = () => {
    setCharacterStatus("");
    setCharacterGender("");
    setCharacterSpecies("");
    setPageNumber("");
    window.location.reload(false);
  };
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Character Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-4"
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Gender
          setCharacterGender={setCharacterGender}
          setPageNumber={setPageNumber}
        />
        <Species
          setCharacterSpecies={setCharacterSpecies}
          setPageNumber={setPageNumber}
        />
        <Status
          setCharacterStatus={setCharacterStatus}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  );
};

export default Filters;
