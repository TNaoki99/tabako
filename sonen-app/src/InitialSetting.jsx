import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InitialSetting() {
  const [form, setForm] = useState({ cigPerDay: "", pricePerPack: "", salary: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => navigate("/main");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-500 text-white text-2xl font-bold py-3 text-center">
        初期設定
      </header>

      <div className="flex-grow flex flex-col justify-center items-center space-y-6">
        <div className="w-80">
          <label className="block mb-2">一日に吸う本数は？</label>
          <input
            type="number"
            name="cigPerDay"
            value={form.cigPerDay}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="w-80">
          <label className="block mb-2">一箱の金額は？</label>
          <input
            type="number"
            name="pricePerPack"
            value={form.pricePerPack}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="w-80">
          <label className="block mb-2">
            月給は？（入力なしの場合は100万円となります）
          </label>
          <input
            type="number"
            name="salary"
            value={form.salary}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white text-lg px-8 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          決定
        </button>
      </div>
    </div>
  );
}

