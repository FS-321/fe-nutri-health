import { useState } from "react";
import { MdInfoOutline, MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

import Modal from "../Modal/Modal";

const FormProfile = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const jenisKelamin = e.target.jenisKelamin.value;
    const email = e.target.email.value;
    const notelp = e.target.notelp.value;
    const alamat = e.target.alamat.value;

    console.log({ firstname, lastname, jenisKelamin, email, notelp, alamat });
  };

  return (
    <>
      <div className="flex flex-col justify-between">
        <h1 className="flex items-center text-hijau text-3xl font-semibold gap-2">
          <MdPerson size={40} /> Profile
        </h1>
        <p className="text-abu ms-12">Edit Data user</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-wrap gap-2 bg-base-100 shadow-lg mt-5 rounded-lg p-5">
          <div className="w-full flex gap-5">
            <div className="w-full flex flex-col gap-2">
              <label className="text-hijau text-xl font-semibold">
                Nama Depan
              </label>
              <input
                type="text"
                name="firstname"
                placeholder="Masukkan nama depan"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-hijau text-xl font-semibold">
                Nama Belakang
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="Masukkan nama belakang"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="w-full flex gap-5">
            <div className="w-full flex flex-col gap-2">
              <label className="text-hijau text-xl font-semibold">
                Jenis Kelamin
              </label>
              <select name="jenisKelamin" className="select w-full">
                <option disabled selected value="">
                  Pilih jenis kelamin
                </option>
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-hijau text-xl font-semibold">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Masukkan email"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="w-full flex gap-5">
            <div className="w-full flex flex-col gap-2">
              <label className="text-hijau text-xl font-semibold">
                No Telepon
              </label>
              <input
                type="number"
                name="notelp"
                placeholder="Masukkan nomor"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-hijau text-xl font-semibold">Alamat</label>
              <input
                type="text"
                name="alamat"
                placeholder="Masukkan alamat"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="w-full flex justify-between mt-5 gap-5">
            <Link to={`/users/${1}/profile`} className="w-full">
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
              <h3 className="text-lg font-black text-abu">Confirm Edit</h3>
              <p className="text-sm text-abu">Yakin ingin ubah profile?</p>
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="btn btn-primary w-[48%] text-putih text-bold"
              >
                Simpan
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
      </form>
    </>
  );
};

export default FormProfile;
