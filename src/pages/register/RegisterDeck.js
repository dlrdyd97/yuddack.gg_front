import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "../../styles/components/register/registerDeck.css";
import DeckRegisterList from "../../components/sell/DeckRegisterList";

const RegisterDeck = (props) => {
  return (
    <div className="registerDeck-section">
      <div className="content-center">
        <SearchBar />
        <DeckRegisterList />
      </div>
    </div>
  );
};

export default RegisterDeck;
