import React, { useState } from 'react';
import { PencilButton } from '../components/PencilButton';
import Filtro from '../components/Filtro';

export default function Accordion() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (sectionId) => {
        setOpenSection(openSection === sectionId ? null : sectionId);
    };

    return (
        <>
            
            <div className=' grid  grid-cols-1 place-self-center md:min-w-96 mt-10' id="accordion-collapse" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-1">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                        onClick={() => toggleSection('accordion-collapse-body-1')}
                        aria-expanded={openSection === 'accordion-collapse-body-1'}
                        aria-controls="accordion-collapse-body-1"
                    >
                        <span>Octaviano Tenorio</span>
                        <svg
                            data-accordion-icon
                            className={`w-3 h-3 shrink-0 ${openSection === 'accordion-collapse-body-1' ? 'rotate-0' : 'rotate-180'}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div
                    id="accordion-collapse-body-1"
                    className={`${openSection === 'accordion-collapse-body-1' ? 'block' : 'hidden'}`}
                    aria-labelledby="accordion-collapse-heading-1"
                >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">

                        <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">Document1.PDF</a>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">5 Horas de Servicio</p>

                    </div>
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">Document2.PDF</a>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">3 Horas de Servicio</p>
                    </div>
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">Document3.PDF</a>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">6 Horas de Servicio</p>
                    </div>
                    <div className='border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
                        <p className="p-5 mb-2 text-gray-500 dark:text-gray-400">14 Horas Totales de Servicio</p>
                        <PencilButton />
                    </div>

                </div>

                <h2 id="accordion-collapse-heading-2">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                        onClick={() => toggleSection('accordion-collapse-body-2')}
                        aria-expanded={openSection === 'accordion-collapse-body-2'}
                        aria-controls="accordion-collapse-body-2"
                    >
                        <span>Federico Rayon</span>
                        <svg
                            data-accordion-icon
                            className={`w-3 h-3 shrink-0 ${openSection === 'accordion-collapse-body-2' ? 'rotate-0' : 'rotate-180'}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div
                    id="accordion-collapse-body-2"
                    className={`${openSection === 'accordion-collapse-body-2' ? 'block' : 'hidden'}`}
                    aria-labelledby="accordion-collapse-heading-2"
                >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">

                        <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">DocumentA.PDF</a>

                        <p className="mb-2 text-gray-500 dark:text-gray-400">5 Horas de Servicio</p>


                    </div>
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">DocumentB.PDF</a>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">3 Horas de Servicio</p>

                    </div>
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">DocumentC.PDF</a>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">6 Horas de Servicio</p>

                    </div>
                    <div className='border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
                        <p className="p-5 mb-2 text-gray-500 dark:text-gray-400">14 Horas Totales de Servicio</p>
                        <PencilButton />
                    </div>
                </div>

                <h2 id="accordion-collapse-heading-3">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                        onClick={() => toggleSection('accordion-collapse-body-3')}
                        aria-expanded={openSection === 'accordion-collapse-body-3'}
                        aria-controls="accordion-collapse-body-3"
                    >
                        <span>Miguel Vicencio</span>
                        <svg
                            data-accordion-icon
                            className={`w-3 h-3 shrink-0 ${openSection === 'accordion-collapse-body-3' ? 'rotate-0' : 'rotate-180'}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div
                    id="accordion-collapse-body-3"
                    className={`${openSection === 'accordion-collapse-body-3' ? 'block' : 'hidden'}`}
                    aria-labelledby="accordion-collapse-heading-3"
                >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">

                        <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">DocumentQ1.PDF</a>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">5 Horas de Servicio</p>

                    </div>
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">DocumentW1.PDF</a>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">3 Horas de Servicio</p>
                    </div>
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">DocumentE1.PDF</a>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">6 Horas de Servicio</p>
                    </div>
                    <div className='border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
                        <p className="p-5 mb-2 text-gray-500 dark:text-gray-400">14 Horas Totales de Servicio</p>
                        <PencilButton />
                    </div>
                </div>
            </div>
        </>
    );
}