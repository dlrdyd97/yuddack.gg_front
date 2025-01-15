import React from "react";

const SaleBox = ({ userInfo }) => {
  return <div className="profile-sale">딱지 팜 ( {userInfo.sale_posts} )</div>;
};

export default SaleBox;
