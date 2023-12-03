import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

import Navbar from "../components/layouts/Navbar";

import { userLogin } from "../utils/userAuth";
import api from "../api";
import CardMakanan from "../components/Cards/CardMakanan";

const LandingPage = () => {
  const user = userLogin();

  const [data, setData] = useState([]);

  const fetchDataMakanan = async () => {
    try {
      const { data } = await api.get(`/makanan`, {
        pages: 1,
        limit: 1,
      });
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataMakanan();
  }, []);

  return (
    <>
      <Navbar />
      <div>LandingPage</div>
      <div>Token: {user?.newToken}</div>
      <div>Role: {user?.role}</div>
      {data.map((item, i) => (
        <CardMakanan item={item} icon={<FaPlus />} action={"add"} key={i} />
      ))}
    </>
  );
};

export default LandingPage;
