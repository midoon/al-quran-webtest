import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import SurahDetail from "./page/SurahDetail";

function App() {
  return (
    <Routes>
      <Route path="/" exect element={<Home />} />
      <Route path="/surah-detail/:id" element={<SurahDetail />} />
    </Routes>
  );
}

export default App;
