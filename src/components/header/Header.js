import React from "react";
import "../../styles/components/header/Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="left">
          <a href="/">메인</a>
          <a href="/card">낱장</a>
          <a href="/deck">덱 / 소스</a>
        </div>
        <div className="right">
          <a href="/sell">판매하기</a>
          <a href="/login">로그인</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
