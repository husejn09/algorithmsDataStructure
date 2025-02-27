import React, { createContext, useContext, useState } from 'react';

const ViewContext = createContext();

export function ViewProvider({ children }) {
    const [view, setView] = useState("main"); 

    return (
        <ViewContext.Provider value={{ view, setView }}>
            {children}
        </ViewContext.Provider>
    );
}

export function useView() {
    return useContext(ViewContext);
}
