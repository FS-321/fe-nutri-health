import React, { useState } from "react";
import { MdFastfood, MdInfoOutline } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import api from "../../api";
>>>>>>> 0fc24b5876b2bab1bf39f837613b82d21f78f342

import Modal from "../Modal/Modal";

const FormMakanan = ({ action }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const isLocation = location.pathname === "/makanan/tambah";

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    nama: "",
    energi: null,
    protein: null,
    lemak: null,
    karbohidrat: null,
  });

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const addDataMakanan = async () => {
    if (
      !data.energi ||
      !data.karbohidrat ||
      !data.lemak ||
      !data.nama ||
      !data.protein
    ) {
      return setError(true);
    }

    try {
      await api.post("/makanan", {
        nama_makanan: data.nama,
        energi: data.energi,
        protein: data.protein,
        lemak: data.lemak,
        karbohidrat: data.karbohidrat,
      });

      navigate("/makanan", { replace: true });

      setData({
        nama: "",
        energi: 0,
        protein: 0,
        lemak: 0,
        karbohidrat: 0,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchById = async () => {
    try {
      const { data } = await api.get(`/makanan/${id}`);

      setData({
        nama: data.nama_makanan,
        energi: data.energi,
        protein: data.protein,
        lemak: data.lemak,
        karbohidrat: data.karbohidrat,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editDataMakanan = async () => {
    try {
      await api.put(`/makanan/${id}`, {
        nama_makanan: data.nama,
        energi: data.energi,
        protein: data.protein,
        lemak: data.lemak,
        karbohidrat: data.karbohidrat,
      });
      navigate("/makanan");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchById();
  }, [id]);

  return (
    <>
      <div className="flex flex-col justify-between">
        <h1 className="flex items-center text-hijau text-3xl font-semibold gap-2">
          <MdFastfood size={40} /> Makanan
        </h1>
        <p className="text-abu ms-12">{action} Data Makanan</p>
      </div>
      <div className="w-full flex flex-wrap gap-2 bg-base-100 shadow-lg mt-5 rounded-lg p-5">
        {error && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              onClick={() => setError(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Failed! Data not null</span>
          </div>
        )}
        <div className="w-full flex flex-col gap-2">
          <label className="text-hijau text-xl font-semibold">
            Nama Makanan
          </label>
          <input
            type="text"
            name="nama"
            placeholder="Masukkan makanan"
            className="input input-bordered w-full"
            onChange={handleOnChange}
            value={data?.nama}
          />
        </div>
        <div className="w-full flex gap-5">
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">Energi</label>
            <input
              type="number"
              name="energi"
              placeholder="Masukkan energi"
              className="input input-bordered w-full"
              onChange={handleOnChange}
              value={data?.energi}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">Protein</label>
            <input
              type="number"
              name="protein"
              placeholder="Masukkan protein"
              className="input input-bordered w-full"
              onChange={handleOnChange}
              value={data?.protein}
            />
          </div>
        </div>
        <div className="w-full flex gap-5">
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">Lemak</label>
            <input
              type="number"
              name="lemak"
              placeholder="Masukkan lemak"
              className="input input-bordered w-full"
              onChange={handleOnChange}
              value={data?.lemak}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">
              Karbohidrat
            </label>
            <input
              type="number"
              name="karbohidrat"
              placeholder="Masukkan karbohidrat"
              className="input input-bordered w-full"
              onChange={handleOnChange}
              value={data?.karbohidrat}
            />
          </div>
        </div>

        <div className="w-full flex justify-between mt-5 gap-5">
          <Link to={"/makanan"} className="w-full">
            <button className="btn btn-outline text-hijau w-full rounded-full text-lg hover:bg-hijau hover:border-hijau">
              BATAL
            </button>
          </Link>
          <Link className="w-full" onClick={() => setOpen(true)}>
            <button className="btn bg-hijau text-putih btn-success w-full rounded-full text-lg">
              SIMPAN
            </button>
          </Link>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-96">
          <MdInfoOutline size={70} className="mx-auto text-primary" />
          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-black text-abu">
              Confirm {isLocation ? "Add" : "Edit"}
            </h3>
            <p className="text-sm text-abu">
              Yakin ingin {isLocation ? "tambah" : "ubah"} data?
            </p>
          </div>
          <div className="flex justify-between">
            <button
              className="btn btn-primary w-[48%] text-putih text-bold"
              onClick={() =>
                isLocation ? addDataMakanan() : editDataMakanan()
              }
            >
              Ya
            </button>
            <button
              className="btn bg-light w-[48%] text-abu text-bold"
              onClick={() => setOpen(false)}
            >
              Batal
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

FormMakanan.propTypes = {
  action: PropTypes.string.isRequired,
};

export default FormMakanan;
