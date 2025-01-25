import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import CardRegisterList from "../../components/sell/CardRegisterList";
import "../../styles/components/register/registerCard.css";

const RegisterCard = (props) => {
  return (
    <div className="registerCard-section">
      <div className="content-center">
        <SearchBar />
        <CardRegisterList />
      </div>
    </div>
  );
};

export default RegisterCard;
