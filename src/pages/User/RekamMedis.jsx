import { MdOutlineDataThresholding } from "react-icons/md";

import LayoutUser from "../../components/layouts/User/LayoutUser";
import Filter from "../../components/Filter/Filter";
import Pagination from "../../components/Pagnation/Pagination";
import TableRMUser from "../../components/Table/TableRMUser";

const RekamMedis = () => {
  return (
    <LayoutUser>
      <h1 className="flex items-center text-hijau text-3xl font-semibold gap-2">
        <MdOutlineDataThresholding size={40} /> Rekam Medis
      </h1>
      <div className="w-full flex flex-wrap gap-2 bg-base-100 shadow-lg mt-5 rounded-lg">
        <Filter />

        <TableRMUser
          head={["No", "Tanggal", "Pasien", "Keluhan", "Dokter", "Diagnosa"]}
        >
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
        </TableRMUser>

        <Pagination />
      </div>
    </LayoutUser>
  );
};

export default RekamMedis;
