import React from "react";
import "../../styles/components/profile/MyTrade.css";

const Mytrade = ({ trade, userInfo, setUserInfo }) => {
  return (
    <>
      <div className="trade-box">
        <div className="trade-title">{trade.title}</div>
        <div className="trade-option">
          {trade.option === "single" ? (
            <div className="trade-option-single">낱장</div>
          ) : (
            <div className="trade-option-deck">덱</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Mytrade;
