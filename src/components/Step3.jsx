// components/Step3.jsx
import axios from "axios";

const PAYMENT_AMOUNT = 799;

export default function Step3({
  formData,
  setFormData,
  setSuccess,
  setProcessing,
  processing,
}) {
  const loadRazorpayScript = () =>
    new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handlePayment = async () => {
    try {
      setProcessing(true);
      const loaded = await loadRazorpayScript();
      if (!loaded) {
        alert("Unable to load Razorpay right now.");
        return;
      }

      const { data } = await axios.post("http://localhost:5000/create-order", {
        amount: PAYMENT_AMOUNT,
      });

      const options = {
        key: "rzp_test_SmA82EMZ8ESYj8",
        amount: data.amount,
        currency: "INR",
        name: "Career Advantage Portal",
        description: `${formData.service} Fee`,
        order_id: data.id,
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.mobile,
        },
        theme: { color: "#ad2dbf" },
        handler: () => setSuccess(true),
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      alert("Payment initialization failed. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="card">
      <p className="step-label">STEP 03 OF 03</p>
      <h2 className="card-title">Complete Your Payment</h2>

      <div className="fee-summary">
        <div>
          <span>Payment Summary</span>
          <p>{formData.service}</p>
        </div>
        <strong>₹{PAYMENT_AMOUNT}</strong>
      </div>

      <label className="input-label" htmlFor="upiInput">Enter UPI ID</label>
      <div className="upi-row">
        <input
          id="upiInput"
          className="text-input"
          placeholder="example@upi"
          value={formData.upiId}
          onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
        />
        <button type="button" className="ghost-btn">Verify</button>
      </div>

      <div className="pay-options">
        <button type="button" className="pay-chip">GPay</button>
        <button type="button" className="pay-chip">PhonePe</button>
        <button type="button" className="pay-chip">Paytm</button>
      </div>

      <button type="button" className="primary-btn" disabled={processing} onClick={handlePayment}>
        {processing ? "Processing..." : "Pay Now →"}
      </button>

      <div className="trust-row">
        <span>100% Secure Payment</span>
        <span>UPI Integrated</span>
      </div>
    </div>
  );
}