import React from "react";
import { useEffect, useState } from "react";
import { getProfile } from "../libs/axios/getProfile";
export default function Profile() {

  const [edition, setEdition] = useState(true)
  const [profile, setProfile] = useState(null)
  const [student, setStudent] = useState(null)
  
  useEffect(() => {
    setTimeout(() => {
      getProfile()
        .then((response) => {
          if (response.data.role.name === "Admin") {
            setProfile(response.data)
          } else if(response.data.role.name === "Student") {
            setStudent(response.data)
          }
        })
        .catch(error => console.error(error))
    }, 2000)
  }, [])

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        {profile &&
          <div className="bg-[#103C6C] border flex flex-col w-90 md:w-130 h-auto p-1 gap-3 md:gap-5 justify-center items-center rounded-lg">
            <div className="flex flex-col justify-center w-full gap-3 md:gap-2">
              <div className="flex justify-end">
                <span className="font-bold pe-3 text-white">edit</span>
              </div>
              <div className="flex justify-center">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                  Perfil
                </h1>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="">
                <p className="text-white">Nombre:</p>
                <input
                  disabled={edition}
                  value={profile.f_name}
                  type="text"
                  className="bg-white h-8 w-41 md:w-60 px-2 rounded-md "
                />
              </div>
              <div className="">
                <p className="text-white">Apellido:</p>
                <input
                  disabled={edition}
                  value={profile.f_lastname}
                  type="text"
                  className="bg-white h-8 w-41 md:w-60 px-2 rounded-md"
                />
              </div>
            </div>
            <div className="">
              <p className="text-white">Role:</p>
              <input
                disabled={edition}
                value={profile.role.name}
                type="text"
                className="bg-white h-8 md:w-122 w-85 px-2 rounded-md"
              />
            </div>
            <div className="">
              <p className="text-white">Email:</p>
              <input
                disabled={edition}
                value={profile.email}
                type="text"
                className="bg-white h-8 md:w-122 w-85 px-2 rounded-md"
              />
            </div>
            <div className="flex gap-8 m-4 justify-center">
              <button disabled={edition} className="bg-red-500 w-30 h-10 rounded-lg text-white  active:bg-red-600 text-lg font-bold disabled:bg-gray-400">
                Cancelar
              </button>
              <button disabled={edition} className="bg-blue-500 w-30 h-10 rounded-lg text-white  active:bg-blue-600 text-lg font-bold disabled:bg-gray-400">
                Guardar
              </button>
            </div>
          </div>
        }
        {student &&
          <div className="bg-[#103C6C] border flex flex-col w-90 md:w-130 h-auto mt-10 p-1 gap-3 md:gap-5 justify-center items-center rounded-lg">
            <div className="flex flex-col justify-center w-full gap-3 md:gap-2">
              <div className="flex justify-end">
                <span className="font-bold pe-3 text-white">edit</span>
              </div>
              <div className="flex justify-center">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                  Perfil
                </h1>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="">
                <p className="text-white">Nombre:</p>
                <input
                  disabled={edition}
                  value={student.f_name}
                  type="text"
                  className="bg-white h-8 w-41 md:w-60 px-2 rounded-md "
                />
              </div>
              <div className="">
                <p className="text-white">Apellido:</p>
                <input
                  disabled={edition}
                  value={student.f_lastname}
                  type="text"
                  className="bg-white h-8 w-41 md:w-60 px-2 rounded-md"
                />
              </div>
            </div>
            <div className="">
              <p className="text-white">Role:</p>
              <input
                disabled={edition}
                value={student.role.name}
                type="text"
                className="bg-white h-8 md:w-122 w-85 px-2 rounded-md"
              />
            </div>
            <div className="">
              <p className="text-white">Email:</p>
              <input
                disabled={edition}
                value={student.email}
                type="text"
                className="bg-white h-8 md:w-122 w-85 px-2 rounded-md"
              />
            </div>
            <div className="">
              <p className="text-white">Controlador:</p>
              <input
                disabled={edition}
                value={student.student.controller.full_name}
                type="text"
                className="bg-white h-8 md:w-122 w-85 px-2 rounded-md"
              />
            </div>
            <div className="">
              <p className="text-white">Pais:</p>
              <input
                disabled={edition}
                value={student.student.country.name}
                type="text"
                className="bg-white h-8 md:w-122 w-85 px-2 rounded-md"
              />
            </div>
            <div className="">
              <p className="text-white">Reclutador:</p>
              <input
                disabled={edition}
                value={student.student.recruiter.full_name}
                type="text"
                className="bg-white h-8 md:w-122 w-85 px-2 rounded-md"
              />
            </div>
            <div className="">
              <p className="text-white">Escuela:</p>
              <input
                disabled={edition}
                value={student.schools[0].name}
                type="text"
                className="bg-white h-8 md:w-122 w-85 px-2 rounded-md"
              />
            </div>
            <div className="flex gap-8 m-4 justify-center">
              <button disabled={edition} className="bg-red-500 w-30 h-10 rounded-lg text-white  active:bg-red-600 text-lg font-bold disabled:bg-gray-400">
                Cancelar
              </button>
              <button disabled={edition} className="bg-blue-500 w-30 h-10 rounded-lg text-white  active:bg-blue-600 text-lg font-bold disabled:bg-gray-400">
                Guardar
              </button>
            </div>
          </div>
        }
      </div>
    </>
  );
}
