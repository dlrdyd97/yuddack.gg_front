import MyProfile from "./MyProfile";
import "../../styles/components/profile/Profile.css";
import { useEffect, useState } from "react";

function Profile() {
  const [username, setUsername] = useState("내래못난호랭이라는뜻이다");
  const [userPfp, setUserPfp] = useState(
    `${process.env.PUBLIC_URL}/images/WildSoul.png`
  );

  return (
    <>
      <div className="profileMain">
        <MyProfile name={username} userPfp={userPfp} />
      </div>
    </>
  );
}

export default Profile;
