import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TitleScreen from "./TitleScreen";
import InitialSetting from "./InitialSetting";
import MainScreen from "./MainScreen";
import ReSettingScreen from "./ReSettingScreen"; // ✅ これがあること

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TitleScreen />} />
        <Route path="/initial-setting" element={<InitialSetting />} />
        <Route path="/main" element={<MainScreen />} />
        <Route path="/resetting" element={<ReSettingScreen />} /> {/* ✅ 再設定画面ルート */}
      </Routes>
    </Router>
  );
}

export default App;
