import React from 'react';

export const createContext = <ContextType>(name?: string) => {
  const context = React.createContext<ContextType | undefined>(undefined);

  function useContext() {
    const value = React.useContext(context);
    if (!value)
      throw new Error(
        `use${name}Context must be inside a ${name}Provider with a value`,
      );
    return value;
  }

  return [useContext, context.Provider] as const;
};
