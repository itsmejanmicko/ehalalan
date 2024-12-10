import Navbar from "../../Admin/Navbar/Navbar"
import Footer from "../Footer/Footer"



const AdminLayout = ({children}:{children:React.ReactNode}) => {
  return (
   <>
    <Navbar />
    <div className="pt-16">
    {children}
    </div>
    <Footer />
   </>
  )
}

export default AdminLayout