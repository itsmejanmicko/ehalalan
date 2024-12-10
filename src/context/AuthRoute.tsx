import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; 

export interface IAuthRouteProps {
    children: React.ReactNode;
}

const AuthRoute: React.FC<IAuthRouteProps> = ({ children }) => {
    const { user, setUser } = useAuth();
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setUser({
                    uid: firebaseUser.uid,
                    email: firebaseUser.email || "",
                    lrn: "",
                    fullName: "",
                });
            } else {
                setUser(null);
                navigate("/");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [auth, setUser, navigate]);

    if (loading) return <p>Loading...</p>; 

    if (!user) {
        navigate("/");
        return null;
    }

    return <>{children}</>;
};

export default AuthRoute;
