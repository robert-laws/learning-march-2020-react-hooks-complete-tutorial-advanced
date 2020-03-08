import React, { createContext, useReducer } from 'react';
import { usersReducer } from '../reducers/UsersReducer';
import { usersData } from '../data/users';

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const [users, dispatch] = useReducer(usersReducer, usersData);
  
  return (
    <UsersContext.Provider value={{users, dispatch}}>
      {children}
    </UsersContext.Provider>
  )
}