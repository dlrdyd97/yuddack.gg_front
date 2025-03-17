import React, { useState } from "react";
import "../../styles/components/profile/BringUp.css";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const BringUp = () => {
  const [showAlert, setShowAlert] = useState(0);

  const bringUpClick = () => {
    const result = window.confirm(
      "끌어올리기를 진행하시겠습니까? ( 쿨타임 1시간 )"
    );
    if (result) {
      setShowAlert(1); // 끌어올리기 성공 표시
      setTimeout(() => {
        setShowAlert(0); // 3초 후 알림 숨기기
      }, 2900);
    } else {
      // 취소 or 쿨타임 1시간이 안되면 로직 추가해야함
      setShowAlert(2); // 끌어올리기 실패 표시
      setTimeout(() => {
        setShowAlert(0); // 3초 후 알림 숨기기
      }, 2900);
    }
  };

  return (
    <>
      <div
        className="bring-up"
        onClick={(e) => {
          bringUpClick();
        }}
      >
        끌어올리기
        <MdKeyboardDoubleArrowUp />
      </div>
      {/* 복사 성공 알림 */}
      {showAlert === 1 && (
        <div className="bring-completed-alert">
          <span>끌어올림 성공</span>
        </div>
      )}
      {showAlert === 2 && (
        <div className="bring-fail-alert">
          <span>끌어올림 실패</span>
        </div>
      )}
    </>
  );
};

export default BringUp;
