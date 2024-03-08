import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import authService from "./Auth/Auth";
import { login, logout } from "./Store/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { userdata } = useSelector((state) => state.auth); // Access auth state

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userdata) => {
        if (userdata) {
          dispatch(login({ userdata })); // Dispatch login with userdata
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Header />
          <h1>loading</h1>
          <Footer />
        </>
      ) : (
        <>
          <Header />
          {userdata ? <h1>User found</h1> : <h1>User not found</h1>}
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
