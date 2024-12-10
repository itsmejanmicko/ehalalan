
import { Link, useLocation } from 'react-router-dom'


export default function NavbarLink({navigate, label}: {navigate: string, label: string}) {
  const location = useLocation();
    const pathname = location.pathname;
  return (
    <Link to={navigate} className={`${pathname=== navigate ? "bg-gradient-to-tr from-purple-600 to-pink-600":""}text-white hover:text-gray-300`}>
      {label}
  </Link>
  )
}
