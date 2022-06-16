import "./App.css";
import {
  Navbar,
  HomeStats,
  Footer,
  RequiresAuth,
  HabitForm,
  LabelsList,
  SingleHabit,
  HabitEditForm,
  DeletedHabits,
  AllHabits,
} from "./components/index";
import { useTheme } from "./context/theme-context";
import { Routes, Route } from "react-router-dom";
import { Home, LandingPage, Page404 } from "./pages/index";
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
          <Route path="habits" element={<AllHabits />} />
          <Route path="add" element={<HabitForm />} />
          <Route path="labels" element={<LabelsList />} />
          <Route path="trash" element={<DeletedHabits />} />
          <Route path="habit/:habitId" element={<SingleHabit />} />
          <Route path="habit/edit/:habitId" element={<HabitEditForm />} />
        </Route>
        <Route path="*" element={<Page404 />} />
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
