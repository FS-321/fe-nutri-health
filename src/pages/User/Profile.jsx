import { MdCreate, MdPerson } from "react-icons/md";
import { Link, Outlet, useLocation } from "react-router-dom";

import LayoutUser from "../../components/layouts/User/LayoutUser";

const Profile = () => {
  const location = useLocation();
  const isLocation = location.pathname === `/users/${1}/profile`;

  return (
    <LayoutUser>
      {isLocation ? (
        <>
          <div className="flex items-center justify-between">
            <h1 className="flex items-center text-hijau text-3xl font-semibold gap-2">
              <MdPerson size={40} /> Profile
            </h1>
            <div className="flex gap-1">
              <Link to={`/users/${1}/profile/edit`}>
                <button className="flex items-center bg-warning text-putih p-2 gap-1 rounded-sm hover:bg-oren">
                  <MdCreate size={24} /> Edit Profile
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center gap-2 bg-base-100 shadow-lg mt-5 rounded-lg p-5">
            <div className="mb-5">
              <img
                src="https://reqres.in/img/faces/1-image.jpg"
                alt="profile"
                className="rounded-full"
              />
            </div>

            <div className="w-full flex gap-5">
              <div className="w-full flex flex-col gap-2">
                <label className="text-hijau text-xl font-semibold">Nama</label>
                <div className="border border-abu py-2 px-3 rounded-lg text-xl">
                  Fajar
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="text-hijau text-xl font-semibold">
                  No Telepon
                </label>
                <div className="border border-abu py-2 px-3 rounded-lg text-xl">
                  Fajar
                </div>
              </div>
            </div>
            <div className="w-full flex gap-5">
              <div className="w-full flex flex-col gap-2">
                <label className="text-hijau text-xl font-semibold">
                  Jenis Kelamin
                </label>
                <div className="border border-abu py-2 px-3 rounded-lg text-xl">
                  Riski
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="text-hijau text-xl font-semibold">
                  Email
                </label>
                <div className="border border-abu py-2 px-3 rounded-lg text-xl">
                  fajar@mail.com
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-hijau text-xl font-semibold">Alamat</label>
              <div className="border border-abu py-2 px-3 rounded-lg text-xl">
                Jalan Hutan
              </div>
            </div>
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </LayoutUser>
  );
};

export default Profile;
