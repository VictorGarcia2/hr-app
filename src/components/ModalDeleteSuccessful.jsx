import React, { useState } from 'react';
import { CheckCircle } from './CheckCircle';
import { Link } from 'react-router';

export const ModalDeleteSuccessful = ({setIsOpen}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => setIsModalOpen(true);


  const closeModal = () =>{
    setIsModalOpen(false);
    setIsOpen(false)
  } 

  return (
    <>

      <button
        onClick={openModal}
        className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
      >
        Si, estoy seguro
      </button>


      <div
        className={`${isModalOpen ? 'block' : 'hidden'}  fixed inset-0 z-50 flex items-center justify-center bg-black`}
      >
        <div className="grid grid-cols-1 place-items-center bg-white opacity-100 rounded-lg shadow-lg p-6 w-full max-w-sm mx-10">
          <CheckCircle />
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            borrado exitosamente
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



