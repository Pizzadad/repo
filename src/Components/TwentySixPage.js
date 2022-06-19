import React, { useEffect, useState } from "react";

const TwentySixPage = () => {
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
          src="https://drive.google.com/uc?export=view&id=1mP8IJjA2vKEio57uZNKAZ74KXp_k511G"
        />
      </div>
      <p className="lg:w-2/3 w-full font-indie-flower text-justify text-xl font-semibold  text-gray-700">
        Hi antes que nada debo señalar que e idealizado este momento por{" "}
        {dateValue}
        , así que posiblemente este sea mi única oportunidad de tenerte en
        frente, lo que quiero pedirte es algo que de seguro ya te das una idea
        😅.
        <br />
        <br />
        Es mas que obvio que aun te tengo presente a pesar de todos estos años,
        quizás estas dudando ahora mismo, pero creo que es evidencia el haberte
        escrito todos los años hasta ahora demostrando que lo mencionado es
        sincero.
        <br />
        <br />
        Aunque siempre e tratado de no incomodarte porque andabas en lo tuyo y
        no quería serte molestia con este tema, pero ahora que ya has terminado
        puedo molestarte muajaja 🧐. Sin embargo, yo soy consciente que lo que
        siento, tu no lo sientes y esta bien es normal, porque solo un tipo raro
        va a estar al pendiente y tener presente un cariño de hace
        aproximadamente 10 años 🧟‍♂️.
        <br />
        <br />
        Pero todo eso no es lo que te quiero decir, lo que te quiero pedir es un
        par de oportunidades de poder demostrarte nuevamente que puedo brindarte
        sentimientos reales, sinceros y todo lo que este a mi alcance hacia ti,
        aunque no me gustaría que te sientas comprometida a nada; es decir, si
        no te parece o simplemente no quieres o quizás tengas a alguien mas
        ahora mismo en tu vida, no habría problema me dices que no o no se
        comenta sobre el tema, es mas de igual manera estaré para ti como una
        gran amistad si me lo permites. En caso si te parezca mi petición, solo
        te pido me escribas mencionándome que quieres salir.
        <br />
        <br />
        <span className="text-center text-xs line-through">
          Probablemente no sea el mejor speech pero tengo que admitir que
          siempre me lo e repetido para poder decírtelo cuando te vea
          nuevamente.
        </span>
      </p>
    </div>
  );
};

export default TwentySixPage;
