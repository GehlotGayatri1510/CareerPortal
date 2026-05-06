// pages/Registration.jsx
import { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import SuccessModal from "../components/SuccessModal";

const steps = [
  { id: 1, title: "Student Identity", subtitle: "Enter your unique ID" },
  { id: 2, title: "Verification", subtitle: "Confirm student details" },
  { id: 3, title: "Payment", subtitle: "Complete transaction" },
];

export default function Registration() {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);

  const [formData, setFormData] = useState({
    mobile: "",
    fullName: "",
    email: "",
    city: "",
    service: "Career Counselling",
    dateOfBirth: "",
    slot: "",
    address: "",
    upiId: "",
  });

  return (
    <main className="registration-page">
      <header className="top-nav">
        <div className="brand">CAREER <span>ROCKET</span></div>
        <nav className="top-nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#library">Career Library</a>
          <a href="#services">Our Services</a>
          <a href="#tests">Tests</a>
          <a href="#experts">Experts</a>
          <a href="#courses">Courses</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact us</a>
        </nav>
        <button type="button" className="signup-btn">Sign Up</button>
      </header>

      <section className="portal-layout">
        <aside className="left-panel">
          <h1>
            Career <span>Advantage</span> <br />
            Portal
          </h1>
          <p className="left-tagline">Guidance • Scholarship • Success</p>

          <div className="stepper">
            {steps.map((item) => {
              const isActive = step === item.id;
              const isDone = step > item.id;
              return (
                <div className="step-item" key={item.id}>
                  <div className={`step-circle ${isActive ? "active" : ""} ${isDone ? "done" : ""}`}>
                    {item.id}
                  </div>
                  <div className="step-copy">
                    <p>{item.title}</p>
                    <span>{item.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="info-card">
            <p>Ensure you have your 10-digit number ready. Verification takes less than 3 seconds.</p>
          </div>
        </aside>

        <section className="right-panel">
          {step === 1 && (
            <Step1 setStep={setStep} formData={formData} setFormData={setFormData} />
          )}
          {step === 2 && (
            <Step2 setStep={setStep} formData={formData} setFormData={setFormData} />
          )}
          {step === 3 && (
            <Step3
              formData={formData}
              setFormData={setFormData}
              setSuccess={setSuccess}
              setProcessing={setProcessing}
              processing={processing}
            />
          )}
        </section>
      </section>

      <SuccessModal show={success} onClose={() => setSuccess(false)} />
    </main>
  );
}


