import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Placeholder for authentication
    // For hackathon demo, just navigate to Dashboard
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">🍃 FoodLoop Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="input-field"
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field"
        />

        <button className="primary-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
