import { useNavigate } from "react-router";
import SearchBar from "../../components/searchBar/SearchBar";

function Home() {
  const navigate = useNavigate();
  const imageUrl = `${process.env.PUBLIC_URL}/images/yuddackgg.png`;
  return (
    <>
      <div className="home-main-div">
        <div className="home-image-div">
          <img src={imageUrl} alt="Yuddack GG" />
        </div>
        <SearchBar />
      </div>
      <div className="home-button-div">
        <div onClick={() => navigate("/mypage/profile")}>마이페이지</div>
        <div onClick={() => navigate("/result")}>검색결과</div>
        <div onClick={() => navigate("/registerCard")}>카드 등록</div>
        <div onClick={() => navigate("/registerDeck")}>덱 등록</div>
      </div>
    </>
  );
}

export default Home;
