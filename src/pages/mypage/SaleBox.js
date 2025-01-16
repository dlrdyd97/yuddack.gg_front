import React from "react";

const SaleBox = ({ userInfo, title, count }) => {
  return (
    <div className="profile-sale">
      {title} ( {count} )
    </div>
  );
};

export default SaleBox;
