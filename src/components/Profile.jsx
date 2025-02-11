import React from "react";

export default function Profile() {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="bg-[#103C6C] border flex flex-col w-90 md:w-130 h-163 md:h-180 p-1 gap-3 md:gap-5 justify-center items-center rounded-lg">
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
                type="text"
                className="bg-white h-8 w-41 md:w-60 px-2 rounded-md "
              />
            </div>
            <div className="">
              <p className="text-white">Apellido:</p>
              <input
                type="text"
                className="bg-white h-8 w-41 md:w-60 px-2 rounded-md"
              />
            </div>
          </div>
          <div className="">
            <p className="text-white">Role:</p>
            <input
              type="text"
              className="bg-white h-8 md:w-122 w-85 px-2 rounded-md"
            />
          </div>
          <div className="">
            <p className="text-white">Email:</p>
            <input
              type="text"
              className="bg-white h-8 md:w-122 w-85 px-2 rounded-md"
            />
          </div>
          <div className="">
            <p className="text-white">Controlador:</p>
            <input
              type="text"
              className="bg-white h-8 md:w-122 w-85 px-2 rounded-md"
            />
          </div>
          <div className="">
            <p className="text-white">Pais:</p>
            <input
              type="text"
              className="bg-white h-8 md:w-122 w-85 px-2 rounded-md"
            />
          </div>
          <div className="">
            <p className="text-white">Reclutador:</p>
            <input
              type="text"
              className="bg-white h-8 md:w-122 w-85 px-2 rounded-md"
            />
          </div>
          <div className="">
            <p className="text-white">Escuela:</p>
            <input
              type="text"
              className="bg-white h-8 md:w-122 w-85 px-2 rounded-md"
            />
          </div>
          <div className="flex gap-8 m-4 justify-center">
            <button className="bg-red-500 w-30 h-10 rounded-lg text-white  active:bg-red-600 text-lg font-bold">
              Cancelar
            </button>
            <button className="bg-blue-500 w-30 h-10 rounded-lg text-white  active:bg-blue-600 text-lg font-bold">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
