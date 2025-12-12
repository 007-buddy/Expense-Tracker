
import React, { useContext } from "react";
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import CharAvatar from "../Cards/CharAvatar";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext) || {};
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (!route) return;
    if (route === "logout" || route === "/logout") {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    if (typeof clearUser === "function") clearUser();
    navigate("/login");
  };

  // const initials = (name = "") => {
  //   const parts = name.trim().split(/\s+/).filter(Boolean);
  //   if (parts.length === 0) return "U";
  //   if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  //   return (parts[0][0] + parts[1][0]).toUpperCase();
  // };

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-gray-150 border-r border-gray-200/50 p-5 sticky top-[61px] z-30">
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
        {user?.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt={user?.fullName || "profile"}
            className="w-20 h-20 object-cover rounded-full bg-slate-400"
          />
        ) : (
        <CharAvatar
        fullName={user?.fullName }
        width="w-20"
        height="h-20"
        style="text-xl"
        />
        )}

        <h5 className="text-gray-900 font-medium leading-6">
          {user?.fullName || ""}
        </h5>
      </div>

      <nav className="mt-4">
        {SIDE_MENU_DATA.map((item, index) => {
          const isActive = activeMenu === item.label;
          return (
            <button
              key={`menu_${index}`}
              className={`w-full flex items-center gap-4 text-[15px] ${
              isActive ? "text-white bg-purple-600" : "text-gray-800 bg-transparent"
              } py-3 px-6 rounded-lg mb-3`}
              onClick={() => handleClick(item.path)}
            >
              <item.icon className="text-xl" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default SideMenu;
// ...existing code...