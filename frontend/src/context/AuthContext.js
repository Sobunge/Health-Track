import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(new Map()); // Store users in a Map

  const login = (email, password) => {
    // Check if email exists and password matches
    const user = users.get(email);
    if (user && user.password === password) {
      setIsAuthenticated(true);
      setCurrentUser(user); // Set current user
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null); // Clear current user
  };

  const register = (firstName, middleName, lastName, email, password) => {
    // Check if email is already registered
    if (users.has(email)) {
      return { success: false, message: 'Email already in use' };
    }

    // Add new user to the Map
    setUsers(new Map(users.set(email, { firstName, middleName, lastName, email, password })));
    return { success: true, message: 'Registration successful' };
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
