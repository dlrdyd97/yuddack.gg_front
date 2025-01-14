import React, { useState } from "react";
import "../../styles/components/profile/MyProfile.css";
import { FaCopy } from "react-icons/fa";

const MyProfile = ({ userInfo, setUserInfo }) => {
  const [showAlert, setShowAlert] = useState(false);

  const nameCopy = () => {
    navigator.clipboard
      .writeText(userInfo.name)
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
      <div className="myprofile-container">
        {/* 프로필 헤더 */}
        <div className="myprofile-head">
          {/* 프로필사진 */}
          <div className="myprofile-image-container">
            <img
              src={userInfo.profile_picture}
              alt="Profile"
              className="myprofile-img"
            />
          </div>
          {/* 로그아웃 버튼 */}
          <div
            className="myprofile-logout"
            onClick={() => {
              logOut();
            }}
          >
            로그아웃
          </div>
        </div>
        {/* 프로필 메인 */}
        <div className="myprofile-main">
          <div className="myprofile-username-box">
            {/* 닉네임 */}
            <div className="myprofile-username">{userInfo.name}</div>
            {/* 닉네임 복사 */}
            <div
              className="myprofile-username-copy"
              onClick={() => {
                nameCopy();
              }}
            >
              <FaCopy size={20} />
            </div>
          </div>
          <div className="myprofile-content">
            <div className="myprofile-trade">
              <span className="myprofile-content-front">거래 횟수</span>
              <span>: &nbsp;&nbsp;{userInfo.trade_count} 회</span>
            </div>
            <div className="myprofile-report">
              <span className="myprofile-content-front">신고 횟수</span>
              <span>: &nbsp;&nbsp;{userInfo.report_count} 회</span>
            </div>
            <div>
              <span className="myprofile-content-front">구매글</span>
              <span>: &nbsp;&nbsp;{userInfo.purchase_posts} 건</span>
            </div>
            <div>
              <span className="myprofile-content-front">판매글</span>
              <span>: &nbsp;&nbsp;{userInfo.sale_posts} 건</span>
            </div>
            <div>
              <span className="myprofile-content-front">가입일</span>
              <span>: &nbsp;&nbsp;{userInfo.join}</span>
            </div>
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
