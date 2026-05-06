// components/Step2.jsx
import { useState } from "react";

const SERVICE_FEE = 799;

export default function Step2({ setStep, formData, setFormData }) {
  const [screen, setScreen] = useState("details");

  const handleVerify = () => {
    if (!formData.fullName || !formData.city || !formData.email) {
      alert("Please fill all required student details.");
      return;
    }
    setScreen("registration");
  };

  const handleProceedPayment = () => {
    if (!formData.service || !formData.dateOfBirth || !formData.slot || !formData.address) {
      alert("Please complete registration details to continue.");
      return;
    }
    setStep(3);
  };

  return (
    <div className="card">
      <p className="step-label">STEP 02 OF 03</p>
      {screen === "details" ? (
        <>
          <h2 className="card-title">Student Details</h2>

          <div className="form-grid">
            <div>
              <label className="input-label" htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                className="text-input"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div>
              <label className="input-label" htmlFor="mobileView">Mobile Number</label>
              <input id="mobileView" className="text-input" value={formData.mobile} readOnly />
            </div>

            <div>
              <label className="input-label" htmlFor="city">City</label>
              <input
                id="city"
                className="text-input"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </div>

            <div>
              <label className="input-label" htmlFor="email">Email ID</label>
              <input
                id="email"
                className="text-input"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <button type="button" className="primary-btn" onClick={handleVerify}>
            Next →
          </button>
        </>
      ) : (
        <>
          <h2 className="card-title">Student Registration</h2>

          <div className="mini-details-box">
            <div>
              <span>Full Name</span>
              <p>{formData.fullName || "John Doe"}</p>
            </div>
            <div>
              <span>Date / Class</span>
              <p>{formData.dateOfBirth || "Class 9 - Science"}</p>
            </div>
            <div>
              <span>Registration ID</span>
              <p>CR-{formData.mobile || "0000000000"}</p>
            </div>
          </div>

          <div className="form-grid single-col">
            <div>
              <label className="input-label" htmlFor="service">Selected Service</label>
              <select
                id="service"
                className="text-input"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="Career Counselling">Career Counselling</option>
                <option value="Scholarship Test">Scholarship Test</option>
              </select>
            </div>
            <div>
              <label className="input-label" htmlFor="dob">Select Date of Birth</label>
              <input
                id="dob"
                type="date"
                className="text-input"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
              />
            </div>
            <div>
              <label className="input-label" htmlFor="slot">Select Slot</label>
              <input
                id="slot"
                className="text-input"
                placeholder="e.g. 9 AM to 2 PM"
                value={formData.slot}
                onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
              />
            </div>
            <div>
              <label className="input-label" htmlFor="address">Complete Address</label>
              <input
                id="address"
                className="text-input"
                placeholder="Enter complete address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
          </div>

          <div className="amount-row">
            <div>
              <span>CAREER DETAILS</span>
              <p>{formData.service} Fee</p>
            </div>
            <strong>₹{SERVICE_FEE}</strong>
          </div>

          <button type="button" className="primary-btn" onClick={handleProceedPayment}>
            Proceed to Pay →
          </button>
        </>
      )}
    </div>
  );
}