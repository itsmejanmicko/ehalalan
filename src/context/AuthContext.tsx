import React, { createContext, useState, useContext, ReactNode } from "react";

interface IUser {
    uid: string;
    email: string;
    lrn: string;
    fullName: string;
}

interface AuthContextType {
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within a UserProvider");
    }
    return context;
};
