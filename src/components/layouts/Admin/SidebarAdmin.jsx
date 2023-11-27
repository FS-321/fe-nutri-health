import {
  MdDashboard,
  MdFastfood,
  MdOutlineAccessTimeFilled,
  MdWysiwyg,
  MdOutlinePeople,
  MdOutlinePersonalInjury,
  MdOutlineMapsHomeWork,
  MdOutlineDataThresholding,
  MdArrowDropDown,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

import { MENU_LIST } from "./constants";

const iconComponents = {
  MdDashboard,
  MdFastfood,
  MdOutlineAccessTimeFilled,
  MdWysiwyg,
  MdOutlinePeople,
  MdOutlinePersonalInjury,
  MdOutlineMapsHomeWork,
  MdOutlineDataThresholding,
};

const SidebarAdmin = () => {
  return (
    <div className="w-72 h-[400px] bg-base-100 shadow-lg px-0 border-1 rounded-lg">
      <h1 className="font-bold text-hijau text-lg px-8 pt-8 pb-5">MENU</h1>
      <ul className="flex flex-col gap-3">
        {MENU_LIST.map((item, i) => {
          const IconComponent = iconComponents[item.icon];
          return item.child ? (
            <li
              className="flex items-center px-8 py-2 gap-2 text-hijau"
              key={i}
            >
              <div className="dropdown">
                <div tabIndex={0} role="button" className="flex gap-2">
                  {<IconComponent size={24} />} {item.name}{" "}
                </div>
                <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60">
                  {item.child.map((data, i) => {
                    const IconData = iconComponents[data.icon];
                    return (
                      <li key={i}>
                        <NavLink
                          to={data.path}
                          className={({ isActive }) =>
                            isActive
                              ? "flex items-center px-8 py-2 gap-2 bg-hijau text-putih"
                              : "flex items-center px-8  py-2 gap-2 text-hijau hover:bg-hijau hover:text-putih"
                          }
                        >
                          {<IconData size={24} />}
                          {data.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          ) : (
            <li key={i}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-8 py-2 gap-2 bg-hijau text-putih"
                    : "flex items-center px-8 py-2 gap-2 text-hijau hover:bg-hijau hover:text-putih"
                }
              >
                {<IconComponent size={24} />}
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarAdmin;
