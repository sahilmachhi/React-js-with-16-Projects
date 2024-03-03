import React, { useContext } from "react";
import mainContext from "../Context/mainContext";

function Data() {
  const { user } = useContext(mainContext);

  if (!user) {
    return (
      <>
        <h1>no user found</h1>
      </>
    );
  } else {
    return (
      <p>
        welcome {user.username} and your password is {user.password}
      </p>
    );
  }
}

export default Data;
