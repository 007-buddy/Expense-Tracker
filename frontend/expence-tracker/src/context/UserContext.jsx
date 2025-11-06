import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
  user: null,
  updateUser: () => {},
  clearUser: () => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Restore from localStorage on initial load
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  // Keep localStorage in sync when user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Update user state and persist
  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Clear user from state and storage (logout)
  const clearUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token"); // remove token if you store it
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;