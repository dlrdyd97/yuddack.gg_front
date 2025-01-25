import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Profile from "./pages/mypage/Profile";
import Result from "./pages/result/Result";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./styles/global/main.css";
import RegisterCard from "./pages/register/RegisterCard";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage/profile" element={<Profile />} />
          <Route path="/result" element={<Result />} />
          <Route path="/registerCard" element={<RegisterCard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
