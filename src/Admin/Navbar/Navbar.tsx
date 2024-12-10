import { useState } from 'react';
import { User, Menu, X } from 'lucide-react';
import { useModal } from '../../helper/useHelper';
import NavbarLink from '../../components/common/NavbarLink';
import NavbarModal from '../../components/common/NavbarModal';



export default function AdminNavbar() {
    
  const { isShowModal, handleToggleModal, modalRef } = useModal();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => setMenuOpen(!isMenuOpen);
   
  return (
    <nav>
      <div className="fixed top-0 w-full h-16 text-white flex justify-between items-center px-10 font-extrabold z-50 bg-transparent backdrop-blur-md">
        <h1 className="font-bold text-3xl tracking-widest">EHalalan</h1>
        <div className="flex items-center  space-x-2 sm:space-x-4">
          {/* Hamburger Menu for Small Screens */}
          <div className="relative items-end flex left-8 sm:hidden">
          <button className="text-white ml-4" onClick={handleToggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>


          {/* Navigation Links (Hidden on Small Screens) */}
          <div className="hidden sm:flex items-center space-x-10">
            <NavbarLink navigate="/admin" label="Home" />
            <NavbarLink navigate="/admin/user" label="Users" />
            <NavbarLink navigate="/admin/candidates" label="Candidates" />
            <NavbarLink navigate="/admin/watcher" label="Watcher" />
          </div>

          {/* User Icon */}
          <div className="relative items-end flex sm:items-center space-x-2 left-8 ">
            <button onClick={handleToggleModal}>
              <User className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
            </button>
               <div className=''>
               {isShowModal && <NavbarModal modalRef={modalRef} />}
               </div>
          </div>
        </div>
      </div>

      {/* Slide-Out Mobile Menu */}
      {isMenuOpen && (
        <div
        className={`fixed top-0 left-0 w-1/2 h-full bg-[#1a0b2e]/90 text-white z-40 shadow-lg transform transition-transform duration-300 text-extrabold text-xl ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center mt-12 space-y-4 px-6 pt-16">
          <NavbarLink navigate="/controlpanel" label="Home" />
          <NavbarLink navigate="/vote" label="Vote" />
        </div>
      </div>
      
      )}
    </nav>
  );
}
