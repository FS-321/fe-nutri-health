import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import { ToastContainer, toast } from "react-toastify";

import foto from "../assets/Frame 3 (1).png";
import { btnNotif } from "../utils/toastNotif";

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    try {
      const res = await api.post("/register", {
        nama_depan: firstName,
        nama_belakang: lastName,
        email: email,
        tanggal_lahir: date,
        password: password,
      });

      btnNotif("Register succes", toast.success);
      setFirstName("");
      setLastName("");
      setEmail("");
      setDate("");
      setPassword("");

      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1000);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <body className="bg-hijautua p-16">
        <main className="">
          <div className="container flex justify-center bg-putih">
            <div className="left w-2/5 hidden lg:block">
              <img className="w-full" src={foto} alt="" />
            </div>
            <div className="right text-center w-3/5 bg-white px-8 pt-12">
              <h1 className="font-medium text-hijau text-3xl">
                Sign Up for Account
              </h1>
              <p className="text-hijau my-8">
                Let’s get you all set up so you can start creating your first
                onboarding experience.
              </p>
              <div>
                {error && (
                  <div role="alert" className="alert alert-error">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      onClick={() => setError(false)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Failed! Please check your data</span>
                  </div>
                )}
                <div className="block lg:flex w-full text-left custom-hijau font-medium gap-5">
                  <div className="w-full">
                    <div className="mb-3 text-hijau">
                      <label for="first">First Name</label>
                    </div>
                    <input
                      type="text"
                      className="border-2 rounded-md border-abumuda focus:border-abu outline-none w-full h-12 px-3"
                      id="first"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                    />
                  </div>
                  <div className="w-full">
                    <div className="mb-3 text-hijau">
                      <label for="last">Last Name</label>
                    </div>

                    <input
                      type="text"
                      className="border-2 rounded-md border-abumuda focus:border-abu outline-none w-full h-12 px-3"
                      id="last"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                    />
                  </div>
                </div>
                <div className="w-full text-left custom-hijau font-medium">
                  <div className="mb-3 text-hijau mt-5">
                    <label for="birth">Birth of Year</label>
                  </div>
                  <input
                    type="date"
                    className="border-2 rounded-md border-abumuda focus:border-abu outline-none w-full h-12 px-3"
                    id="birth"
                    onChange={(event) => setDate(event.target.value)}
                  />
                </div>
                <div className="w-full text-left custom-hijau font-medium">
                  <div className="mb-3 text-hijau mt-5">
                    <label for="email">Email</label>
                  </div>
                  <input
                    type="email"
                    className="border-2 rounded-md border-abumuda focus:border-abu outline-none w-full h-12 px-3"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="w-full text-left custom-hijau font-medium">
                  <div className="mb-3 text-hijau mt-5">
                    <label for="password">Password</label>
                  </div>
                  <input
                    type="password"
                    className="border-2 rounded-md border-abumuda focus:border-abu outline-none w-full h-12 px-3"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    className="accent-green-500"
                    // value={accept}
                    // onChange={(event) => setAccept(event.target.value)}
                  />
                  <label
                    for="link-checkbox"
                    className="ml-2 text-sm font-medium text-gray-400"
                  >
                    I accept all{" "}
                    <span className="text-green-400">Term & Conditions</span>
                  </label>
                </div>
              </div>
              <div className="flex gap-4 mt-4 justify-around px-12">
                <button
                  className="rounded-md bg-hijau text-putih px-16 py-2 hover:bg-hijautua"
                  onClick={() => handleSubmit()}
                >
                  Sign Up
                </button>
                <Link
                  to={"/login "}
                  className="rounded-md border border-hijau text-hijau hover:bg-hijau hover:text-putih text-hijau-500 px-16 py-2"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </main>
      </body>
      <ToastContainer />
    </>
  );
};

export default SignUp;
