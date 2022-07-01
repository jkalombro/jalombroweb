import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext({});

// Hook to provide access to context object
export const UseAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = (props) => {
  const [activemenu, setActivemenu] = useState("/");

  // Assign React state and constants to context object
  const AppContextObject = {
    activemenu, 
    setActivemenu
  };
  
  return (
    <AppContext.Provider value={AppContextObject}>
      {props.children}
    </AppContext.Provider>
  );
};