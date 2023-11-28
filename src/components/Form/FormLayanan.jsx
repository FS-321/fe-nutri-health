import { MdOutlineAccessTimeFilled } from "react-icons/md"
import { Link } from "react-router-dom";

const FormLayanan = ({ action }) => {
  return (
    <>
      <div className="flex flex-col justify-between">
        <h1 className="flex items-center text-hijau text-3xl font-semibold gap-2">
          <MdOutlineAccessTimeFilled size={40} /> Layanan
        </h1>
        <p className="text-abu ms-12">{action} Data Layanan</p>
      </div>
      <div className="w-full flex flex-wrap gap-2 bg-base-100 shadow-lg mt-5 rounded-lg p-5">
        <div className="w-full flex flex-col gap-2">
          <label className="text-hijau text-xl font-semibold">
            Nama Layanan
          </label>
          <input
            type="text"
            placeholder="Masukan Layanan"
            className="input input-bordered w-full"
          />
        </div>
        <div className="w-full flex gap-5">
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">Nama Dokter</label>
            <input
              type="text"
              placeholder="Pilih Opsi "
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">Biaya</label>
            <input
              type="text"
              placeholder="Masukan Biaya"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="w-full flex gap-5">
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">
              Jadwal
            </label>
            <input
              type="text"
              placeholder="Masukkan Jadwal"
              className="input input-bordered w-full"
            />
          </div>
          {/* <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">Lemak</label>
            <input
              type="text"
              placeholder="Masukkan lemak"
              className="input input-bordered w-full"
            />
          </div> */}
        </div>
        <div className="w-full flex justify-between mt-5 gap-5">
          <Link to={"/layanan"} className="w-full">
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
}

export default FormLayanan;