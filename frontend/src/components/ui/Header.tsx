// components/Header.jsx
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="w-full flex flex-row justify-center mt-6 mb-6">
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-4 py-2  text-lg hover:scale-105  rounded-md transition-all duration-200 will-change-auto  ${
            isActive
              ? "bg-primary text-foreground" // lighter pastel blue
              : "hover:text-foreground/80 transition-transform"
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2  text-lg hover:scale-105  rounded-md transition-all duration-200 will-change-auto   ${
            isActive
              ? "bg-primary text-foreground" // lighter pastel blue
              : "hover:text-foreground/80 transition-transform"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/gear"
        className={({ isActive }) =>
          `px-4 py-2  text-lg hover:scale-105  rounded-md transition-all duration-200 will-change-auto   ${
            isActive
              ? "bg-primary text-foreground" // lighter pastel blue
              : "hover:text-foreground/80 transition-transform"
          }`
        }
      >
        Gear
      </NavLink>
    </div>
  );
}

export default Header;
