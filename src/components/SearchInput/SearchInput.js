import React from "react";
import styles from "../../assets/css/searchInput.css";

const SearchInput = ({ setSearchCharacter, setPageNumber }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearchCharacter(e.target.value);
        }}
        type="text"
        className="input"
        placeholder="search character"
      />
      <button
        onClick={(e) => e.preventDefault()}
        className="btn btn-primary fs-5"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
