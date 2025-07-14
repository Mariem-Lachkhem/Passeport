import React, { useRef, useState } from "react";


const Login = ({ credentials }) => {
  const idRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const inputId = parseInt(idRef.current.value, 10);
    const inputPassword = passwordRef.current.value;

    const found = credentials.find(
      (user) => user.id === inputId && user.password === inputPassword
    );

    if (found) {
      alert("Login successful!");
      setError("");
    } else {
      setError("Invalid Opportunity ID or Password");
    }
  };

  return (
    <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl flex flex-col space-y-6">
      <div className="flex items-center justify-center space-x-2 mb-4">
      <h1 className="text-xl font-bold text-indigo-800 text-center">
        EP Login
      </h1>
      </div>
      <form onSubmit={handleLogin} className="flex flex-col space-y-4">
        <input
  ref={idRef}
  type="text"
  inputMode="numeric"
  pattern="[0-9]*"
  placeholder="Application ID"
  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
  required
/>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <button
          type="submit"
          className="bg-gray-700 text-indigo-500 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>
      {error && (
        <div className="text-red-600 text-center font-semibold">{error}</div>
      )}
    </div>
  );
};

export default Login;
