import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Admin/Dashboard";
import Makanan from "./pages/Admin/Makanan";
import Layanan from "./pages/Admin/Layanan";
import Pasien from "./pages/Admin/Pasien";
import Dokter from "./pages/Admin/Dokter";
import Poliklinik from "./pages/Admin/Poliklinik";
import RekamMedis from "./pages/Admin/RekamMedis";
import FormMakanan from "./components/Form/FormMakanan";
import RekamMedisUser from "./pages/User/RekamMedis";
import Favorite from "./pages/User/Favorite";
import Profile from "./pages/User/Profile";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/makanan" element={<Makanan />}>
        <Route path="tambah" element={<FormMakanan action="Tambah" />} />
        <Route path="edit/:id" element={<FormMakanan action="Edit" />} />
      </Route>
      <Route path="/layanan" element={<Layanan />} />
      <Route path="/data/pasien" element={<Pasien />} />
      <Route path="/data/dokter" element={<Dokter />} />
      <Route path="/data/poliklinik" element={<Poliklinik />} />
      <Route path="/data/rekammedis" element={<RekamMedis />} />
      <Route path="/users/:id">
        <Route path="rekammedis" element={<RekamMedisUser />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
