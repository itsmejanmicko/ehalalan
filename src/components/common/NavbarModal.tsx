import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { formValidation } from "../../services/form";



export default function NavbarModal({modalRef}:{modalRef:React.RefObject<HTMLDivElement>}) {
  const {user} = useAuth();
  const navigate = useNavigate();
  
  async function handleLogout() {
    await formValidation.logout();
    navigate('/');
  }
  
  return (
    <div
    ref={modalRef}
    className="absolute right-0 mt-3 sm:mt-8 w-48 p-3 bg-gray-700 text-md text-white rounded-lg shadow-lg">
   <p className="">{user?.email.split('@')[0]}</p>
    <button
     onClick={handleLogout}
     className="text-red-500 hover:text-red-400">
                  Logout
     </button>
    </div>
  )
}
