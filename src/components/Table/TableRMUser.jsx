import React from "react";

const TableRMUser = ({ head, data, dokter }) => {
  return (
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
          {data?.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.tanggal_periksa}</td>
              <td>{item.keluhan}</td>
              <td>{dokter}</td>
              <td>{item.diagnosa || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRMUser;
