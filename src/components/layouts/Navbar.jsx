import {
  MdDashboard,
  MdFastfood,
  MdFavorite,
  MdOutlineAccessTimeFilled,
  MdOutlineDataThresholding,
  MdPerson,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-hijau p-0">
      <div className="container mx-20">
        <div className="flex-1 flex flex-row items-center gap-2">
          <img src="https://i.ibb.co/f0ZY4XR/Vector.png" />
          <a className="text-xl text-putih font-semibold">Nutri Health</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-putih text-lg items-center">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Nutrition</a>
            </li>
            <li>
              <details>
                <summary>
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>{" "}
                  Admin
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none text-hijau relative z-10">
                  {/* admin */}
                  <li>
                    <Link to={"/dashboard"}>
                      <MdDashboard /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to={"/makanan"}>
                      <MdFastfood /> Makanan
                    </Link>
                  </li>
                  <li>
                    <Link to={"/layanan"}>
                      <MdOutlineAccessTimeFilled /> Layanan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard"}
                      className="btn btn-sm bg-hijau text-putih hover:text-hijau mt-2"
                    >
                      Logout
                    </Link>
                  </li>
                  {/* user */}
                  <li>
                    <Link to={`/users/${1}/rekammedis`}>
                      <MdOutlineDataThresholding /> Rekam Medis
                    </Link>
                  </li>
                  <li>
                    <Link to={`/users/${1}/favorite`}>
                      <MdFavorite /> Favorite
                    </Link>
                  </li>
                  <li>
                    <Link to={`/users/${1}/profile`}>
                      <MdPerson /> Profile
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
