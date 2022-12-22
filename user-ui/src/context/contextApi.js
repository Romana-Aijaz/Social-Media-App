import React, { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState([
    {
      id: "6362b618456a0e3e3ff5b2b9",
      name: "roomi.ak",
      emailId: "romanaaijaz99@gmail.com",
      age: 23,
      city: "Islamabad",
      occupation: "se",
      profilePic: "profilePic.jpg",
      coverPic: "coverPic.png",
      disorder: "Mood Disorders",
      followers: ["63416581c3c248c4a96b3f46"],
    },
  ]);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
