import Navbar from "../Navbar";
import SidebarUser from "./SidebarUser";

const LayoutUser = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex px-20 mt-10 gap-10">
        <SidebarUser />
        <div className="w-full">{children}</div>
      </div>
    </>
  );
};

export default LayoutUser;
