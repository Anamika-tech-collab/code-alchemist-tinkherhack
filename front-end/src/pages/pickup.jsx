const Pickup = () => {
  const handleAccept = (foodName) => {
    alert(`You accepted pickup: ${foodName}`);
  };

  const pickups = [
    { name: "Rice & Curry", qty: "5 kg", urgency: "High" },
    { name: "Bread", qty: "3 kg", urgency: "Medium" },
    { name: "Salad", qty: "2 kg", urgency: "Low" },
  ];

  return (
    <div className="pickup-container">
      <h2 className="page-title">🚚 Available Pickups</h2>

      {pickups.map((item, index) => (
        <div key={index} className="pickup-card">
          <h3>{item.name}</h3>
          <p>Quantity: {item.qty}</p>
          <p className={`urgency-${item.urgency.toLowerCase()}`}>Urgency: {item.urgency}</p>
          <button className="primary-btn" onClick={() => handleAccept(item.name)}>
            Accept Pickup
          </button>
        </div>
      ))}
    </div>
  );
};

export default Pickup;
