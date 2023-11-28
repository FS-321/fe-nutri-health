import LayoutAdmin from "../components/layouts/Admin/LayoutAdmin";
import { MdOutlinePeople } from "react-icons/md";
import { BiPlus, BiPrinter } from "react-icons/bi";
import Filter from "../components/Fitur/Filter";
import TablePasien from "../components/Table/TablePasien";
import Pagination from "../components/Pagnation/Pagination";
import { Link, Outlet, useLocation } from "react-router-dom";

const Pasien = () => {
  const location = useLocation();
  const isLocation = location.pathname === "/data/pasien";

  return (
    <LayoutAdmin>
      {isLocation ? (
        <>
          <div className="flex items-center justify-between">
            <h1 className="flex items-center text-hijau text-3xl font-semibold gap-2">
              <MdOutlinePeople size={40} /> Pasien
            </h1>
            <div className="flex gap-1">
              <Link to={"/data/pasien/tambah"}>
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
            <TablePasien
              head={[
                "No",
                "Nama Pasien",
                "Jenis Kelamin",
                "Email",
                "Telp",
                "Alamat",
                "Aksi",
              ]}
              endpoint={"pasien"}
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

export default Pasien;
