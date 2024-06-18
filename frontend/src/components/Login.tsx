import React, { useState } from "react";
interface LoginProps {
  onLogin: (token: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
const Login: React.FC<LoginProps> = ({ onLogin, loading, setLoading }) => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `mutation { login(mobile: "${mobile}", password: "${password}") { token } }`,
        }),
      });

      const result = await response.json();
      if (result.data.login.token) {
        onLogin(result.data.login.token);
      } else {
        // Handle errors here (e.g., show an error message to the user)
        console.error("Login failed:", result.errors);
      }
    } catch (error) {
      // Handle network or other errors here
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center py-4">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            FntcFootball
          </h1>
        </div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Login
        </h2>
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile"
            disabled={loading} // Disable input during loading
          />
        </div>
        <div className="mb-6">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            disabled={loading} // Disable input during loading
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-lg"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
