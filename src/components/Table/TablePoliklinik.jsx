import PropTypes from "prop-types";
import { BiSolidPencil, BiSolidTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

const TablePoliklinik = ({ head, endpoint }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table table-zebra">
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
            <td>
              <Link
                to={`/${endpoint}/edit/${1}`}
                className="btn btn-warning p-1 h-8 min-h-0 me-1 text-putih">
                <BiSolidPencil size={20} />
              </Link>
              <button className="btn btn-error p-1 h-8 min-h-0 text-putih">
                <BiSolidTrash size={20} />
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>
              <button className="btn btn-warning p-1 h-8 min-h-0 me-1 text-putih">
                <BiSolidPencil size={20} />
              </button>
              <button className="btn btn-error p-1 h-8 min-h-0 text-putih">
                <BiSolidTrash size={20} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

TablePoliklinik.propTypes = {
  head: PropTypes.array.isRequired,
  endpoint: PropTypes.string.isRequired,
};

export default TablePoliklinik;
