import { MdOutlinePeople, MdInfoOutline } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

import Modal from "../Modal/Modal";

const FormDokter = ({ action }) => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const isLocation = location.pathname === "data/dokter/tambah";
  return (
    <>
      <div className="flex flex-col justify-between">
        <h1 className="flex items-center text-hijau text-3xl font-semibold gap-2">
          <MdOutlinePeople size={40} /> Data Dokter
        </h1>
        <p className="text-abu ms-12">{action} Data Dokter</p>
      </div>
      <div className="w-full flex flex-wrap gap-2 bg-base-100 shadow-lg mt-5 rounded-lg p-5">
        <div className="w-full flex flex-col gap-2">
          <label className="text-hijau text-xl font-semibold">Nama Depan</label>
          <input
            type="text"
            placeholder="Masukan Nama Depan"
            className="input input-bordered w-full"
          />
        </div>
        <div className="w-full flex gap-5">
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">
              Nama Belakang
            </label>
            <input
              type="text"
              placeholder="Masukan Nama Belakang"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">
              Spesialis
            </label>
            <input
              type="text"
              placeholder="Pilih Opsi"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="w-full flex gap-5">
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">Email</label>
            <input
              type="text"
              placeholder="Masukkan Email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">No. Telp</label>
            <input
              type="text"
              placeholder="Masukkan No. Telp"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">Alamat</label>
            <input
              type="text"
              placeholder="Masukkan Alamat"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="w-full flex justify-between mt-5 gap-5">
          <Link to={"/data/dokter"} className="w-full">
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
              <button className="btn btn-primary w-[48%] text-putih text-bold">
                Simpan
              </button>
              <button
                className="btn bg-light w-[48%] text-abu text-bold"
                onClick={() => setOpen(false)}>
                Batal
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

FormDokter.propTypes = {
  action: PropTypes.string.isRequired,
};


export default FormDokter;
