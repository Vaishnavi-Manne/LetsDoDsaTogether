import './CompartmentButton.css';

const CompartmentButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="compartment-btn flex flex-col items-center justify-center h-50 border rounded-md px-3 py-2 transition"
  >
    <span className="text-xs">{label.toUpperCase()}</span>
  </button>
);

export default CompartmentButton;