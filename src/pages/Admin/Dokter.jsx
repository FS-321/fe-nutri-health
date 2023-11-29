import { MdPerson } from "react-icons/md";
import { BiPlus, BiPrinter } from "react-icons/bi";
import { Link, Outlet, useLocation } from "react-router-dom";

import LayoutAdmin from "../../components/layouts/Admin/LayoutAdmin";
import Filter from "../../components/Filter/Filter";
import TableDokter from "../../components/Table/TableDokter";
import Pagination from "../../components/Pagnation/Pagination";

const Dokter = () => {
  const location = useLocation();
  const isLocation = location.pathname === "/data/dokter";

  return (
    <LayoutAdmin>
      {isLocation ? (
        <>
          <div className="flex items-center justify-between">
            <h1 className="flex items-center text-hijau text-3xl font-semibold gap-2">
              <MdPerson size={40} />
              Data Dokter
            </h1>
            <div className="flex gap-1">
              <Link to={"/data/dokter/tambah"}>
                <button className="flex items-center bg-hijautua text-putih p-2 gap-1 rounded-sm hover:bg-success">
                  <BiPlus size={24} /> Tambah Data
                </button>
              </Link>
              <button className="flex items-center bg-biru text-putih p-2 gap-1 rounded-sm hover:bg-primary">
                <BiPrinter size={24} /> Cetak Data
              </button>
            </div>
          </div>

          <div className="w-full flex flex-wrap gap-2 bg-base-100 shadow-lg mt-5 rounded-lg">
            <Filter />
            <TableDokter
              head={[
                "No",
                "Nama Dokter",
                "Spesialis",
                "Email",
                "Telp",
                "Alamat",
                "Aksi",
              ]}
              endpoint={"dokter"}
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

export default Dokter;
