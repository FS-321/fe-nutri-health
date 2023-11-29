import {
  MdPeople,
  MdOutlinePeople,
  MdPerson,
  MdOutlineMapsHomeWork,
  MdOutlineDataThresholding,
  MdFastfood,
  MdOutlineAccessTimeFilled,
} from "react-icons/md";
import LayoutAdmin from "../../components/layouts/Admin/LayoutAdmin";

const Dashboard = () => {
  return (
    <LayoutAdmin>
      <h1 className="flex items-center text-hijau text-3xl font-semibold gap-2">
        <MdPeople size={40} /> Dashboard
      </h1>
      <div className="w-full flex flex-wrap gap-2 bg-base-100 shadow-lg p-10 mt-5 rounded-lg">
        <div className="flex flex-row gap-4 items-center card bg-biru w-[48%] rounded-sm p-5 text-putih">
          <MdOutlinePeople size={60} />
          <div className="flex flex-col justify-between">
            <span className="text-xl">Data Pasien</span>
            <span className="text-3xl font-semibold">80 Pasien</span>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center card bg-hijau w-[48%] rounded-sm p-5 text-putih">
          <MdPerson size={60} />
          <div className="flex flex-col justify-between">
            <span className="text-xl">Data Dokter</span>
            <span className="text-3xl font-semibold">80 Dokter</span>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center card bg-merah w-[48%] rounded-sm p-5 text-putih">
          <MdOutlineMapsHomeWork size={60} />
          <div className="flex flex-col justify-between">
            <span className="text-xl">Data Poliklinik</span>
            <span className="text-3xl font-semibold">80 Poliklinik</span>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center card bg-oren w-[48%] rounded-sm p-5 text-putih">
          <MdOutlineDataThresholding size={60} />
          <div className="flex flex-col justify-between">
            <span className="text-xl">Data Rekam Medis</span>
            <span className="text-3xl font-semibold">80 Rekam Medis</span>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center card bg-birutua w-[48%] rounded-sm p-5 text-putih">
          <MdFastfood size={60} />
          <div className="flex flex-col justify-between">
            <span className="text-xl">Data Makanan</span>
            <span className="text-3xl font-semibold">80 Makanan</span>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center card bg-ungu w-[48%] rounded-sm p-5 text-putih">
          <MdOutlineAccessTimeFilled size={60} />
          <div className="flex flex-col justify-between">
            <span className="text-xl">Data Layanan</span>
            <span className="text-3xl font-semibold">80 Layanan</span>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default Dashboard;
