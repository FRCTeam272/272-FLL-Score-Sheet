import React, { createContext, useContext, useState } from 'react';

// Create a context
const ArrayContext = createContext();

// Create a provider component
export function ScoreProvider({ children }) {
  const [scores, setScores] = useState([]);

  const updateValue = (index, value) => {
    let temp = [...scores]
    temp[index] = value;
    setScores([...temp]);
  };

  return (
    <ArrayContext.Provider value={{ scores, updateValue }}>
      {children}
    </ArrayContext.Provider>
  );
}

export function useScoreContext() {
    return useContext(ArrayContext);
}