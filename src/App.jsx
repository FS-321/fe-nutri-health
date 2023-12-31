import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Admin/Dashboard";
import Makanan from "./pages/Admin/Makanan";
import Layanan from "./pages/Admin/Layanan";
import Pasien from "./pages/Admin/Pasien";
import Dokter from "./pages/Admin/Dokter";
import Poliklinik from "./pages/Admin/Poliklinik";
import RekamMedis from "./pages/Admin/RekamMedis";
import FormMakanan from "./components/Form/FormMakanan";
import FormLayanan from "./components/Form/FormLayanan";
import FormPasien from "./components/Form/FormPasien";
import FormDokter from "./components/Form/FormDokter";
import FormPoliklinik from "./components/Form/FormPoliklinik";
import FormRekamMedis from "./components/Form/FormRekamMedis";
import RekamMedisUser from "./pages/User/RekamMedis";
import Favorite from "./pages/User/Favorite";
import Profile from "./pages/User/Profile";
import FormProfile from "./components/Form/FormProfile";
import Login from "./pages/signin";
import Register from "./pages/signup";
import LandingPage from "./pages/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
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
      <Route path="/users/:iduser">
        <Route path="rekammedis" element={<RekamMedisUser />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="profile" element={<Profile />}>
          <Route path="edit" element={<FormProfile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
