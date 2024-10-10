import  { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login"; 

function App() {
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} /> {/* Redirecting to Login page */}
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <Dashboard
                activeComponent={activeComponent}
                setActiveComponent={setActiveComponent}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
