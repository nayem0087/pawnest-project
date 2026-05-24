'use client';

import { createContext, useMemo } from "react"; 

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    
    const user = useMemo(() => ({
        email: "demo@gmail.com"
    }), []);

    const loading = false;

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;