import MyProfile from "./MyProfile";
import "../../styles/components/profile/Profile.css";
import { useState } from "react";

function Profile() {
  const [userInfo, setUserInfo] = useState({
    id: 1,
    name: "내래못난호랭이라는뜻이다",
    join: "2025-01-01",
    trade_count: 13,
    report_count: 0,
    purchase_posts: 3,
    sale_posts: 5,
    profile_picture: `${process.env.PUBLIC_URL}/images/WildSoul.png`,
  });

  return (
    <>
      <div className="profile-main">
        <MyProfile userInfo={userInfo} setUserInfo={setUserInfo} />

        <div className="profile-post-box">
          <div className="profile-post-head">
            <div className="profile-purchase">딱지 삼 ( 3 )</div>
            <div className="profile-sale">딱지 팔음 ( 5 )</div>
          </div>

          <div>구매목록</div>
          <div>판매목록</div>
        </div>
      </div>
    </>
  );
}

export default Profile;
