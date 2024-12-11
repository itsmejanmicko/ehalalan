import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import { path } from "../constants/path";
import MainLayout from "../components/Layout/MainLayout";
import AuthRoute from "../context/AuthRoute";
import { UserProvider } from "../context/AuthContext";



const ControlPanel = lazy(() => import("../components/pages/ControlPanel"));
const LandingPage = lazy(() => import("../components/pages/LandingPage"));
const Vote = lazy(() => import("../components/pages/Vote"));

const LoadingFallback = () => <div>Loading...</div>; 

const useRouteElements = () => {
    const routeElements = useRoutes([
        {
            path: path.LANDINGPAGE,
            element: (
                <Suspense fallback={<LoadingFallback />}>
                    <LandingPage />
                </Suspense>
            ),
        },
        {
            path: path.CONTROLPANEL,
            element: (
                <Suspense fallback={<LoadingFallback />}>
                 <UserProvider> 
                    <AuthRoute>
                        <MainLayout>
                            <ControlPanel />
                        </MainLayout>
                    </AuthRoute>
                    </UserProvider>
                </Suspense>
            ),
        },
        {
            path: path.VOTE,
            element: (
                <Suspense fallback={<LoadingFallback />}>
                    <UserProvider> 
                    <AuthRoute>
                        <MainLayout>
                            <Vote />
                        </MainLayout>
                    </AuthRoute>
                    </UserProvider>
                </Suspense>
            ),
        },
    ]);

    return routeElements;
};

export default useRouteElements;
