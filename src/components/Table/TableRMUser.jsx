import React from "react";

const TableRMUser = ({ head }) => {
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
          <tr>
            <td>1</td>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <td>Purple</td>
            <td>Purple</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableRMUser;
