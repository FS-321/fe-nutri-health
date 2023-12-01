import React, { useState } from "react";
import { MdFastfood, MdInfoOutline } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import api from "../../api";

import Modal from "../Modal/Modal";

const FormMakanan = ({ action }) => {
  const location = useLocation();
  const isLocation = location.pathname === "/makanan/tambah";

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    title: "",
    price: "",
    rating: "",
    stock: "",
    discountPercentage: "",
  });

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const addDataMakanan = async () => {
    try {
      const res = await api.get("/products/add", data);
      setData({
        title: "",
        price: "",
        rating: "",
        stock: "",
        discountPercentage: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between">
        <h1 className="flex items-center text-hijau text-3xl font-semibold gap-2">
          <MdFastfood size={40} /> Makanan
        </h1>
        <p className="text-abu ms-12">{action} Data Makanan</p>
      </div>
      <div className="w-full flex flex-wrap gap-2 bg-base-100 shadow-lg mt-5 rounded-lg p-5">
        <div className="w-full flex flex-col gap-2">
          <label className="text-hijau text-xl font-semibold">
            Nama Makanan
          </label>
          <input
            type="text"
            name="title"
            placeholder="Masukkan makanan"
            className="input input-bordered w-full"
            onChange={handleOnChange}
          />
        </div>
        <div className="w-full flex gap-5">
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">Energi</label>
            <input
              type="text"
              name="price"
              placeholder="Masukkan energi"
              className="input input-bordered w-full"
              onChange={handleOnChange}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">Protein</label>
            <input
              type="text"
              name="rating"
              placeholder="Masukkan protein"
              className="input input-bordered w-full"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="w-full flex gap-5">
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">Lemak</label>
            <input
              type="text"
              name="stock"
              placeholder="Masukkan energi"
              className="input input-bordered w-full"
              onChange={handleOnChange}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">
              Karbohidrat
            </label>
            <input
              type="text"
              name="discountPercentage"
              placeholder="Masukkan protein"
              className="input input-bordered w-full"
              onChange={handleOnChange}
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
              onClick={() => addDataMakanan()}
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

export default FormMakanan;