import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { useTheme } from "./context/theme-context";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Home } from "./pages/Home/Home";
import { HomeStats } from "./components/HomeStats/HomeStats";
import { Footer } from "./components/Footer/Footer";

function App() {
  const { isDark } = useTheme();
  return (
    <div className="App" data-theme={isDark && "dark"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />}>
          <Route path="" element={<HomeStats/>} />
          <Route path="archive" element={<p>Archive</p>} />
          <Route path="trash" element={<p>Trash</p>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
