// components/Step1.jsx
export default function Step1({ setStep, formData, setFormData }) {
  const handleNext = () => {
    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    setStep(2);
  };

  return (
    <div className="card">
      <p className="step-label">STEP 01 OF 03</p>
      <h2 className="card-title">Enter Mobile No.</h2>

      <label htmlFor="mobile" className="input-label">MOBILE NO</label>
      <input
        id="mobile"
        className="text-input"
        placeholder="XXXXX XXXXX"
        maxLength={10}
        value={formData.mobile}
        onChange={(e) =>
          setFormData({
            ...formData,
            mobile: e.target.value.replace(/\D/g, ""),
          })
        }
      />

      <p className="hint-text">Check your registration receipt for ID format</p>
      <button type="button" className="primary-btn" onClick={handleNext}>
        Verify Details →
      </button>

      <p className="bottom-note">
        If you are new, install the Career Rocket App. Enter your number to continue quickly.
      </p>
    </div>
  );
}