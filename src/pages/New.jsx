import { createUser } from "../libs/axios/getUsers";
import { getRole } from "../libs/axios/dropDown";
import { getController } from "../libs/axios/dropDown";
import { getCountry } from "../libs/axios/dropDown";
import { getRecrutier } from "../libs/axios/dropDown";
import { getSchools } from "../libs/axios/dropDown";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
export function New() {
  const navigate = useNavigate()

  const  [roles, setRoles]  = useState(null)
  useEffect(() => {
    getRole()
    .then(response => {
      setRoles(response.data)
    })
    .catch(error => console.error(error))
  }, [])
  const  [controller, setController]  = useState(null)
  useEffect(() => {
    getController()
    .then(response => {
      setController(response.data)
    })
    .catch(error => console.error(error))
  }, [])
  const  [country, setCountry]  = useState(null)
  useEffect(() => {
    getCountry()
    .then(response => {
      setCountry(response.data)
    })
    .catch(error => console.error(error))
  }, [])
  const [recrutier, setRecrutier] = useState(null)
  useEffect(() => {
    getRecrutier()
    .then(response => {
      setRecrutier(response.data)
    })
    .catch(error => console.error(error))
  }, [])
  const [schools, setSchools] = useState(null)
  useEffect(() => {
    getSchools()
    .then(response => {
      setSchools(response.data)
    })
    .catch(error => console.error(error))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const newUser = {
      "f_name": formData.get('name'),
      "s_name": "",
      "f_lastname": formData.get('lastname'),
      "s_lastname": "",
      "email": formData.get('email'),
      "role_id":formData.get('role'),
      "controller_id": formData.get('controller'), // solo para estudiantes
      "country_id": formData.get('country'), // solo para estudiantes
      "recruiter_id": formData.get('recrutier'), // solo para estudiantes
      "password":formData.get('password'),
      "schools": [  // cuando es un estudiantes solo puede tener una escuela asignada
          formData.get('schools')
      ]// El administrador no tiene escuelas asignadas
      
  }
    const { status } = await createUser(newUser)
    if (status === 201) {
      navigate('/estudiantes')
      return
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="shadow-md p-8 w-[440px] bg-white rounded-md flex flex-col"
      >
        <h1 className="font-bold text-4xl text-center">Nuevo Usuario</h1>
        <fieldset className="flex gap-2">
          <label htmlFor="name" className="mt-5">
            Nombre:
            <input
              type="text"
              name="name"
              id="name"
              className="w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none"
              placeholder="eje: Juan"
              required
            />
          </label>
          <label htmlFor="lastname" className="mt-5">
            Apellido:
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none"
              placeholder="eje: Santiago"
              required
            />
          </label>

        </fieldset>
        <div className=" mt-1">
          <div>
            <label htmlFor="lastname" className="mt-5">
              Telefono:
              <input
                type="text"
                name="phone"
                id="phone"
                className="w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none"
                placeholder="eje: 1234567890"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, ''); // esta validacion ayuda a que se escriban solo numeros, no acepta letras ni simbolos especiales//
                }}
                required
              />
            </label>
          </div>
          <h3>Role:</h3>
          <select
            className="select w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none"
            placeholder="Seleciona"
            name="role"
            id="role"
          >
            <option value="null" disabled selected>Elige un role</option>
            {roles && 
              roles.map(role => <option key={role.id} value={role.id}>{role.name}</option>)}
          </select>
        </div>
        <label htmlFor="text" className="mt-1">
          Controler:
          <select
            className="select w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none"
            placeholder="Seleciona"
            name="controller"
            id="controller"
          >
            <option value="null" disabled selected>Elige un controller</option>
            {controller && 
              controller.map(controller => <option key={controller.id} value={controller.id}>{controller.full_name}</option>)}
          </select>
        </label>
        <div className=" mt-1">
          <h3>Pais:</h3>
          <select
            className="select w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none"
            placeholder="Seleciona"
            name="country"
            id="country"
          >
            <option value="null" disabled selected>Elige un Pais</option>
            {country && 
              country.map(country => <option key={country.id} value={country.id}>{country.name}</option>)}
          </select>
        </div>
        <div className=" mt-1">
          <h3>Reclutador:</h3>
          <select
            className="select w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none"
            placeholder="Seleciona"
            name="recrutier"
            id="recrutier"
          >
            <option value="null" disabled selected>Elige un Reclutador</option>
            {recrutier && 
              recrutier.map(recrutier => <option key={recrutier.id} value={recrutier.id}>{recrutier.full_name}</option>)}
          </select>
        </div>
        <div className=" mt-1">
          <h3>Escuela:</h3>
          <select
            className="select w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none"
            placeholder="Seleciona"
            name="schools"
            id="schools"
          >
            <option value="null" disabled selected>Elige un Escuela</option>
            {schools && 
              schools.map(schools => <option key={schools.id} value={schools.id}>{schools.name}</option>)}
            
          </select>
        </div>
        <label htmlFor="email" className="mt-1">
          Correo:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="eje: example@mail.com"
            className="w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none"
            required
          />
        </label>

        <label htmlFor="password" className="mt-1">
          Contraseña:
          <input
            type="password"
            name="password"
            id="password"
            placeholder="************"
            className="w-full shadow-md rounded-md h-9 px-2 border border-gray-400"
            required
          />
        </label>

        <div className="flex justify-end w-full pt-8 px-2 gap-4">
          <button
            type="submit"
            className="bg-red-600 px-8 py-2 rounded-md font-bold text-white hover:bg-red-700 active:bg-red-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 px-8 py-2 rounded-md font-bold text-white hover:bg-blue-700 active:bg-blue-800"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
