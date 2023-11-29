import { useState } from "react";
import { BiSolidPencil, BiSolidTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Modal from "../Modal/Modal";

const TablePasien = ({ head, endpoint }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-hijau text-putih text-[16px]">
            <tr>
              {head.map((item, i) => (
                <th key={i}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-abu">
            <tr>
              <td>1</td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
              <td>Jogja</td>
              <td>
                <Link
                  to={`/data/${endpoint}/edit/${1}`}
                  className="btn btn-warning p-1 h-8 min-h-0 me-1 text-putih">
                  <BiSolidPencil size={20} />
                </Link>
                <Link
                  onClick={() => setOpen(true)}
                  className="btn btn-error p-1 h-8 min-h-0 text-putih">
                  <BiSolidTrash size={20} />
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>Purple</td>
              <td>Bekasi</td>
              <td>
                <Link
                  to={`/data/${endpoint}/edit/${1}`}
                  className="btn btn-warning p-1 h-8 min-h-0 me-1 text-putih">
                  <BiSolidPencil size={20} />
                </Link>
                <Link
                  onClick={() => setOpen(true)}
                  className="btn btn-error p-1 h-8 min-h-0 text-putih">
                  <BiSolidTrash size={20} />
                </Link>
              </td>
            </tr>
          </tbody>
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
            <button className="btn btn-error w-[48%] text-putih text-bold">
              Hapus
            </button>
            <button
              className="btn bg-light w-[48%] text-abu text-bold"
              onClick={() => setOpen(false)}>
              Batal
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

TablePasien.propTypes = {
  head: PropTypes.array.isRequired,
  endpoint: PropTypes.string.isRequired,
};

export default TablePasien;
