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
        <div className="trade-top">{trade.title}</div>
        <div className="trade-image-container">
          <img src={trade.post_picture} alt="Profile" className="trade-image" />
        </div>
        {trade.option === "single" ? (
          <>
            <div className="trade-bottom">
              {/* 특수문자 '[ ]' 가 문자보다 아래 출력되는 현상이 있어서 style 추가 */}
              <span className="trade-special-char">[</span>
              <span>{trade.quantity}장</span>
              <span className="trade-special-char">]&nbsp;</span>
              <span>
                개당 {new Intl.NumberFormat("ko-KR").format(trade.price)}
                원&nbsp;
              </span>
            </div>
            <div className="trade-option">
              <div className="trade-option-single">낱장</div>
            </div>
          </>
        ) : (
          <>
            <div className="trade-bottom">
              <span>
                {new Intl.NumberFormat("ko-KR").format(trade.price)}원
              </span>
            </div>
            <div className="trade-option">
              <div className="trade-option-deck">덱</div>
            </div>
          </>
        )}
        {/* 부가 옵션 */}
        <div className="trade-extraOptions-box">
          {/* 흥정 여부 */}
          {trade.negotiable === 1 ? (
            <>
              <span className="trade-extraOptions-possible">흥정 가능</span>
            </>
          ) : (
            <>
              <span className="trade-extraOptions-impossible">흥정 불가</span>
            </>
          )}
          {/* 레어도 */}
          {trade.rarity === "" || trade.rarity === "상관없음" ? (
            <></>
          ) : (
            <>
              <span className="trade-extraOptions-rarity">{trade.rarity}</span>
            </>
          )}
        </div>
        {/*  몇 분 , 몇  시간 , 며칠 전 수정 */}
        <div className="trade-date">{getDaysAgo(trade.date)}일 전</div>
        {/* 코맨트 */}
        <div className="trade-comment">{trade.comment}</div>
      </div>
    </>
  );
};

export default Mytrade;
