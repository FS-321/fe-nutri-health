import React from "react";

import { token, role } from "../utils/userLogin";

import Navbar from "../components/layouts/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div>LandingPage</div>
      <div>Token: {token}</div>
      <div>Role: {role}</div>
    </>
  );
};

export default LandingPage;
