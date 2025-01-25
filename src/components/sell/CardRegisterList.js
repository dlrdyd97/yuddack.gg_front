import React from "react";
import "../../styles/components/sell/CardRegisterList.css";

const CardRegisterList = () => {
  return (
    <div className="register-item-container">
      {/* 텍스트 정보 */}
      <div className="register-info">
        <div className="photo-div">
          <img src="/images/E5B08FE9B597.png" alt="프로필사진" />
        </div>
        <div className="content-div">
          <div className="top-section">
            <div className="name-div">
              <p className="item-description">이름</p>
              <input type="text" className="item-input"></input>
            </div>
          </div>
          <div className="bottom-section">
            <div className="bottom-left">
              <div className="rarity-div">
                <p className="item-description">레어도</p>
                <input type="text" className="item-input"></input>
              </div>
              <div className="quantity-div">
                <p className="item-description">수량</p>
                <input type="text" className="item-input"></input>
              </div>
            </div>
            <div className="bottom-right">
              <div className="price-div">
                <p className="item-description">가격 (장 당)</p>
                <input type="text" className="item-input"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-div">
          <button className="del-btn" style={{ visibility: "hidden" }}>
            판매완료
          </button>
          <button className="del-btn">삭제하기</button>
        </div>
      </div>
    </div>
  );
};

export default CardRegisterList;
