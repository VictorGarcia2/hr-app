import { useState, useEffect } from "react";
import { postService } from "../libs/axios/postService";
import { instance } from "../libs/axios/instance";
import { getProfile } from "../libs/axios/auth";
import { getCategories, getEvidence } from "../libs/axios/services";
import { useNavigate } from "react-router";


export default function ServiciosDeEstudiantes() {
  const [modalOpen, setModalOpen] = useState(false);

  const [nombreServicio, setNombreServicio] = useState("");
  const [horasServicio, setHorasServicio] = useState("");
  const [servicios, setServicios] = useState([]);

  const [profile, setProfile] = useState(null)
  const [categories, setCategories] = useState(null)
  console.log(profile)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      getProfile()
        .then((response) => setProfile(response.data))
        .catch(error => console.error(error))
      getCategories()
        .then((response) => setCategories(response.data))
        .catch(error => console.error(error))
    }, 2000)
  }, [])



  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(formData)
    postService(formData)
      .then(response => {
        console.log(response)
        e.target.reset()
      })
      navigate('/serviciosDeEstudiantes')
      .catch(error => console.log(error))
  }

  async function getService() {
    try {
      const { status, data } = await instance.get('/services')
      return { data, status }
    } catch (error) {
      throw error
    }
  }
  const [data, setData] = useState(null)
  console.log(data);
  useEffect(() => {
    getService()
      .then((response) => setData(response.data))
      .catch((error) => console.log(error))
  }, []);

  function showEvidence(id) {
    getEvidence(id)
      .then((response) => {
        const fileURL = URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
        window.open(fileURL, '_blank');
      })
      .catch(error => console.log(error))
  }

  const agregarServicios = () => {
    if (nombreServicio.trim() === "" || horasServicio.trim() === "" || isNaN(horasServicio) ||
      !evidence
    ) {
      console.log("Error: Datos inválidos, no se puede guardar.");
      return;
    };


    const nuevoServicio = {
      nombre: nombreServicio,
      horas: parseInt(horasServicio, 10),
      archivo: file,
    };
    console.log("Nuevo servicio a agregar:", nuevoServicio);

    setServicios([...servicios, nuevoServicio]);
    setNombreServicio("");
    setHorasServicio("");
    setFile(null)

  }

  return (
    <div className="flex flex-col relative min-h-screen p-4">
      <div className="flex justify-center">
        <span className="text-lg font-semibold">{servicios.reduce((total, servicio) => total + servicio.horas, 0)} Horas registradas</span>
      </div>
      <div className="py-10">
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-slate-500 text-white">
              <th className="border border-gray-400 p-2 text-center">
                Servicio
              </th>

              <th className="border border-gray-400 p-2 text-center">
                Horas Registradas
              </th>
              <th className="border border-gray-400 p-2 text-center">
                Descripcion
              </th>
              <th className="border border-gray-400 p-2 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((servicio) =>

                <tr  key={servicio.id}>
                  <td className="border border-gray-400 p-2 text-center">
                    {servicio.category.description}
                  </td>
                  <td className="border border-gray-400 p-2 text-center"> {servicio.amount_reported} </td>
                  <td onClick={() => showEvidence(servicio.id)} className="border border-gray-400 p-2 text-center">
                    evidencia
                  </td>
                </tr>
              )}


          </tbody>
        </table>
      </div>

      <button
        onClick={() => setModalOpen(true)}
        className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
      >
        Agregar Servicio
      </button>
      {/* apartir de aqui vamos a trabajar para
      agregar nuevo */}
      {modalOpen && (
        <form 
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="fixed inset-0 flex items-center justify-center bg-[#103c6c] bg-opacity-90">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-semibold mb-4">
                Agregar Nuevo Servicio
              </h2>
              <select
                name="category_id"
                id="category_id"
                className="select w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none"
                placeholder="Seleciona"
              >
                <option value="null" disabled selected>Elige la categoria</option>
                {categories &&
                  categories.map(opciones => (

                    <option key={opciones.id} value={opciones.id}>{opciones.name} </option>

                  ))

                }
              </select>
              {/* <input
                type="text"
                name="category_id"
                id="category_id"
                placeholder="Comentario"
                className="w-full p-2 border rounded mb-2"
                value={nombreServicio}
                onChange={(e) => setNombreServicio(e.target.value)}
              /> */}
              <input
                type="number"
                name="amount_reported"
                id="amount_reported"
                placeholder="Horas"
                className="w-full p-2 border rounded mb-4"
                value={horasServicio}
                onChange={(e) => setHorasServicio(e.target.value)}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, ''); // esta validacion ayuda a que se escriban solo numeros, no acepta letras ni simbolos especiales//
                }}
              />
              <textarea className="w-full p-2 border rounded mb-4 "

                id="description"
                name="description"

              />
              <div className="adjuntarArchivo mb-4 ">
                <label
                  htmlFor="file"
                  className="block text-sm font-medium text-gray-700"
                >
                  Adjuntar archivo
                </label>
                <input
                  type="file"
                  id="evidence"
                  name="evidence"
                  className="mt-1 block w-full text-sm text-gray-900 rounded-md border-black bg-slate-400"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-gray-300 px-4 py-2 rounded-lg"
                >
                  Cancelar
                </button>
                <button
                  /*  onClick={() => setModalOpen(false)} */
                  className="bg-green-500 text-white px-4 py-2 rounded-lg">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
