import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const MemoriesPage = () => {
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [Duration, setDuration] = useState(false);

  const detection = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detection);

    return () => {
      window.removeEventListener("resize", detection);
    };
  }, [windowDimension]);

  useEffect(() => {
    setTimeout(() => setDuration(true), 500);
    setTimeout(() => setDuration(false), 4500);
  }, []);

  return (
    <>
      {Duration && (
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
          tweenDuration={1000}
          initialVelocityY={100}
        />
      )}

      <ol className="relative border-l border-gray-200 ">
        <li className="mb-10 ml-6">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-amber-300 rounded-full ring-8 ring-white ">
            <svg
              className="w-3 h-3 text-amber-800 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 className="flex items-center mb-1 font-lobster text-xl mr-5 font-semibold text-amber-800">
            30-06-2022 | Fue un sueño?
          </h3>

          <p className="mb-4 font-indie-flower text-justify md:text-base lg:text-2xl text-xl font-semibold  text-gray-700">
            Un día más, levantarse con haber soñado la misma situación por
            varios años, siempre con un entorno diferente quizás la selva 🏞,
            quizás la playa 🏖 o solo la ciudad 🏙, siempre contigo al lado
            conversando de cualquier cosa, comiendo, riendo o simplemente
            mirando el paisaje, , posteriormente otro sueño extraño como un
            apocalipsis zombie 🧟‍♂️ o intentando pasar una prueba de magia para
            entrar en una escuela de magos 🧙‍♂️ y siempre terminando con batman
            levantándome a batilamidas 🐶, despertar, mirar mi celular y pensar que
            grandioso sueño he tenido nuevamente. 
            <br /><br />
            Pero esta vez no, esta vez fue
            real, en realidad ha sucedido, no sentir ira odio al despertar sino paz
            felicidad; sin embargo, después recuerdo no ha sido un sueño,
            pude haber sido mejor he esperado tanto por esto y me embarga la
            ira, pero no es malo solo me impulsa a mejorar para otras
            oportunidades. 
            <br /><br />
            Estoy muy agradecido, aunque el 29/06 te halla parecido un día mas,
            para a sido maravilloso. 
            <br /><br />
            Solo me queda decirte, no soy un terrorista 👳‍♂️
          </p>
        </li>

        <li className="mb-10 ml-6">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-amber-300 rounded-full ring-8 ring-white ">
            <svg
              className="w-3 h-3 text-amber-800 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 className="flex items-center mb-1 font-lobster text-xl mr-5 font-semibold text-amber-800">
            ######
          </h3>

          <p className="mb-4 font-indie-flower text-justify md:text-base lg:text-3xl text-xl font-semibold  text-gray-700"></p>
        </li>
      </ol>
    </>
  );
};

export default MemoriesPage;
