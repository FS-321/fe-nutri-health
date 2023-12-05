import {
  MdDashboard,
  MdFastfood,
  MdFavorite,
  MdOutlineAccessTimeFilled,
  MdOutlineDataThresholding,
  MdPerson,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

import { handleLogout, userLogin } from "../../utils/userAuth";

const NavbarLanding = () => {
  const navigate = useNavigate();
  const user = userLogin();

  const handleScrollTo = (id) => {
    scroller.scrollTo(id, {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <div className="navbar bg-putih p-0">
      <div className="container mx-20">
        <div className="flex-1 flex flex-row items-center gap-2">
          <img src="https://i.ibb.co/f0ZY4XR/Vector.png" />
          <a className="text-xl text-hijau font-semibold">Nutri Health</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-hijau text-lg items-center">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to="/" onClick={() => handleScrollTo("about-us")}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => handleScrollTo("service")}>
                Service
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => handleScrollTo("nutrition")}>
                Nutition
              </Link>
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
              <li className="flex flex-row gap-2 items-center">
                <Link to={"/login"} className="hover:bg-transparent p-0">
                  <a className="custom-hijau font-medium py-1 px-4 rounded-md border border-green-500 hover:bg-hijau hover:text-putih">
                    Sign in
                  </a>
                </Link>
                <Link to={"/register"} className="hover:bg-transparent p-0">
                  <a className="bg-hijau text-putih font-medium py-1 px-4 rounded-md border border-hijau hover:bg-hijautua">
                    Sign Up
                  </a>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarLanding;
