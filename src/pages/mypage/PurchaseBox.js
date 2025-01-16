import React from "react";

const PurchaseBox = ({ userInfo, title, count }) => {
  return (
    <div className="profile-purchase">
      {title} ( {count} )
    </div>
  );
};

export default PurchaseBox;
