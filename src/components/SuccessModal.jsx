// components/SuccessModal.jsx
export default function SuccessModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="success-modal">
        <div className="success-icon">✓</div>
        <h2>Payment Successful</h2>
        <p>
          आपका पेमेंट सफलतापूर्वक पूरा हुआ है। हमारी एक्सपर्ट काउंसलर टीम 24 घंटे के अंदर आपसे संपर्क करेगी।
        </p>
        <p className="help-line">अधिक जानकारी के लिए कॉल करें: 7300023501</p>
        <button type="button" className="primary-btn" onClick={onClose}>Done</button>
        <button type="button" className="outline-btn" onClick={onClose}>Go to Dashboard</button>
        <button type="button" className="link-btn">Download Receipt</button>
      </div>
    </div>
  );
}