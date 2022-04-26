import "../styles/App.scss";
import phrases from "../data/phrases.json";
import { useState } from "react";
console.log(phrases);

function App() {
  const [data, setData] = useState(phrases);
  const [newDataPhrase, setnewDataPhrase] = useState({
    quote: "",
    character: "",
  });

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

  const htmlData = data.map((phrase, i) => {
    return (
      <li className="listElement" key={i}>
        {" "}
        {phrase.quote}
        {phrase.character}{" "}
      </li>
    );
  });
  return (
    <>
      <h1 className="header__title">Frases de Friends</h1>
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
        />
        Personaje
        <input
          className="new-phrase-caracter__input"
          type="text"
          name="caracter"
          id="character"
          placeholder="Personaje"
          onChange={handleNewPhraseCaracter}
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
