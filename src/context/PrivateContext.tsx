import React, { createContext } from "react";


interface IAdmin {
    uid: string;
    email: string;
    role: string;
}

interface AdminContextType {
    admin: IAdmin | null;
    setAdmin: React.Dispatch<React.SetStateAction<IAdmin | null>>;
}
const AdminContext = createContext<AdminContextType | null>(null);
export const AdminProvider:React.FC<{children:React.ReactNode}> = ({children})=>{
    const [admin, setAdmin] = React.useState<IAdmin | null>(null);

    return(
        <AdminContext.Provider value={{admin, setAdmin}}>
            {children}
        </AdminContext.Provider>
    )
}

export const useAdmin = ()=>{

    const context = React.useContext(AdminContext);
    if(!context){
        throw new Error("useAdmin must be used within a AdminProvider");
    }
    return context;
}
