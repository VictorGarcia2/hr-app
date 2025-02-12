export function New() {
  const handleSubmit = (e) => {
    e.preventDefault();
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
          <h3>Role:</h3>
          <select
            className="select w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none"
            placeholder="Seleciona"
          >
            <option value={1}>Admin</option>
            <option value={2}>Estudiantes</option>
          </select>
        </div>
        <label htmlFor="text" className="mt-1">
          Controler:
          <input
            type="text"
            name="Controller"
            id={1}
            placeholder="eje: diego"
            className="w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none"
            required
          />
        </label>
        <div className=" mt-1">
          <h3>Pais:</h3>
          <select
            className="select w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none"
            placeholder="Seleciona"
          >
            <option value={1}>Ecuador</option>
            <option value={2}>Mexico</option>
          </select>
        </div>
        <div className=" mt-1">
          <h3>Reclutador:</h3>
          <select
            className="select w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none"
            placeholder="Seleciona"
          >
            <option value={1}>Diego</option>
            <option value={2}>Jose</option>
          </select>
        </div>
        <div className=" mt-1">
          <h3>Escuela:</h3>
          <select
            className="select w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none"
            placeholder="Seleciona"
          >
            <option value={1}>front-end</option>
            <option value={2}>Call Center</option>
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
