import { Route, Routes } from 'react-router';
import Home from './pages/home/Home';
import Profile from './pages/mypage/Profile';
import Result from './pages/result/Result';
import './styles/global/main.css';

function App() {
  return (
<Routes>
<Route path='/' element={<Home />} />
<Route path='/mypage/profile' element={<Profile />} />
<Route path='/result' element={<Result />} />
</Routes>
  );
}

export default App;
