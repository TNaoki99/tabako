import React from "react";
import { useNavigate } from "react-router-dom";

export default function TitleScreen() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/initial-setting"); // 初期設定画面に遷移
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col justify-center items-center text-center">
      {/* ヘッダー部分 */}
      <header className="absolute top-0 left-0 w-full bg-blue-500 text-white py-4 shadow-md">
        <h1 className="text-3xl font-bold">損煙 Son-en</h1>
      </header>

      {/* アプリ説明 */}
      <main className="flex flex-col justify-center items-center mt-16 space-y-6">
        <p className="text-lg text-gray-700 mt-20">
          ～自然と禁煙したくなるアプリ～
        </p>

        {/* 始めるボタン */}
        <button
          onClick={handleStart}
          className="bg-blue-500 text-white text-xl font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-600 transition"
        >
          始める
        </button>
      </main>
    </div>
  );
}
