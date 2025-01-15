import MyProfile from "./MyProfile";
import "../../styles/components/profile/Profile.css";
import { useState } from "react";
import MyTrade from "./MyTrade";
import PurchaseBox from "./PurchaseBox";
import SaleBox from "./SaleBox";

function Profile() {
  const [userInfo, setUserInfo] = useState({
    id: 1,
    name: "내래못난호랭이라는뜻이다",
    join: "2025-01-01",
    trade_count: 13,
    report_count: 0,
    purchase_posts: 4, // DB에서 작업 가능
    sale_posts: 2, // DB에서 작업 가능
    profile_picture: `${process.env.PUBLIC_URL}/images/WildSoul.png`,

    trade: [
      {
        id: 1,
        title: "증식의 쥐 , 하루우라라 삽니다.",
        content: "",
        option: "single",
        trade_type: "purchase",
      },
      {
        id: 2,
        title: "텐 사우전드 드래곤 삽니다.",
        content: "",
        option: "single",
        trade_type: "purchase",
      },
      {
        id: 3,
        title: "천년 데먼스미스 스네이크아이 덱 삽니다.",
        content: "",
        option: "deck",
        trade_type: "purchase",
      },
      {
        id: 4,
        title: "스타더스트 드래곤 삽니다.",
        content: "",
        option: "single",
        trade_type: "purchase",
      },
      {
        id: 5,
        title: "유벨 덱 팝니다.",
        content: "",
        option: "deck",
        trade_type: "sale",
      },
      {
        id: 6,
        title: "메멘토 덱 팝니다.",
        content: "",
        option: "deck",
        trade_type: "sale",
      },
    ],
  });

  return (
    <>
      <div className="profile-main">
        <MyProfile userInfo={userInfo} setUserInfo={setUserInfo} />
        <div className="profile-post-box">
          <div className="profile-trade-box">
            <PurchaseBox userInfo={userInfo} />
            <div className="scroll-box">
              {userInfo.trade
                .filter((tradeItem) => tradeItem.trade_type === "purchase") // "purchase"인 항목만 필터링
                .map((tradeItem) => (
                  <MyTrade
                    key={tradeItem.id}
                    trade={tradeItem}
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                  />
                ))}
            </div>
          </div>
          <div className="profile-trade-box">
            <SaleBox userInfo={userInfo} />
            <div className="scroll-box">
              {userInfo.trade
                .filter((tradeItem) => tradeItem.trade_type === "sale") // "sale"인 항목만 필터링
                .map((tradeItem) => (
                  <MyTrade
                    key={tradeItem.id}
                    trade={tradeItem}
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
