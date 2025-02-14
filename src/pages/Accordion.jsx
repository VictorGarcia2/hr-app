import React, { useState, useEffect } from "react";
import { PencilButton } from "../components/PencilButton";
import { instance } from "../libs/axios/instance";
import { getEvidence } from "../libs/axios/services";

export default function Accordion() {
  const [openSection, setOpenSection] = useState(null);

  async function getService() {
    try {
      const { status, data } = await instance.get("/services");

      return { data, status };
    } catch (error) {
      throw error;
    }
  }
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    getService()
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);
  function showEvidence(id) {
    getEvidence(id)
      .then((response) => {
        const fileURL = URL.createObjectURL(
          new Blob([response.data], { type: "application/pdf" })
        );
        window.open(fileURL, "_blank");
      })
      .catch((error) => console.log(error));
  }

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <>
      {data &&
        data.map((servicio) => (
          <div
            className=" grid  grid-cols-1 place-self-center md:min-w-96 mt-10"
            id="accordion-collapse"
            data-accordion="collapse"
          >
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                onClick={() => toggleSection("accordion-collapse-body-1")}
                aria-expanded={openSection === "accordion-collapse-body-1"}
                aria-controls="accordion-collapse-body-1"
              >
                <span>{servicio.user.full_name}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 ${
                    openSection === "accordion-collapse-body-1"
                      ? "rotate-0"
                      : "rotate-180"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className={`${
                openSection === "accordion-collapse-body-1" ? "block" : "hidden"
              }`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              {data.filter(user => user.user.id).map((servicio, index) => ( 
    <div key={index} className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <span
        onClick={() => showEvidence(servicio.id)}
        className="text-blue-600 dark:text-blue-500 hover:underline"
      >
        {servicio.category.name}.pdf
      </span>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        {servicio.amount_reported} Horas de Servicio
      </p>
    </div>
  ))
}


              <div className="border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p className="p-5 mb-2 text-gray-500 dark:text-gray-400">
                  14 Horas Totales de Servicio
                </p>
                <PencilButton />
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
