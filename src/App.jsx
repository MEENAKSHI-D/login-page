
      import React, { useState } from "react";
      import axios from "axios"
      import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleuser = (e) => {
    setUsername(e.target.value);
   
  };
  const handlepass = (e) =>
  {
    setPassword(e.target.value)
  }

function check(e) {
  e.preventDefault(); 
  axios.post("http://localhost:5000/login", { username, password })
    .then(function (data) {
      if (data.data === true) {
        navigate("/success");
      } else {
        navigate("/fail");
      }
    });
}


  return (
    <div className="flex items-center justify-center min-h-screen bg">
      <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form  method="post" className="space-y-4"  >
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={handleuser}
              placeholder="Enter username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={handlepass}
              placeholder="Enter password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
          type="button"
            onClick={check}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
}

export default App;
