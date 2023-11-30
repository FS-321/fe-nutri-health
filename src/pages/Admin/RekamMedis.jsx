import LayoutAdmin from "../../components/layouts/Admin/LayoutAdmin";
import Filter from "../../components/Filter/Filter";
import TableRMAdmin from "../../components/Table/TableRMAdmin";

import Pagination from "../../components/Pagnation/Pagination";
import { MdOutlineDataThresholding } from "react-icons/md";
import { BiPlus, BiPrinter } from "react-icons/bi";
import { Link, Outlet, useLocation } from "react-router-dom";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const RekamMedis = () => {
  const location = useLocation();
  const isLocation = location.pathname === "/data/rekammedis";

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <LayoutAdmin>
      {isLocation ? (
        <>
          <div className="flex items-center justify-between">
            <h1 className="flex items-center text-hijau text-3xl font-semibold gap-2">
              <MdOutlineDataThresholding size={40} />
              Data Rekam Medis
            </h1>
            <div className="flex gap-1">
              <Link to={"/data/rekammedis/tambah"}>
                <button className="flex items-center bg-hijautua text-putih p-2 gap-1 rounded-sm hover:bg-success">
                  <BiPlus size={24} /> Tambah Data
                </button>
              </Link>
              <button
                onClick={handlePrint}
                className="flex items-center bg-biru text-putih p-2 gap-1 rounded-sm hover:bg-primary">
                <BiPrinter size={24} /> Cetak Data
              </button>
            </div>
          </div>

          <div className="w-full flex flex-wrap gap-2 bg-base-100 shadow-lg mt-5 rounded-lg">
            <Filter />
            <TableRMAdmin
              head={[
                "No",
                "Tanggal",
                "Pasien",
                "Keluhan",
                "Dokter",
                "Diagnosa",
                "Aksi",
              ]}
              endpoint={"rekammedis"}
              print={componentRef}
            />
            <Pagination />
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </LayoutAdmin>
  );
};

export default RekamMedis;
