import React, { useState } from 'react';

import { Pencil } from './Pencil';
import {Modal} from './Modal'


export function PencilButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>

            <div className='text-end mr-10 mb-10 pb-3 w-[90%]  '>
                <button
                    onClick={openModal}
                    className="bg-white rounded-full p-1 border-none cursor-pointer"
                >
                    <Pencil />
                </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                            <h2 className="text-xl font-bold mb-4">Horas registradas</h2>
                            <p className="text-gray-700">16 Horas</p>
                            <form className='grid justify-center ' action="">
                                <label htmlFor="">Horas aprobadas</label>
                                <input className='bg-slate-400 mt-2' type="number" />
                                <label htmlFor="observacion">Observaciones</label>
                                <textarea className='bg-slate-400 mt-2' name="observacion" id="observacion"></textarea>
            
            
                            </form>
            
                        </Modal>
        </div>
    );
}