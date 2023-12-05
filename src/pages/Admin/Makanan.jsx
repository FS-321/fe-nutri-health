import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { MdFastfood } from "react-icons/md";
import {
  BiPlus,
  BiPrinter,
  BiRefresh,
  BiSolidPencil,
  BiSolidTrash,
} from "react-icons/bi";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import api from "../../api/index";
import { toast } from "react-toastify";

import LayoutAdmin from "../../components/layouts/Admin/LayoutAdmin";
import Filter from "../../components/Filter/Filter";
import Table from "../../components/Table/Table";
import Pagination from "../../components/Pagnation/Pagination";
import { btnNotif } from "../../utils/toastNotif";

const Makanan = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLocation = location.pathname === "/makanan";

  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [id, setId] = useState(0);

  const handleDelete = (idDelete) => {
    setOpen(true);
    setId(idDelete);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const fetchDataMakanan = async () => {
    try {
      const { data } = await api.get(`/makanan`, {
        pages: 1,
        limit: 1,
      });

      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchData = async () => {
    try {
      const { data } = await api.get(`/cari/makanan?keyword=${search}`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async () => {
    try {
      await api.delete(`makanan/${id}`);
      fetchDataMakanan();

      setOpen(false);
      btnNotif("Delete makanan berhasil", toast.error);
      navigate("/makanan");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataMakanan();
  }, []);

  useEffect(() => {
    searchData();
  }, [search]);

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
              <button
                onClick={fetchDataMakanan}
                className="flex items-center bg-birutua text-putih p-2 gap-1 rounded-sm hover:bg-primary"
              >
                <BiRefresh size={24} /> Refresh
              </button>
            </div>
          </div>

          <div className="w-full flex flex-wrap gap-2 bg-base-100 shadow-lg mt-5 rounded-lg">
            <Filter setSearch={setSearch} />

            <Table
              head={[
                "No",
                "Makanan",
                "Energi",
                "Protein",
                "Lemak",
                "Karbohidrat",
                "Aksi",
              ]}
              open={open}
              setOpen={setOpen}
              print={componentRef}
              data={data}
              deleteData={deleteData}
            >
              {data?.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.nama_makanan}</td>
                  <td>{item.energi}</td>
                  <td>{item.protein}</td>
                  <td>{item.lemak}</td>
                  <td>{item.karbohidrat}</td>
                  <td>
                    <Link
                      to={`/makanan/edit/${item.makanan_id}`}
                      className="btn btn-warning p-1 h-8 min-h-0 me-1 text-putih"
                    >
                      <BiSolidPencil size={20} />
                    </Link>
                    <Link
                      onClick={() => handleDelete(item.makanan_id)}
                      className="btn btn-error p-1 h-8 min-h-0 text-putih"
                    >
                      <BiSolidTrash size={20} />
                    </Link>
                  </td>
                </tr>
              ))}
            </Table>

            <Pagination setPage={setPage} />
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </LayoutAdmin>
  );
};

export default Makanan;
