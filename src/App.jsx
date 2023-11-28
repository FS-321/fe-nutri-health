import { Route, Routes } from "react-router-dom";
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
      <Route path="/data/pasien" element={<Pasien />} />
      <Route path="/data/dokter" element={<Dokter />} />
      <Route path="/data/poliklinik" element={<Poliklinik />} />
      <Route path="/data/rekammedis" element={<RekamMedis />} />
    </Routes>
  );
}

export default App;
