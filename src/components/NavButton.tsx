import { NavLink } from "react-router-dom";

type NavButtonProps = {
  to: string;
  label: string;
};

const NavButton = ({ to, label }: NavButtonProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        px-4 py-2 rounded-md text-sm font-medium transition
        ${
          isActive
            ? "bg-gray-900 text-white"
            : "text-gray-700 hover:bg-gray-200"
        }
        `
      }
    >
      {label}
    </NavLink>
  );
};

export default NavButton;