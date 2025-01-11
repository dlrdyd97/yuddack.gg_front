import React from "react";
import "../../styles/components/footer/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; Yuddack.gg All rights reserved.</p>
      <div className="socialLinks">
        <a href="https://ko.wikipedia.org/wiki/%EC%8B%A0%EC%9D%80_%EC%A3%BD%EC%97%88%EB%8B%A4">
          공지사항
        </a>
        <a href="https://gall.dcinside.com/mgallery/board/view/?id=fromsoftware&no=4167587">
          개인정보 처리방침
        </a>
      </div>
    </footer>
  );
}

export default Footer;
