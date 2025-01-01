import { useNavigate } from 'react-router';

function Home() {

    const navigate = useNavigate();
    
  return (
    <>
        <div onClick={() => navigate('/mypage/profile')}>마이페이지</div>
        <div onClick={() => navigate('/result')}>검색결과</div>
    </>
  );
}

export default Home;
