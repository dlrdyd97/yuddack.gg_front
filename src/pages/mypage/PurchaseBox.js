import React from "react";

const PurchaseBox = ({ userInfo }) => {
  return (
    <div className="profile-purchase">
      딱지 삼 ( {userInfo.purchase_posts} )
    </div>
  );
};

export default PurchaseBox;
