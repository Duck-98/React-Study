import React, { createContext, useState } from "react";

export const userContext = createContext(null);
const UserStore = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  return (
    <userContext.Provider
      value={{
        username,
        setUsername,
        email,
        setEmail,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserStore;
