import { MdClose } from "react-icons/md";

const Modal = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onclose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-putih rounded-xl shadow p-6 transition-all 
      ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-abu-400 bg-putih hover:bg-abu-50 hover:text-abu-600"
        >
          <MdClose size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
