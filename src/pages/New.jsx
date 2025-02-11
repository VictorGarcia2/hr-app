export function New() {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='w-full h-screen bg-gray-100 flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='shadow-md p-8 w-[440px] bg-white rounded-md flex flex-col'>
        <h1 className='font-bold text-4xl text-center'>Nuevo Usuario</h1>

        <fieldset className='flex gap-2'>
          <label htmlFor="name" className='mt-8'>
            Nombre:
            <input
              type="text"
              name="name"
              id="name"
              className='w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none'
              placeholder='eje: Juan'
              required
            />
          </label>
          <label htmlFor="lastname" className='mt-8'>
            Apellido:
            <input
              type="text"
              name="lastname"
              id="lastname"
              className='w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none'
              placeholder='eje: Santiago'
              required
            />
          </label>
        </fieldset>
        <div className=" mt-8">
          <h3>Role:</h3>
          <select className="select w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none" placeholder="Seleciona">
            <option value={1}>Admin</option>
            <option value={2}>Estudiantes</option>
          </select>
        </div>
        <label htmlFor="email" className='mt-8'>
          Correo:
          <input
            type="email"
            name="email"
            id="email"
            placeholder='eje: example@mail.com'
            className='w-full shadow-md rounded-md h-9 px-2 border border-gray-400 disabled:border-none'
            required
          />
        </label>

        <label htmlFor="password" className='mt-8'>
          Contraseña:
          <input
            type="password"
            name="password"
            id="password"
            placeholder='************'
            className='w-full shadow-md rounded-md h-9 px-2 border border-gray-400'
            required
          />
        </label>

        <div className='flex justify-end w-full pt-8 px-2 gap-4'>
          <button type='submit' className='bg-red-600 px-8 py-2 rounded-md font-bold text-white hover:bg-red-700 active:bg-red-800'>
            Cancel
          </button>
          <button type='submit' className='bg-blue-600 px-8 py-2 rounded-md font-bold text-white hover:bg-blue-700 active:bg-blue-800'>
            Save
          </button>
        </div>


      </form>
    </div>
  )
}