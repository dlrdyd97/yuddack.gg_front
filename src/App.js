import { Route, Routes } from 'react-router';
import Home from './pages/home/Home';
import Profile from './pages/mypage/Profile';

function App() {
  return (
<Routes>
<Route path='/' element={<Home />} />
<Route path='/mypage/profile' element={<Profile />} />
</Routes>
  );
}

export default App;