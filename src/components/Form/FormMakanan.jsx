import React from "react";
import { MdFastfood } from "react-icons/md";
import { Link } from "react-router-dom";

const FormMakanan = ({ action }) => {
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
            placeholder="Masukkan makanan"
            className="input input-bordered w-full"
          />
        </div>
        <div className="w-full flex gap-5">
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">Energi</label>
            <input
              type="text"
              placeholder="Masukkan energi"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">Protein</label>
            <input
              type="text"
              placeholder="Masukkan protein"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="w-full flex gap-5">
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">
              Karbohidrat
            </label>
            <input
              type="text"
              placeholder="Masukkan karbohidrat"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">Lemak</label>
            <input
              type="text"
              placeholder="Masukkan lemak"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="w-full flex justify-between mt-5 gap-5">
          <Link to={"/makanan"} className="w-full">
            <button className="btn btn-outline btn-success w-full rounded-full text-lg">
              BATAL
            </button>
          </Link>
          <Link className="w-full">
            <button className="btn bg-hijau text-putih btn-success w-full rounded-full text-lg">
              SIMPAN
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FormMakanan;
