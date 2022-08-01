import React,{useEffect, useState} from "react";
import Navbar from "./componentes/Navbar";
import Characters from "./componentes/Characters";
import Pags from "./componentes/Pags";
import Footer from "./componentes/Footer";

function App() {
  const [characters, setCharacters] = useState([])

  const [info, setInfo] = useState({})

  const initialUrl = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);

      })
      .catch(error => console.log(error))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  return (
    <>
    <div className="App">
      <Navbar brand="Rick and Morty app"/>
      <div className="container mt-3">
        <Pags prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Characters characters={characters}/>
        <Pags prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
