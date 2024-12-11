import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAdmin } from "./PrivateContext";
import { useNavigate } from "react-router-dom";
import Loading from "../components/common/Loading";

export interface IPrivateProps {
    children: React.ReactNode;
}

export const PrivateRoute: React.FC<IPrivateProps> = ({ children }) => {
    const navigate = useNavigate();
    const { admin, setAdmin } = useAdmin();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseAdmin) => {
            if (firebaseAdmin) {
                const adminRef = collection(db, 'users');
                const q = query(adminRef, where('email', '==', firebaseAdmin.email));
                const querySnapshot = await getDocs(q);

                if (querySnapshot.empty) {
                    setAdmin(null);
                    setLoading(false);
                    navigate("/");
                    return;
                }

                const userData = querySnapshot.docs[0].data();
                setAdmin({
                    uid: firebaseAdmin.uid,
                    email: firebaseAdmin.email || "",
                    role: userData.role
                });

                if (userData.role !== 'admin') {
                    setLoading(false);
                    navigate("/");
                    return;
                }
            } else {
                setAdmin(null);
                setLoading(false);
                navigate("/");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [setAdmin, navigate]);

    if (loading) return <div><Loading /></div>

    if (!admin || admin.role !== 'admin') {
        return null;
    }

    return <>{children}</>;
};

export default PrivateRoute;