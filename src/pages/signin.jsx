import React, { useState } from "react";
import foto from "../assets/Frame 2.png";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const { data } = await api.post("/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("user", JSON.stringify(data));

      setEmail("");
      setPassword("");

      navigate("/");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <body className="bg-hijautua p-16">
      <main className="">
        <div className="container flex bg-putih">
          <div className="left w-2/5">
            <img className="w-full" src={foto} alt="" />
          </div>
          <div className="right text-center w-3/5 bg-white px-8 pt-12">
            <h1 className="font-medium text-hijau text-3xl">
              Sign In for Account
            </h1>
            <p className="text-hijau mt-2">
              Sign in to your account so you can continue building onboarding
              experience.
            </p>
            <div className="gap-x-24 mt-12">
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
              <div className="w-full text-left custom-hijau font-medium">
                <div className="mb-3 text-hijau">
                  <label for="">Email</label>
                </div>

                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="border-2 rounded-md border-abumuda focus:border-abu outline-none w-full h-12 px-3"
                />
              </div>
              <div className="w-full text-left custom-hijau font-medium">
                <div className="mb-3 mt-5 text-hijau">
                  <label for>Password</label>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="border-2 rounded-md border-abumuda focus:border-abu outline-none w-full h-12 px-3"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div className="flex items-center">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  className="accent-green-500"
                />
                <label
                  for="link-checkbox"
                  className="ml-2 text-sm font-medium custom-hijau"
                >
                  Remember me
                </label>
              </div>
              <div>
                <label for=" " className="ml-2 text-sm font-medium text-hijau">
                  Forgot Password
                </label>
              </div>
            </div>
            <div className="flex gap-4 mt-4 justify-around px-12">
              <button
                className="rounded-md bg-hijau text-putih px-16 py-2 hover:bg-hijautua"
                onClick={() => handleSubmit()}
              >
                Sign In
              </button>
              <Link
                to={"/register"}
                className="rounded-md border border-hijau text-hijau hover:bg-hijau hover:text-putih text-hijau-500 px-16 py-2"
              >
                Sign Up
              </Link>
            </div>
            <div className="mt-10 justify-around px-12">
              <p className="text-gray-400 mt-5">Or sign in using</p>

              <div className="flex mt-4 justify-center gap-5">
                <div className="border-2 p-1 rounded-lg border-abumuda outline-none">
                  <img
                    src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                    className="left-0 w-7"
                    alt="google logo"
                  />
                </div>
                <div className="facebook border-2 p-1 rounded-lg border-abumuda outline-none">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                    className="left-0 w-7"
                    alt="Facebook logo"
                  />
                </div>
                <div className="twitter border-2 p-1 rounded-lg border-abumuda outline-none w-10">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Twitter_new.svg/640px-Twitter_new.svg.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
};

export default SignIn;
