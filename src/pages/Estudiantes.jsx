

import { useEffect, useState } from "react";
import { getUsers } from "../libs/axios/getUsers"
import { useNavigate } from "react-router";
export function Estudiantes() {
  const [data, setData] = useState(null)
  console.log(data);
  useEffect(() => {
    getUsers()
    .then((response) => setData(response.data))
    .catch((error) => console.log(error))

  }, []);
   const navigate = useNavigate()
   const handleClick = (() =>{
    navigate('/estudiantes/new')
   })


  return (
    <div className="container p-4">
      <table className="table-auto w-full border border-gray-300 border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2 hidden md:table-cell">
              Reclutador
            </th>
            <th className="border px-4 py-2 hidden md:table-cell ">
              Controller
            </th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {data&&
            data.map(lista =>
            <tr className="">
            <td className="flex items-center px-2">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p>{lista.full_name} </p>
                <p>{lista.email} </p>
              </div>
            </td>
            <td className="self-center">
              <span>Completado</span>
            </td>
            <td className="hidden md:table-cell">
              <span>reclutador</span>
            </td>
            <td className="hidden md:table-cell">
              <span>Controller</span>
            </td>
            <td>
              <button>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLKcIYHj95NCPVND3e_Vk6wacFdImWBEaSwQ&s"
                  alt="delete-action"
                  className="w-5"
                />
              </button>
            </td>
          </tr>

            )
          }
          
        </tbody>
      </table>
      <button className="flex justify-end rounded-full pt-2" onClick={handleClick}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74Hj8swURNBBKwqS6Nj7dypcf-a3q4amYag&s"
          alt="añadir"
          className="w-8"
        />
      </button>
    </div>
  );
}


