import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();
  const prevPathRef = useRef(null);

  useEffect(() => {
    // Trigger loader when navigating to Home page ("/") from another page or on initial mount
    if (location.pathname === '/' && prevPathRef.current !== '/') {
      setShowLoader(true);
    }
    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  const triggerLoader = () => {
    setShowLoader(true);
  };

  return (
    <LoaderContext.Provider value={{ showLoader, setShowLoader, triggerLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};
