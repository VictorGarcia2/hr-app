import { useState } from "react";

export default function ServiciosDeEstudiantes() {
  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  return (
    <div className="flex flex-col relative min-h-screen p-4">
      <div className="flex justify-center">
        <span className="text-lg font-semibold">20 Horas registradas</span>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2 text-center">
                Llevar nombres al templo
              </td>
              <td className="border border-gray-400 p-2 text-center">10</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 text-center">
                Barrer calle
              </td>
              <td className="border border-gray-400 p-2 text-center">20</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        onClick={() => setModalOpen(true)}
        className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
      >
        Agregar Servicio
      </button>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#103c6c] bg-opacity-90">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">
              Agregar Nuevo Servicio
            </h2>
            <input
              type="text"
              placeholder="Nombre del servicio"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="number"
              placeholder="Horas"
              className="w-full p-2 border rounded mb-4"
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
                id="file"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-900 rounded-md border-black bg-slate-400"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded-lg"
              >
                Cancelar
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
