import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-[#03bafc]/20 via-white to-[#dff3ff] overflow-hidden">
            
            {/* Ambient Glow Background */}
            <div className="absolute -top-40 -left-20 w-96 h-96 bg-[#03bafc]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

            <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">
                    Login to Continue
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03bafc]"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03bafc]"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-linear-to-r from-[#03bafc] to-[#0b64ff] text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
                    >
                        Login
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
};

export default Login;
