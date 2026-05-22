'use client';

import { createContext, useMemo } from "react"; // 🌟 useMemo ইম্পোর্ট করলাম

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    
    // 🌟 সুপ্রিম ফিক্স: useMemo ব্যবহারের ফলে ব্যাক বা নেভিগেট করলেও ইউজার অবজেক্টের মেমরি রেফারেন্স চেঞ্জ হবে না।
    const user = useMemo(() => ({
        email: "demo@gmail.com"
    }), []);

    // loading স্টেটটা সব সময় false দিয়ে রাখলাম যেহেতু এটা ডেমো ডেটা
    const loading = false;

    // value এর ভেতরে user এবং loading দুইটাই পাস করে দিলাম
    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;