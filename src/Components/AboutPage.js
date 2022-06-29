import React from "react";

const AboutPage = () => {
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
        Quizás te preguntes lo que busco realmente, yo no busco
        escribirte/hablarte solo para avisarte cuando hallan reuniones de promo
        o para motivos parecidos o cosas banales. 
        <br /><br />
        En si jamás e querido dejar de escribirte o
        hablarte, porque obviamente eres muy muy especial para mí ya te lo mencione anteriormente 😅. 
        <br /><br />
        Entonces que
        es lo que busco, lo que busco es saber de ti todos los días, saber que
        te encuentres bien y saber que eres feliz, si esta en mi poder darte
        todo a mi alcance para evitarte preocupaciones y apoyarte en todo lo que
        necesites, gustoso de hacerlo 🧞‍♂️.
        <br /><br />
        <br /><br />
        <br /><br />
        <br />
      </p>
    </div>
  );
};

export default AboutPage;
