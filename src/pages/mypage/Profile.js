import MyProfile from "./MyProfile";
import "../../styles/components/profile/Profile.css";
import { useState } from "react";
import MyTrade from "./MyTrade";
import PurchaseBox from "./PurchaseBox";
import SaleBox from "./SaleBox";
import GetUserInfo from "./GetUserInfo";
import BringUp from "./BringUp";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(GetUserInfo);

  return (
    <>
      <div className="profile-main">
        <MyProfile userInfo={userInfo} setUserInfo={setUserInfo} />

        {/* 구매중인 딱지 리스트 */}
        <div className="profile-post-box">
          {/* 끌어올리기 */}
          <div className="profile-bring-up">
            <BringUp />
          </div>
          <div className="profile-trade-box">
            <PurchaseBox
              userInfo={userInfo}
              title={"딱지 사는중"}
              count={userInfo.purchase_posts}
            />
            <div className="scroll-box">
              {userInfo.trade
                .filter(
                  (tradeItem) =>
                    tradeItem.trade_type === "purchase" &&
                    tradeItem.status === "in_progress"
                ) // "purchase"인 항목 + "in_progress" 필터링
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
          {/* 판매중인 딱지 리스트 */}
          <div className="profile-trade-box">
            <SaleBox
              userInfo={userInfo}
              title={"딱지 파는중"}
              count={userInfo.sale_posts}
            />
            <div className="scroll-box">
              {/* 낱장 판매중 */}
              {userInfo.trade.filter(
                (tradeItem) =>
                  tradeItem.trade_type === "sale" &&
                  tradeItem.option === "single" &&
                  tradeItem.status === "in_progress"
              ).length !== 0 ? ( // 판매중인 낱장 카드가 있으면
                <>
                  <MyTrade
                    trade={"bundle"}
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                  />
                </>
              ) : (
                <></>
              )}
              {/* 덱 판매중 */}
              {userInfo.trade
                .filter(
                  (tradeItem) =>
                    tradeItem.trade_type === "sale" && // 판매
                    tradeItem.status === "in_progress" && // 판매중
                    tradeItem.option !== "single" // 낱장이 아닌 판매카드  ( 낱장,묶어팔기는 상단 고정 )
                )
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
        {/* 구매 , 판매 완료한 딱지 */}
        <div className="profile-post-box">
          <div className="profile-trade-box">
            <PurchaseBox
              userInfo={userInfo}
              title={"딱지 산거"}
              count={userInfo.completed_purchase_posts}
            />
            <div className="scroll-box">
              {userInfo.trade
                .filter(
                  (tradeItem) =>
                    tradeItem.trade_type === "purchase" &&
                    tradeItem.status === "completed"
                ) // "purchase"인 항목 + "completed" 필터링
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
            <SaleBox
              userInfo={userInfo}
              title={"딱지 팔린거"}
              count={userInfo.completed_sale_posts}
            />
            <div className="scroll-box">
              {userInfo.trade
                .filter(
                  (tradeItem) =>
                    tradeItem.trade_type === "sale" &&
                    tradeItem.status === "completed"
                ) // "sale"인 항목 + "completed" 필터링
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
};

export default Profile;
