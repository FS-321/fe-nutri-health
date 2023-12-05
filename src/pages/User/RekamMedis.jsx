import { useEffect, useState } from "react";
import { MdOutlineDataThresholding } from "react-icons/md";
import api from "../../api";

import LayoutUser from "../../components/layouts/User/LayoutUser";
import Filter from "../../components/Filter/Filter";
import Pagination from "../../components/Pagnation/Pagination";
import TableRMUser from "../../components/Table/TableRMUser";

const RekamMedis = () => {
  const [data, setData] = useState([]);
  const [namaDokter, setNamaDokter] = useState("");

  const fetchDataRM = async () => {
    try {
      const { data } = await api.get(`/rekam-medis`);

      const fetchDokter = data.map(async (item) => {
        const res = await api.get(`dokter/${item.dokter_id}`);
        return res.data;
      });
      const result = await Promise.all(fetchDokter);

      setData(data);
      setNamaDokter(`${result[0].nama_depan} ${result[0].nama_belakang}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataRM();
  }, []);

  return (
    <LayoutUser>
      <h1 className="flex items-center text-hijau text-3xl font-semibold gap-2">
        <MdOutlineDataThresholding size={40} /> Rekam Medis
      </h1>
      <div className="w-full flex flex-wrap gap-2 bg-base-100 shadow-lg mt-5 rounded-lg">
        <Filter />

        <TableRMUser
          head={["No", "Tanggal", "Keluhan", "Dokter", "Diagnosa"]}
          data={data}
          dokter={namaDokter}
        />

        <Pagination />
      </div>
    </LayoutUser>
  );
};

export default RekamMedis;
