// components/SuccessModal.jsx
export default function SuccessModal({ show }) {
  if (!show) return null;

  return (
    // <div style={{
    //   position: "fixed",
    //   top: 0,
    //   left: 0,
    //   width: "100%",
    //   height: "100%",
    //   background: "rgba(0,0,0,0.5)"
    // }}>
    //   <div style={{
    //     background: "white",
    //     padding: 20,
    //     margin: "100px auto",
    //     width: 300
    //   }}>
    //     <h2>Payment Successful</h2>
    //     <button>Go Dashboard</button>
    //   </div>
    // </div>

    <div className="modal-overlay">
  <div className="modal">
    <h2>Payment Successful 🎉</h2>
    <p>Your registration is complete</p>
    <button>Go Dashboard</button>
  </div>
</div>
  );
}