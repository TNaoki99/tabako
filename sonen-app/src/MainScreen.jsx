import React from "react";
import { useNavigate } from "react-router-dom";
import { Settings } from "lucide-react";

export default function MainScreen() {
  const navigate = useNavigate();

  const handleReSetting = () => {
    navigate("/resetting"); // ✅ 再設定画面へ遷移
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 relative flex flex-col items-center justify-center">
      {/* ヘッダー */}
      <header className="absolute top-0 left-0 w-full bg-blue-500 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">損煙 Son-en</h1>
        <button onClick={handleReSetting} className="p-2 hover:opacity-80">
          <Settings size={28} />
        </button>
      </header>

      {/* メインコンテンツ */}
      <div className="mt-20 text-center">
        <div className="text-lg text-gray-700">残り金額：¥12,000</div>
        <button
          className="bg-red-500 text-white px-6 py-3 mt-6 rounded-full shadow hover:bg-red-600"
          onClick={() => alert("禁煙開始画面に遷移")}
        >
          禁煙する
        </button>
      </div>
    </div>
  );
}

