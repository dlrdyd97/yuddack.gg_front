import React from "react";
import "../../styles/components/sell/DeckRegisterList.css";

const DeckRegisterList = () => {
  return (
    <div className="register-section">
      <div className="register-item-main-section">
        <div className="register-item-container-mini">
          {/* 텍스트 정보 */}
          <div className="register-info">
            <div className="photo-div">
              <img src="/images/E5B08FE9B597.png" alt="프로필사진" />
            </div>
            <div className="card-name">시나농</div>
            <div className="btn-div">
              <button className="quantity">1</button>
            </div>
          </div>
        </div>
        <div className="register-item-container-mini">
          {/* 텍스트 정보 */}
          <div className="register-info">
            <div className="photo-div">
              <img
                src="/images/HqzP86YBTQ_H7rzbCWd37N8k7tpZHrg9kBrygxnjcaQtG1Sxm2Li4rXv5Gc_JaA4zyT3is9lT3qQ6_b6YsbCpYcgdjxwS-waavzzKzyXIAqIEP1oQfnzPX8TCgwNEBipZcjTORqe8fGpgDq6YMRyeg.webp"
                alt="프로필사진"
              />
            </div>
            <div className="card-name">꼬나농</div>
            <div className="btn-div">
              <button className="quantity">2</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckRegisterList;
