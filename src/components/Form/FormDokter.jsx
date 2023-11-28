import { MdOutlinePeople } from "react-icons/md";
import { Link } from "react-router-dom";

const FormDokter = ({ action }) => {
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

export default FormDokter;
