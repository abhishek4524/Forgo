import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("fogroUser");

    if (!storedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.email !== formData.email) {
      setError("Email not found.");
      return;
    }

    // Since we didn’t store password in signup (for demo simplicity)
    // Assume login successful if email matches
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-[#03bafc]/20 via-white to-[#dff3ff] overflow-hidden px-6">

      {/* Ambient Glow Background */}
      <div className="absolute -top-40 -left-20 w-96 h-96 bg-[#03bafc]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md relative">

        <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">
          Welcome Back 👋
        </h2>

        {error && (
          <div className="mb-4 text-sm text-red-500 bg-red-50 p-2 rounded-lg text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-linear-to-r from-[#03bafc] to-[#0b64ff] text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-md"
          >
            🚀 Enter Dashboard
          </button>
        </form>

        <p className="text-sm text-center text-slate-500 mt-6">
          Don't have an account?{" "}
          <a href="/signup" className="text-[#03bafc] font-medium">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

function Input({ label, name, type, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-600 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03bafc]"
      />
    </div>
  );
}
