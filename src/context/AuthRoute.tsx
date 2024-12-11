import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; 
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/config";
import Loading from "../components/common/Loading";

export interface IAuthRouteProps {
    children: React.ReactNode;
}
const validGrades = Array.from({ length: 6 }, (_, i) => `Grade-${i + 7}`);

const AuthRoute: React.FC<IAuthRouteProps> = ({ children }) => {
    const { user, setUser } = useAuth();
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                let userFound = false;
                for (const grade of validGrades) {
                    const studentsRef = collection(db, 'users', grade, 'students');
                    const q = query(studentsRef, where('email', '==', firebaseUser.email));
                    const querySnapshot = await getDocs(q);

                    if (!querySnapshot.empty) {
                        const userData = querySnapshot.docs[0].data();
                        setUser({
                            uid: firebaseUser.uid,
                            email: firebaseUser.email || "",
                            lrn: querySnapshot.docs[0].id,
                            fullName: userData.fullName,
                            role: userData.role
                        });
                        userFound = true;
                        if (userData.role !== 'student') {
                            navigate("/");
                        }
                        break;
                    }
                }
                if (!userFound) {
                    setUser(null);
                    throw new Error("User not found");
                }
            } else {
                setUser(null);
                navigate("/");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [auth, setUser, navigate]);

    if (loading) return <div><Loading /></div>

    if (!user || user.role !== 'student') {
        return <p>Unauthorized access. Redirecting...</p>;
    }

    return <>{children}</>;
};

export default AuthRoute;