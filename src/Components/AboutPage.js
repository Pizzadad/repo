import React, { useEffect, useState } from "react";

const AboutPage = () => {

  const [dateValue, setDateValue] = useState("A");

  useEffect(() => {
    calcDate();
  }, []);

  const calcDate = () => {
    let startDate = new Date("2012-05-08");
    let diffDate = new Date(new Date() - startDate);
    let result =
      diffDate.toISOString().slice(0, 4) -
      1970 +
      " años con " +
      diffDate.getMonth() +
      `${diffDate.getMonth() === 1 ? " mes y " : " meses y "} ` +
      (diffDate.getDate() - 1) +
      " dias";
    setDateValue(result);
  };
  
  return (
    <div className="flex flex-row w-full space-x-3">
      <div className="lg:flex hidden lg:w-1/3 w-full lg:justify-center lg:items-center">
        <img
          alt="gallery"
          className="block object-contain  object-center w-1/2 h-full rounded-lg"
          
          src="https://drive.google.com/uc?export=view&id=1eM-hJ2O0mpCCK8q_DvOrDv-KELXt8uhc"
        />
      </div>
      <p className="lg:w-2/3 w-full font-indie-flower text-justify md:text-base lg:text-3xl text-xl font-semibold  text-gray-700">
        Quizás te preguntes porque despues de {dateValue} quise verte, en si yo no busco
        escribirte/hablarte solo para avisarte cuando hallan reuniones de promo
        o para motivos parecidos o cosas banales. 
        <br /><br />
        En si jamás e querido dejar de escribirte o
        hablarte, porque obviamente eres muy muy especial para mí, ya te lo mencione anteriormente 😅. 
        <br /><br />
        Entonces porque que
        es lo que busco, lo que quiero es conocer de tí todos los días que
        te encuentras bien y que eres feliz, si esta en mi poder darte
        todo a mi alcance para evitarte preocupaciones y apoyarte en todo lo que
        necesites, gustoso de hacerlo 🧞‍♂️. 
        <br /><br />
        Esa es la razón.
        <br /><br />
        <br /><br />
   
      </p>
    </div>
  );
};

export default AboutPage;
