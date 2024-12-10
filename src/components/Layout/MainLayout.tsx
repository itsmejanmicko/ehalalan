import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const MainLayout = ({children}:{children:React.ReactNode}) => {
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

export default MainLayout