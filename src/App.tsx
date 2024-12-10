

import useAdminRoute from './route/useAdminRoute';
import useRouteElements from './route/useRouteElements'



export default function App() {
  const routeElements = useRouteElements();
  const adminRoute = useAdminRoute();

  return (
   <>
    <main className='min-h-screen bg-[#1a1333] bg-gradient-to-b from-[#1a1333] to-[#0c0817] font-poppins '>
   
    {routeElements}
    
    {adminRoute}
    </main>
   </>
  )
}
