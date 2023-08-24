import PropTypes from "prop-types";

function CustomModal({ show, title, desc, onClose }) {
  CustomModal.propTypes = {
    show: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 w-full h-full bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative w-96 p-4 bg-white rounded-md shadow-lg">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{desc}</p>
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 text-white bg-blue-600 rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomModal;
