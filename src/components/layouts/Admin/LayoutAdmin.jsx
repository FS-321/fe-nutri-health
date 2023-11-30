import Navbar from "../Navbar";
import SidebarAdmin from "./SidebarAdmin";
import PropTypes from "prop-types";


const LayoutAdmin = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex px-20 mt-10 gap-10">
        <SidebarAdmin />
        <div className="w-full">{children}</div>
      </div>
    </>
  );
};

LayoutAdmin.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutAdmin;
