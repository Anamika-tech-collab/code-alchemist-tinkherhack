import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import Donate from "./pages/donate";
import Pickup from "./pages/pickup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/pickup" element={<Pickup />} />
      </Routes>
    </Router>
  );
}

export default App;
