import { BiSolidTrash } from "react-icons/bi";

import Modal from "../Modal/Modal";

const Table = ({ head, open, setOpen, print, children, deleteData }) => {
  return (
    <>
      <div ref={print} className="w-full overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-hijau text-putih text-[16px]">
            <tr>
              {head.map((item, i) => (
                <th key={i}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-abu">{children}</tbody>
        </table>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-96">
          <BiSolidTrash size={70} className="mx-auto text-merah" />
          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-black text-abu">Confirm Delete</h3>
            <p className="text-sm text-abu">Yakin ingin hapus data?</p>
          </div>
          <div className="flex justify-between">
            <button
              className="btn btn-error w-[48%] text-putih text-bold"
              onClick={() => deleteData()}
            >
              Hapus
            </button>
            <button
              className="btn bg-light w-[48%] text-abu text-bold"
              onClick={() => setOpen(false)}
            >
              Batal
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Table;
