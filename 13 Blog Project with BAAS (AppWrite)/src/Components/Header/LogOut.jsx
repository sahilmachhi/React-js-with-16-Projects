import React from "react";
import { logout } from "../../Store/authSlice";
import { useDispatch } from "react-redux";
import authService from "../../Auth/Auth";

function LogOut() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="bg-red-600 px-8 py-2 rounded-3xl text-white"
      onClick={handleLogOut}
    >
      log out
    </button>
  );
}

export default LogOut;
