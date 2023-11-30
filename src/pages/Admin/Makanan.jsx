import { MdFastfood } from "react-icons/md";
import { BiPlus, BiPrinter } from "react-icons/bi";
import { Link, Outlet, useLocation } from "react-router-dom";

import LayoutAdmin from "../../components/layouts/Admin/LayoutAdmin";
import Filter from "../../components/Filter/Filter";
import Table from "../../components/Table/Table";
import Pagination from "../../components/Pagnation/Pagination";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Makanan = () => {
  const location = useLocation();
  const isLocation = location.pathname === "/makanan";

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
              <MdFastfood size={40} /> Makanan
            </h1>
            <div className="flex gap-1">
              <Link to={"/makanan/tambah"}>
                <button className="flex items-center bg-hijautua text-putih p-2 gap-1 rounded-sm hover:bg-success">
                  <BiPlus size={24} /> Tambah Data
                </button>
              </Link>
              <button
                onClick={handlePrint}
                className="flex items-center bg-biru text-putih p-2 gap-1 rounded-sm hover:bg-primary"
              >
                <BiPrinter size={24} /> Cetak Data
              </button>
            </div>
          </div>

          <div className="w-full flex flex-wrap gap-2 bg-base-100 shadow-lg mt-5 rounded-lg">
            <Filter />
            <Table
              head={["No", "Makanan", "Energi", "Karbohidrat", "Lemak", "Aksi"]}
              endpoint={"makanan"}
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

export default Makanan;
