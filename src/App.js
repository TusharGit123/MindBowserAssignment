import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCharacters } from "./redux/reducers/rootReducer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import SearchInput from "./components/SearchInput/SearchInput";
import Navbar from "./components/Navbar/Navbar";
import Favourite from "./Pages/Favourite";
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

        <Route path="/favorite" element={<Favourite />} />
        <Route path="/favorite/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.rootReducer); // get data from store
  const [pageNumber, setPageNumber] = useState(1);
  const [characterData, setCharacterData] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [characterStatus, setCharacterStatus] = useState("");
  const [characterGender, setCharacterGender] = useState("");
  const [characterSpecies, setCharacterSpecies] = useState("");

  useEffect(() => {
    dispatch(fetchAllCharacters());
  }, []);

  let { info, results } = characterData;

  {
    /*Fetched Api */
  }
  let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchCharacter}&status=${characterStatus}&gender=${characterGender}&species=${characterSpecies}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(url).then((res) => res.json());

      setCharacterData(data);
    })();
  }, [url]);
  return (
    <div className="App">
      {/* Search Bar here */}
      <SearchInput
        setSearchCharacter={setSearchCharacter}
        setPageNumber={setPageNumber}
      />
      <div className="container">
        <div className="row">
          {/*  Filter characters by status, gender,species */}
          <Filters
            setCharacterStatus={setCharacterStatus}
            setCharacterGender={setCharacterGender}
            setCharacterSpecies={setCharacterSpecies}
            setPageNumber={setPageNumber}
          />

          {/*  All character cards  */}
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
