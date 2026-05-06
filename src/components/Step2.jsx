// components/Step2.jsx
export default function Step2({ setStep, formData, setFormData }) {

  return (
    <div>
      <h2>Student Details</h2>

      <input
        placeholder="Name"
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <input
        placeholder="City"
        onChange={(e) =>
          setFormData({ ...formData, city: e.target.value })
        }
      />

      <select
        onChange={(e) =>
          setFormData({ ...formData, service: e.target.value })
        }
      >
        <option>Select Service</option>
        <option>Scholarship Test</option>
        <option>Career Counselling</option>
      </select>

      <button onClick={() => setStep(3)}>Next</button>
    </div>
  );
}