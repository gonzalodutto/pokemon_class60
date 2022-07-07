import "./App.css";
import { Route, Routes } from "react-router-dom";
// import DiscoverPage from "./pages/DiscoverPage";
// import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <h1>Pokemon app</h1>
      <NavBar />
      <Routes>
        {/* <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
