import React, { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Create a Provider component
export const UserProvider = ({ children }) => {
  // Define state for user information and orders
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });
  const [orders, setOrders] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, orders, setOrders }}>
      {children}
    </UserContext.Provider>
  );
};
