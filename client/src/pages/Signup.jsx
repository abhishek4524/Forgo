import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save user in localStorage (temporary auth system)
    const user = {
      name: formData.name,
      email: formData.email,
      level: 1,
      netWorth: 128754,
    };

    localStorage.setItem("fogroUser", JSON.stringify(user));

    // Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-[#03bafc]/20 via-white to-[#dff3ff] overflow-hidden px-6">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md relative">

        <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">
          Create Your Financial Identity
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <Input label="Full Name" name="name" type="text" value={formData.name} onChange={handleChange} />
          <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
          <Input label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
          <Input label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />

          <button
            type="submit"
            className="w-full bg-linear-to-r from-[#03bafc] to-[#0b64ff] text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-md"
          >
            🚀 Enter Fogro
          </button>

        </form>

        <p className="text-sm text-center text-slate-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-[#03bafc] font-medium">
            Login
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
