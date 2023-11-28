import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

const FormProfile = () => {
  return (
    <>
      <div className="flex flex-col justify-between">
        <h1 className="flex items-center text-hijau text-3xl font-semibold gap-2">
          <MdPerson size={40} /> Profile
        </h1>
        <p className="text-abu ms-12">Edit Data user</p>
      </div>

      <div className="w-full flex flex-wrap gap-2 bg-base-100 shadow-lg mt-5 rounded-lg p-5">
        <div className="w-full flex gap-5">
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">
              Nama Depan
            </label>
            <input
              type="text"
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
            <details className="dropdown">
              <summary className="btn w-full justify-start text-abu">
                Pilih jenis Kelamin
              </summary>
              <ul className="w-full p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <a>Laki-Laki</a>
                </li>
                <li>
                  <a>Perempuan</a>
                </li>
              </ul>
            </details>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">Email</label>
            <input
              type="text"
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
              placeholder="Masukkan nomor"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">Alamat</label>
            <input
              type="text"
              placeholder="Masukkan alamat"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="w-full flex justify-between mt-5 gap-5">
          <Link to={`/users/${1}/profile`} className="w-full">
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

export default FormProfile;
