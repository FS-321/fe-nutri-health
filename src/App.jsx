import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Makanan from "./pages/Makanan";
import Layanan from "./pages/Layanan";
import Pasien from "./pages/Pasien";
import Dokter from "./pages/Dokter";
import Poliklinik from "./pages/Poliklinik";
import RekamMedis from "./pages/RekamMedis";
import FormMakanan from "./components/Form/FormMakanan";
import FormLayanan from "./components/Form/FormLayanan";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/makanan" element={<Makanan />}>
        <Route path="tambah" element={<FormMakanan action="Tambah" />} />
        <Route path="edit/:id" element={<FormMakanan action="Edit" />} />
      </Route>
      <Route path="/layanan" element={<Layanan />}>
        <Route path="tambah" element={<FormLayanan action="Tambah" />} />
        <Route path="edit/:id" element={<FormLayanan action="Edit" />} />
      </Route>
      <Route path="/data/pasien" element={<Pasien />} />
      <Route path="/data/dokter" element={<Dokter />} />
      <Route path="/data/poliklinik" element={<Poliklinik />} />
      <Route path="/data/rekammedis" element={<RekamMedis />} />
    </Routes>
  );
}

export default App;
