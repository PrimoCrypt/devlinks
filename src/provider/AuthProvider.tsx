"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/clientApp";

const Context = createContext({});

type UserT = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  isLogin: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AuthProvider = ({ children }: any) => {
  const initialState = {
    // eslint-disable-next-line unicorn/no-null
    user: null,
    isLogin: false,
  };

  const [user, setUser] = useState<UserT>(initialState);
  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((userState) => {
      setUser({ isLogin: userState ? true : false, user: userState });
    });
    return subscribe;
  });

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export const AuthContext = () => useContext(Context);

export default AuthProvider;
