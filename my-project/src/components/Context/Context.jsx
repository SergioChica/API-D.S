import React, { createContext, useState } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [createUser, setCreateUser] = useState(false);

  return (
    <StateContext.Provider value={{ createUser, setCreateUser }}>
      {children}
    </StateContext.Provider>
  );
};