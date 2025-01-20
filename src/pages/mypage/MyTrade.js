import React, { useState } from "react";
import "../../styles/components/profile/MyTrade.css";

const Mytrade = ({ trade, userInfo, setUserInfo }) => {
  const getDaysAgo = (tradeDate) => {
    const today = new Date();
    const tradeDateObj = new Date(tradeDate); // trade.date를 Date 객체로 변환
    const diffTime = today - tradeDateObj; // 밀리초 단위로 차이 계산
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // 밀리초를 일 단위로 변환
    return diffDays;
  };

  return (
    <>
      <div className="trade-box">
        {trade === "bundle" ? (
          <>
            <div className="trade-title-bundle">낱장</div>
            <div className="trade-option-bundle">
              <div className="trade-option-single-bundle">낱장</div>
            </div>
          </>
        ) : (
          <>
            <div className="trade-title">{trade.title}</div>
            <div className="trade-price">
              {new Intl.NumberFormat("ko-KR").format(trade.price)} 원
            </div>
            <div className="trade-option">
              {trade.option === "single" ? (
                <div className="trade-option-single">낱장</div>
              ) : (
                <div className="trade-option-deck">덱</div>
              )}
            </div>
            <div className="trade-date">{getDaysAgo(trade.date)}일 전</div>
          </>
        )}
      </div>
    </>
  );
};

export default Mytrade;
