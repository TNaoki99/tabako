import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReSettingScreen() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    cigarettesPerDay: "",
    pricePerPack: "",
    cigarettesPerPack: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (/^[0-9]*$/.test(value)) {
      setForm({ ...form, [name]: value });
    }
  };

  const handleComplete = () => {
    alert("再設定を保存しました！");
    navigate("/main"); // ✅ メイン画面に戻る
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      {/* ヘッダー */}
      <header className="w-full bg-blue-300 text-gray-800 py-3 px-4 flex justify-between items-center shadow-md fixed top-0 left-0">
        <h1 className="text-xl font-bold">再設定</h1> {/* ✅ ヘッダー文字を変更 */}
        <button
          onClick={handleComplete}
          className="bg-white text-blue-700 border border-blue-500 rounded px-3 py-1 hover:bg-blue-100 text-sm"
        >
          完了
        </button>
      </header>

      {/* 本文 */}
      <main className="flex flex-col items-center justify-start flex-1 mt-20 space-y-4 px-6">
        {/* 一日に吸う本数 */}
        <div className="w-full max-w-md bg-blue-100 rounded-lg p-3 shadow-sm text-center">
          一日に吸う本数は？
        </div>
        <input
          type="text"
          name="cigarettesPerDay"
          value={form.cigarettesPerDay}
          onChange={handleChange}
          className="w-full max-w-md border p-2 rounded-md text-center shadow-sm"
        />

        {/* 一箱の金額 */}
        <div className="w-full max-w-md bg-blue-100 rounded-lg p-3 shadow-sm text-center">
          一箱の金額は？
        </div>
        <input
          type="text"
          name="pricePerPack"
          value={form.pricePerPack}
          onChange={handleChange}
          className="w-full max-w-md border p-2 rounded-md text-center shadow-sm"
        />

        {/* 一箱の本数 */}
        <div className="w-full max-w-md bg-blue-100 rounded-lg p-3 shadow-sm text-center">
          一箱の本数は？
        </div>
        <input
          type="text"
          name="cigarettesPerPack"
          value={form.cigarettesPerPack}
          onChange={handleChange}
          className="w-full max-w-md border p-2 rounded-md text-center shadow-sm"
        />

        {/* 月給 */}
        <div className="w-full max-w-md bg-blue-100 rounded-lg p-3 shadow-sm text-center leading-snug">
          月給は？<br />
          <span className="text-sm text-gray-700">
            （設定金額を決定のため入力をお願いしています）<br />
            （入力無しの場合は設定金額が100万円となります）
          </span>
        </div>
        <input
          type="text"
          name="salary"
          value={form.salary}
          onChange={handleChange}
          className="w-full max-w-md border p-2 rounded-md text-center shadow-sm"
        />
      </main>
    </div>
  );
}
