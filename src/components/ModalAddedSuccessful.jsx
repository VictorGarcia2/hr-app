import React, { useState } from 'react';
import { CheckCircle } from './CheckCircle';

export const ModalAddedSuccessful = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>

      <button
        onClick={openModal}
        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Crear
      </button>


      <div
        className={`${isModalOpen ? 'block' : 'hidden'} opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-black`}
      >
        <div className="grid grid-cols-1 place-items-center bg-white rounded-lg shadow-lg p-6 w-full max-w-sm mx-10">
          <CheckCircle />
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Usuario creado exitosamente
          </h2>




          <button
            onClick={closeModal}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-10 max-w-36"
          >
            OK
          </button>
        </div>
      </div>
    </>
  );
};