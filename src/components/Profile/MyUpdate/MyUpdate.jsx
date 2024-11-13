import React, { useEffect } from "react";
import {
  Routes,
  Route,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Active from "./Active";
import Archive from "./Archive";

const MyUpdate = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/profile/myupdate") {
      navigate("/profile/myupdate/active");
    }
  });

  return (
    <div>
      <nav className="flex space-x-[43px] border-b-2 border-gray-300">
        <NavLink to="active" className={"text-[#293843] relative pb-2"}>
          Активные
          {location.pathname.endsWith("/active") && (
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500"></span>
          )}
        </NavLink>
        <NavLink to="archive" className={"text-[#293843] relative pb-2"}>
          Архив
          {location.pathname.endsWith("/archive") && (
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500"></span>
          )}
        </NavLink>
      </nav>
      <Routes>
        <Route path="active" element={<Active />} />
        <Route path="archive" element={<Archive />} />
      </Routes>
    </div>
  );
};

export default MyUpdate;
