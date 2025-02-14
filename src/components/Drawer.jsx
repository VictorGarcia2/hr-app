import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { logOut } from "../libs/axios/auth";
import { getProfile } from "../libs/axios/getProfile";
import { AuthContext } from "./layouts/AuthLayout";
const routes = [
  // {
  //   name: "Dashboard",
  //   route: "/",
  //   role: ["Admin", "Student"]
  // },
  {
    name: "Profile",
    route: "/profile",
    role: ["Admin", "Student"]
  },
  {
    name: "Estudiantes",
    route: "/estudiantes",
    role: ["Admin"]
  },
  {
    name: "Servicios",
    route: "/servicios",
    role: ["Admin"]
  },
  {
    name: "Servicios De Estudiantes",
    route: "/serviciosDeEstudiantes",
    role: ["Student"]
  },
]
export function Drawer() {
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user , setUser] = useState([])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const onLogOut = ()=>{
    logOut()
    .then(data => {
      if (data.status === 200) {
        navigate('/login')    
      }
    })
    .catch(error => console.error(error))
    
  }
  useEffect(()=>{
  getProfile()
  .then(response => setUser(response.data))
  .catch(error => console.error(error))  }, []
  )
  const { profile } = useContext(AuthContext)
  
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-white font-bold text-xl">FUNVAL</span>
        <button onClick={toggleSidebar} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 z-50 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-4 relative">
          <button
            onClick={toggleSidebar}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="space-y-4 mt-8">
          {routes.filter((route) => route.role.includes(profile.role.name)).map(
          r =>
            <li key={r.name} className='hover:underline'>
              <Link to={r.route}>
                {r.name}
              </Link>
            </li>

        )}
          </ul>
        </div>
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
          <div className="flex items-center space-x-2">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Foto de perfil"
              className="rounded-full h-8 w-8"
            />
            <div>
              <Link to="/profile" className="block">{user.f_name}</Link>
              <button onClick={onLogOut} className="block text-gray-400 hover:text-white">
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
