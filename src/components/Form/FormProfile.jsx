import { useEffect, useState } from "react";
import { MdInfoOutline, MdPerson } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../api";

import Modal from "../Modal/Modal";
import { userLogin } from "../../utils/userAuth";

const FormProfile = (props) => {
  const { iduser } = useParams();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    nama_depan: "",
    nama_belakang: "",
    email: "",
    no_hp: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const fetchDataUser = async () => {
    try {
      const { data } = await api.get(`/user/${iduser}`);
      setData({
        nama_depan: data.dataValues.nama_depan,
        nama_belakang: data.dataValues.nama_belakang,
        email: data.dataValues.email,
        no_hp: data.dataValues.no_hp,
        password: data.dataValues.password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataUser();
  }, []);

  const handleEdit = async () => {
    const { nama_depan, nama_belakang, email, no_hp, password } = data;
    const payload = { nama_depan, nama_belakang, email, no_hp, password };

    try {
      await api.put("/user", payload);
      navigate(`/users/${iduser}/profile`);
    } catch (error) {
      console.log(error);
    }
  };

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
              name="nama_depan"
              placeholder="Masukkan nama depan"
              className="input input-bordered w-full"
              onChange={handleOnChange}
              value={data?.nama_depan}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">
              Nama Belakang
            </label>
            <input
              type="text"
              name="nama_belakang"
              placeholder="Masukkan nama belakang"
              className="input input-bordered w-full"
              onChange={handleOnChange}
              value={data?.nama_belakang}
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
              name="no_hp"
              placeholder="Masukkan nomor"
              className="input input-bordered w-full"
              onChange={handleOnChange}
              value={data?.no_hp}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Masukkan email"
              className="input input-bordered w-full"
              onChange={handleOnChange}
              value={data?.email}
            />
          </div>
        </div>

        <div className="w-full flex gap-5">
          <div className="w-full flex flex-col gap-2">
            <label className="text-hijau text-xl font-semibold">Password</label>
            <input
              type="text"
              name="password"
              placeholder="Masukkan password baru"
              className="input input-bordered w-full"
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div className="w-full flex justify-between mt-5 gap-5">
          <Link to={`/users/${iduser}/profile`} className="w-full">
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
              onClick={() => handleEdit()}
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
    </>
  );
};

export default FormProfile;
