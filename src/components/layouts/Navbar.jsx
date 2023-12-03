import {
  MdDashboard,
  MdFastfood,
  MdFavorite,
  MdOutlineAccessTimeFilled,
  MdOutlineDataThresholding,
  MdPerson,
  MdOutlineLogin,
} from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";

import { handleLogout, userLogin } from "../../utils/userAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const user = userLogin();

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
              <Link to={"/"}>Home</Link>
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
            {user ? (
              <li>
                <details>
                  <summary>
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src="https://i.pinimg.com/originals/c6/e9/ed/c6e9ed167165ca99c4d428426e256fae.png"
                        />
                      </div>
                    </div>{" "}
                    {user?.email}
                  </summary>
                  <ul className="p-2 bg-base-100 rounded-t-none text-hijau relative z-10">
                    {user?.role === "user" ? (
                      <>
                        <li>
                          <Link to={`/users/${user.user_id}/rekammedis`}>
                            <MdOutlineDataThresholding /> Rekam Medis
                          </Link>
                        </li>
                        <li>
                          <Link to={`/users/${user.user_id}/favorite`}>
                            <MdFavorite /> Favorite
                          </Link>
                        </li>
                        <li>
                          <Link to={`/users/${user.user_id}/profile`}>
                            <MdPerson /> Profile
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
                    <li>
                      <button
                        onClick={() => handleLogout(navigate)}
                        className="btn btn-sm bg-hijau text-putih hover:text-hijau mt-2"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </details>
              </li>
            ) : (
              <li className="flex flex-row gap-1">
                <Link
                  to={"/login"}
                  className="btn btn-outline border-putih text-putih text-lg hover:text-putih"
                >
                  <MdOutlineLogin />
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="btn bg-putih text-hijau text-lg hover:text-putih"
                >
                  <MdOutlineLogin />
                  Register
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
