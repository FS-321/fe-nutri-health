import { useEffect, useState } from "react";
import {
  MdDashboard,
  MdFastfood,
  MdFavorite,
  MdOutlineAccessTimeFilled,
  MdOutlineDataThresholding,
  MdPerson,
  MdOutlineLogin,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import { handleLogout, userLogin } from "../../utils/userAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const user = userLogin();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isNavbarScrolled = scrollTop > 0;
      setIsScrolled(isNavbarScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar transition-all duration-300 shadow-sm ${
        isScrolled ? "bg-putih text-hijau" : "bg-hijau text-putih"
      }  p-0 fixed top-0 w-full z-50`}
    >
      <div className="container mx-20">
        <div className="flex-1 flex flex-row items-center gap-2">
          <img src="https://i.ibb.co/f0ZY4XR/Vector.png" />
          <a className="text-xl font-semibold">Nutri Health</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-lg items-center">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to="/#about-us">About Us</Link>
            </li>
            <li>
              <Link to="/#service">Service</Link>
            </li>
            <li>
              <Link to="/#nutrition">Nutition</Link>
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
                  <a
                    className={`custom-hijau font-medium py-1 px-4 rounded-md border ${
                      isScrolled
                        ? "border-hijau text-hijau"
                        : "border-putih text-putih"
                    }  hover:bg-hijautua hover:text-putih`}
                  >
                    Sign in
                  </a>
                </Link>
                <Link to={"/register"} className="hover:bg-transparent p-0">
                  <a
                    className={`${
                      isScrolled
                        ? "bg-hijau text-putih "
                        : "bg-putih text-hijau "
                    } font-medium py-1 px-4 rounded-md border hover:text-putih hover:bg-hijautua`}
                  >
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

export default Navbar;
