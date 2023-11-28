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
import FormPasien from "./components/Form/FormPasien";
import FormDokter from "./components/Form/FormDokter";
import FormPoliklinik from "./components/Form/FormPoliklinik";
import FormRekamMedis from "./components/Form/FormRekamMedis";
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
      <Route path="/data/pasien" element={<Pasien />}>
        <Route path="tambah" element={<FormPasien action="Tambah" />} />
        <Route path="edit/:id" element={<FormPasien action="Edit" />} />
      </Route>
      <Route path="/data/dokter" element={<Dokter />}>
        <Route path="tambah" element={<FormDokter action="Tambah" />} />
        <Route path="edit/:id" element={<FormDokter action="Edit" />} />
      </Route>
      <Route path="/data/poliklinik" element={<Poliklinik />}>
        <Route path="tambah" element={<FormPoliklinik action="Tambah" />} />
        <Route path="edit/:id" element={<FormPoliklinik action="Edit" />} />
      </Route>
      <Route path="/data/rekammedis" element={<RekamMedis />}>
        <Route path="tambah" element={<FormRekamMedis action="Tambah" />} />
        <Route path="edit/:id" element={<FormRekamMedis action="Edit" />} />
      </Route>
    </Routes>
  );
}

export default App;
