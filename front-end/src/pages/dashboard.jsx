import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">🍃 Dashboard</h2>

            {/* Impact Counter */}
            <div className="impact-container">
                <div className="impact-card">
                    <h3>🍽 Meals Saved</h3>
                    <p>1240</p>
                </div>
                <div className="impact-card">
                    <h3>🥕 Kg Rescued</h3>
                    <p>520 kg</p>
                </div>
                <div className="impact-card">
                    <h3>🌍 CO₂ Prevented</h3>
                    <p>310 kg</p>
                </div>
                <div className="impact-card">
                    <h3>🚚 Active Pickups</h3>
                    <p>18</p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="dashboard-buttons">
                <button className="primary-btn" onClick={() => navigate("/donate")}>
                    Donate Food
                </button>
                <button className="secondary-btn" onClick={() => navigate("/pickup")}>
                    Pickup Food
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
