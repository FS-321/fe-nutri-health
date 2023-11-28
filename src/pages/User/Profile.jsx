import { MdCreate, MdPerson } from "react-icons/md";
import { Link, Outlet, useLocation } from "react-router-dom";

import LayoutUser from "../../components/layouts/User/LayoutUser";
import DetailUser from "../../components/Details/DetailUser";

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

          <DetailUser />
        </>
      ) : (
        <Outlet />
      )}
    </LayoutUser>
  );
};

export default Profile;
