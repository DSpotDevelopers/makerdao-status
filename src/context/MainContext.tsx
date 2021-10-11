import React, { createContext, useContext, useEffect, useState } from 'react';
import { loadBase } from '../services';

const MainContext = createContext<{ state: Definitions.BasicStateType | null }>(
  {
    state: null,
  },
);

function MainContextProvider({ ...props }) {
  const [state, setState] = useState<Definitions.BasicStateType | undefined>();

  const loadData = async () => {
    const [baseData] = await Promise.all([loadBase()]);
    setState({
      ...baseData,
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <MainContext.Provider
      value={{ state } as { state: Definitions.BasicStateType }}
      {...props}
    />
  );
}

function useMainContext() {
  const context = useContext(MainContext);
  if (context === undefined) {
    throw new Error('useMainContext must be used within a MainContextProvider');
  }

  const { state } = context;
  return { state };
}

export { MainContextProvider, useMainContext };
