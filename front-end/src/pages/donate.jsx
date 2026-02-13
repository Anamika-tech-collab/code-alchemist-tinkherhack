const Donate = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Donation submitted!");
  };

  return (
    <div className="donate-container">
      <h2 className="page-title">🍃 Donate Food</h2>

      <form className="donate-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Food Name" className="input-field" required />
        <input type="number" placeholder="Quantity (kg)" className="input-field" required />
        <input type="datetime-local" className="input-field" required />

        <button type="submit" className="primary-btn">Submit Donation</button>
      </form>
    </div>
  );
};

export default Donate;
