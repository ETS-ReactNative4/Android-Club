import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export default function ContextProvider({children}) {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{count, setCount}}>
            {children}
        </CounterContext.Provider>
    )
}

export function useCounterContext() {
    return useContext(CounterContext);
}
