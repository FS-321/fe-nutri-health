import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Makanan from "./pages/Makanan";
import Layanan from "./pages/Layanan";
import Pasien from "./pages/Pasien";
import Dokter from "./pages/Dokter";
import Poliklinik from "./pages/Poliklinik";
import RekamMedis from "./pages/RekamMedis";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/makanan" element={<Makanan />} />
      <Route path="/layanan" element={<Layanan />} />
      <Route path="/pasien" element={<Pasien />} />
      <Route path="/dokter" element={<Dokter />} />
      <Route path="/poliklinik" element={<Poliklinik />} />
      <Route path="/rekammedis" element={<RekamMedis />} />
    </Routes>
  );
}

export default App;
