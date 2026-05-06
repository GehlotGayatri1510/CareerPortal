// components/Step1.jsx
export default function Step1({ setStep, formData, setFormData }) {

  const handleNext = () => {
    if (formData.mobile.length !== 10) {
      alert("Invalid mobile");
      return;
    }
    setStep(2);
  };

  return (
    <div>
      <h2>Enter Mobile</h2>

      <input
        placeholder="Mobile Number"
        onChange={(e) =>
          setFormData({ ...formData, mobile: e.target.value })
        }
      />

      <button onClick={handleNext}>Verify</button>
    </div>
  );
}