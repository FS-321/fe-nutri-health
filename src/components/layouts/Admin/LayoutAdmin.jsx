import Navbar from "../Navbar";
import SidebarAdmin from "./SidebarAdmin";

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex container mx-20 mt-10 gap-10">
        <SidebarAdmin />
        <div>{children}</div>
      </div>
    </>
  );
};

export default LayoutAdmin;
