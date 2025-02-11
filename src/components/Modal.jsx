import React from 'react';

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-slate-700 opacity-95 flex justify-center items-center">
      <div className=" grid bg-white p-5 rounded-lg w-72 text-center opacity-100">
        {children}
        <button
        
          onClick={onClose}
          className=" mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Cancelar
        </button>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Guardar
        </button>
      </div>
    </div>
  );
}