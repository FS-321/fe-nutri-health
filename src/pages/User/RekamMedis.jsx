import { MdOutlineDataThresholding } from "react-icons/md";

import LayoutUser from "../../components/layouts/User/LayoutUser";
import TableRMUser from "../../components/Table/TableRMUser";
import Filter from "../../components/Filter/Filter";
import Pagination from "../../components/Pagnation/Pagination";

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
          endpoint={"makanan"}
        />
        <Pagination />
      </div>
    </LayoutUser>
  );
};

export default RekamMedis;
