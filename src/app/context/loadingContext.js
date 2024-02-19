"use client"
import { createContext, useContext, useState } from 'react';

const LoadingContext = createContext({
  loading: true,
  setLoading: () => {}
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
