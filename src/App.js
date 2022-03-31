import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import SearchInput from "./components/SearchInput/SearchInput";
import Navbar from "./components/Navbar/Navbar";
import Favorite from "./Pages/Favorite";
import CardDetails from "./components/Cards/CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/favorite" element={<Favorite />} />
        <Route path="/favorite/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [characterData, setCharacterData] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [characterStatus, setCharacterStatus] = useState("");
  const [characterGender, setCharacterGender] = useState("");
  const [characterSpecies, setCharacterSpecies] = useState("");

  let { info, results } = characterData;

  let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchCharacter}&status=${characterStatus}&gender=${characterGender}&species=${characterSpecies}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(url).then((res) => res.json());

      setCharacterData(data);
    })();
  }, [url]);
  return (
    <div className="App">
      <SearchInput
        setSearchCharacter={setSearchCharacter}
        setPageNumber={setPageNumber}
      />
      <div className="container">
        <div className="row">
          <Filters
            setCharacterStatus={setCharacterStatus}
            setCharacterGender={setCharacterGender}
            setCharacterSpecies={setCharacterSpecies}
            setPageNumber={setPageNumber}
          />

          <div className="col-8">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        info={info}
      />
    </div>
  );
};

export default App;
