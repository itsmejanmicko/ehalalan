import { useRoutes } from "react-router-dom"
import AdminPanel from "../Admin/components/pages/AdminPanel"
import AdminLayout from "../components/Layout/AdminLayout"
import { path } from "../constants/path"
import AllUser from "../Admin/components/pages/AllUser"
import Candidates from "../Admin/components/pages/Candidates"
import Watcher from "../Admin/components/pages/Watcher"


const useAdminRoute = () =>{

    const  adminRoute = useRoutes([
        {
            path:'/admin',
            index:true,
            element:(
                <AdminLayout>
                    <AdminPanel />
                </AdminLayout>
            )
        },{
            path:path.ALLUSER,
            element:(
                <AdminLayout>
                    <AllUser />
                </AdminLayout>
            )
        },{
            path:path.CANDIDATES,
            element:(
                <AdminLayout>
                    <Candidates />
                </AdminLayout>
            )
        },
         {
            path:path.WATCHER,
            element:(
                <AdminLayout>
                    <Watcher />
                </AdminLayout>
            )
         }
    ])
    return adminRoute
}

export default useAdminRoute