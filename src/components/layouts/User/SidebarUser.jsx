import {
  MdOutlineDataThresholding,
  MdPerson,
  MdFavorite,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

import { MENU_LIST } from "./constants";

const iconComponents = {
  MdOutlineDataThresholding,
  MdPerson,
  MdFavorite,
};

const SidebarUser = () => {
  return (
    <div className="w-72 h-[400px] bg-base-100 shadow-lg px-0 border-1 rounded-lg">
      <h1 className="font-bold text-hijau text-lg px-8 pt-8 pb-5">MENU</h1>
      <ul className="flex flex-col gap-3">
        {MENU_LIST.map((item, i) => {
          const IconComponent = iconComponents[item.icon];
          return (
            <li key={i}>
              <NavLink
                to={`/users/${1}/${item.path}`}
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

export default SidebarUser;
