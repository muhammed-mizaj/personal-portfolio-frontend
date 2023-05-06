import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaCode, FaEnvelope } from "react-icons/fa";

const BottomNavBar = () => {
  const [active, setActive] = useState("about");

  const handleItemClick = (item) => {
    setActive(item);
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50">
      <div className="flex justify-center">
        <div className="w-64 h-16 relative">
          <svg
            className="absolute bottom-0 left-0"
            viewBox="0 0 200 100"
            width="100%"
            height="100%"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#414D55" />
                <stop offset="100%" stopColor="#2C3E50" />
              </linearGradient>
            </defs>
            <path
              d="M 0 50 A 50 50 0 0 0 100 100 L 200 100 A 100 100 0 0 1 0 100 Z"
              fill="url(#grad1)"
            />
          </svg>
          <ul className="flex justify-between items-center h-full text-white">
            <li>
              <NavLink
                to="/about"
                className={active === "about" ? "active" : ""}
                onClick={() => handleItemClick("about")}
              >
                <FaUser size={20} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={active === "projects" ? "active" : ""}
                onClick={() => handleItemClick("projects")}
              >
                <FaCode size={20} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={active === "contact" ? "active" : ""}
                onClick={() => handleItemClick("contact")}
              >
                <FaEnvelope size={20} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavBar;
