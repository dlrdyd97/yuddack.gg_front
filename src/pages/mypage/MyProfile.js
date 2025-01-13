import React, { useEffect, useState } from "react";
import "../../styles/components/profile/Profile.css";
import { FaCopy } from "react-icons/fa";

const MyProfile = ({ name, userPfp }) => {
  const [showAlert, setShowAlert] = useState(false);

  const nameCopy = () => {
    navigator.clipboard
      .writeText(name)
      .then(() => {
        setShowAlert(true); // 복사 성공 시 알림 표시
        setTimeout(() => {
          setShowAlert(false); // 3초 후 알림 숨기기
        }, 3000);
      })
      .catch((err) => {
        alert("복사 실패", err);
      });
  };

  const logOut = () => {
    alert("로그아웃");
  };

  return (
    <>
      <div className="profile-container">
        {/* 프로필 헤더 */}
        <div className="profile-head">
          {/* 프로필사진 */}
          <div className="profile-image-container">
            <img src={userPfp} alt="Profile" className="profile-img" />
          </div>
          {/* 로그아웃 버튼 */}
          <div
            className="profile-logout"
            onClick={() => {
              logOut();
            }}
          >
            로그아웃
          </div>
        </div>
        {/* 프로필 메인 */}
        <div className="profile-main">
          <div className="profile-username-box">
            {/* 닉네임 */}
            <div className="profile-username">{name}</div>
            {/* 닉네임 복사 */}
            <div
              className="profile-username-copy"
              onClick={() => {
                nameCopy();
              }}
            >
              <FaCopy size={20} />
            </div>
          </div>
          <div className="profile-content">
            <div>계정 생성일 : 2025-01-13</div>
            <div>거래 횟수 : 10회</div>
            <div>신고당한 횟수 : 0회</div>
            <div>구매글 : 3건</div>
            <div>판매글 : 7건</div>
          </div>
        </div>
      </div>

      {/* 복사 성공 알림 */}
      {showAlert && (
        <div className="copy-alert">
          <span>복사되었습니다.</span>
        </div>
      )}
    </>
  );
};

export default MyProfile;
