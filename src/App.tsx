import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { useTheme } from "./context/theme-context";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Home } from "./pages/Home/Home";
import { HomeStats } from "./components/HomeStats/HomeStats";
import { Footer } from "./components/Footer/Footer";
import { RequiresAuth } from "./components/RequiresAuth/RequiresAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { isDark } = useTheme();
  return (
    <div className="App" data-theme={isDark && "dark"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        >
          <Route path="" element={<HomeStats />} />
          <Route path="archive" element={<p>Archive</p>} />
          <Route path="trash" element={<p>Trash</p>} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
