import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import PlayerDisplay from "./components/PlayerDisplay";

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = (token: string) => {
    sessionStorage.setItem("token", token);
    setToken(token);
  };
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setToken(null);
  };
   // Effect to check sessionStorage for a token on component mount
   useEffect(() => {
    const savedToken = sessionStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);  // Set token from sessionStorage if it exists
    }
  }, []);
  return (
    <div className="App">
      {token ? (
        <PlayerDisplay token={token} handleLogout={handleLogout} loading={loading} 
        setLoading={setLoading}/>
      ) : (
        <Login onLogin={handleLogin} loading={loading} setLoading={setLoading}/>
      )}
    </div>
  );
};

export default App;
