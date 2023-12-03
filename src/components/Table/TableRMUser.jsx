import React from "react";

const TableRMUser = ({ head, data }) => {
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
              <td>{item.nama_makanan}</td>
              <td>{item.energi}</td>
              <td>{item.protein}</td>
              <td>{item.lemak}</td>
              <td>{item.karbohidrat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRMUser;
