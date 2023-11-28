import LayoutAdmin from "../components/layouts/Admin/LayoutAdmin";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { BiPlus, BiPrinter } from "react-icons/bi";
import Filter from "../components/Fitur/Filter";
import Pagination from "../components/Pagnation/Pagination";
import { Link, Outlet, useLocation } from "react-router-dom";
import TablePoliklinik from "../components/Table/TablePoliklinik";

const Poliklinik = () => {
  const location = useLocation();
  const isLocation = location.pathname === "/data/poliklinik";

  return (
    <LayoutAdmin>
      {isLocation ? (
        <>
          <div className="flex items-center justify-between">
            <h1 className="flex items-center text-hijau text-3xl font-semibold gap-2">
              <MdOutlineMapsHomeWork size={40} />Data Poliklinik
            </h1>
            <div className="flex gap-1">
              <Link to={"/data/poliklinik/tambah"}>
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
            <TablePoliklinik
              head={[
                "No",
                "Nama Poliklinik",
                "Gedung",
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

export default Poliklinik;
