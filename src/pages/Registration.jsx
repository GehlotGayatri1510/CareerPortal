// pages/Registration.jsx
import { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import SuccessModal from "../components/SuccessModal";
import "../style.css";

export default function Registration() {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    mobile: "",
    name: "",
    email: "",
    city: "",
    service: "",
  });

  return (
    <div className="container">
      <div className="left-panel">
        <div className="panel-top">
          <div className="brand">
            <div className="brand-mark">CR</div>
            <div>
              <p className="brand-label">Career Rocket</p>
              <span className="brand-tag">Career Advantage Portal</span>
            </div>
          </div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Career Library</a>
            <a href="#">Our Services</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="panel-content">
          <h1>Career Advantage Portal</h1>
          <p className="hero-subtitle">Guidance • Scholarship • Success</p>

          <div className="stepper">
            <div className={`step ${step >= 1 ? "active" : ""}`}>
              <div className="step-circle">1</div>
              <div className="step-text">
                <strong>Student Identity</strong>
                <span>Enter your unique ID</span>
              </div>
            </div>

            <div className={`step ${step >= 2 ? "active" : ""}`}>
              <div className="step-circle">2</div>
              <div className="step-text">
                <strong>Verification</strong>
                <span>Confirm student details</span>
              </div>
            </div>

            <div className={`step ${step >= 3 ? "active" : ""}`}>
              <div className="step-circle">3</div>
              <div className="step-text">
                <strong>Payment</strong>
                <span>Complete transaction</span>
              </div>
            </div>
          </div>

          <div className="note-box">
            <p>
              Ensure you have your 10-digit number ready. Verification takes less than 3 seconds.
            </p>
          </div>
        </div>
      </div>

      <div className="right-panel">
        <div className="form-box">
          <div className="form-header">
            <span className="form-step">STEP {step} OF 03</span>
            <h2>
              {step === 1 && "Enter Mobile No."}
              {step === 2 && "Student Details"}
              {step === 3 && "Payment"}
            </h2>
          </div>

          {step === 1 && (
            <Step1 setStep={setStep} formData={formData} setFormData={setFormData} />
          )}

          {step === 2 && (
            <Step2 setStep={setStep} formData={formData} setFormData={setFormData} />
          )}

          {step === 3 && (
            <Step3 setSuccess={setSuccess} />
          )}

          <SuccessModal show={success} />
        </div>
      </div>
    </div>
  );
}


