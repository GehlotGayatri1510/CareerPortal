// components/Step3.jsx
import axios from "axios";

export default function Step3({ setSuccess }) {

  const handlePayment = async () => {
    const { data } = await axios.post("http://localhost:5000/create-order");

    const options = {
      key: "rzp_test_SmA82EMZ8ESYj8",
      amount: data.amount,
      currency: "INR",
      name: "Career Portal",
      order_id: data.id,

      handler: function (response) {
        setSuccess(true);
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    // <div>
    //   <h2>Payment</h2>
    //   <button onClick={handlePayment}>Pay ₹799</button>
    // </div>

    <div className="payment-card">
  <h3>Career Counselling</h3>
  <p className="price">₹799</p>
  <button onClick={handlePayment}>Pay Now</button>
</div>
  );
}