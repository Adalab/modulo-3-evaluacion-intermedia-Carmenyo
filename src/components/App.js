import "../styles/App.scss";
import phrases from "../data/phrases.json";
import { useState } from "react";
console.log(phrases);

function App() {
  const [data, setData] = useState(phrases);
  const [select, setSelect] = useState('all');
  const [newDataPhrase, setnewDataPhrase] = useState({
    quote: "",
    character: "",
  });

  const [search, setSearch] =useState (" ");

  const handleSearch = (ev) =>{
    setSearch(ev.target.value);
  }
  const handleSelect = (ev) => {
    setSelect(ev.target.value);
  }

  const handleNewPhrase = (ev) => {
    setnewDataPhrase({
      ...newDataPhrase,
      [ev.target.id]: ev.target.value,
    });
    console.log(newDataPhrase);
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    setData([...data, newDataPhrase]);
    setnewDataPhrase({
      quote: "",
      character: "",
    });
  };

  const handleNewPhraseCaracter = (ev) => {
    setnewDataPhrase({
      ...newDataPhrase,
      [ev.target.id]: ev.target.value,
    });
    console.log(newDataPhrase);
  };

  const htmlData = data

  .filter( (phrase) => 
  phrase.quote.toLowerCase().includes(search.toLowerCase())
  )
  .filter((phrase) => {
    if (select === 'all') {
      return true;
    } else if (select === phrase.character) {
      return true;
    } else {
      return false;
    }
  })

  .map((phrase, i) => {
    return (
      <li className="listElement" key={i}>
     <p>
        {phrase.quote}
        {phrase.character}
        
        </p>
      </li>
    );
  });


  return (
    <>
      <h1 className="header__title">Frases de Friends</h1>
      <form>
            Filtrar por frase
            <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar frases"
            onChange= {handleSearch}
            value={search}>
            </input>

            Filtar por personaje
            <select name="" id="" onChange={handleSelect} value={select}>
              <option value="all">Todos</option>
              <option value="Ross">Ross</option>
              <option value="Monica">Mónica</option>
              <option value="Joey">Joey</option>
              <option value="Phoebe">Phoebe</option>
              <option value="Chandler">Chandler</option>
              <option value="Rachel">Rachel</option>
            </select>
      </form>

     


      <ul>{htmlData}</ul>

      <form className="new-phrase__form">
        <h2 className="new-phrase__title">Añade una nueva Frase</h2>
        Frase
        <input
          className="new-phrase__input"
          type="text"
          name="phrase"
          id="quote"
          placeholder="Nueva Frase"
          onChange={handleNewPhrase}
          value={newDataPhrase.quote}
        />
        Personaje
        <input
          className="new-phrase-caracter__input"
          type="text"
          name="caracter"
          id="character"
          placeholder="Personaje"
          onChange={handleNewPhraseCaracter}
          value={newDataPhrase.character}
        />
      </form>
      <input
        className="new-phrase__btn"
        type="submit"
        value="Añadir nueva frase"
        onClick={handleClick}
      />
    </>
  );
}
export default App;
