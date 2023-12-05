import { ToastContainer } from "react-toastify";
import Navbar from "../Navbar";
import SidebarAdmin from "./SidebarAdmin";

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex px-20 mt-10 gap-10">
        <SidebarAdmin />
        <div className="w-full">{children}</div>
        <ToastContainer />
      </div>
    </>
  );
};

export default LayoutAdmin;
