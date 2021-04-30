import React, { useRef, useState } from "react";
import "./Screen.css";

export default function About() {
  const pastRef = useRef(null);
  const presentRef = useRef(null);
  const futureRef = useRef(null);

  const [pastIsClicked, setPastIsClicked] = useState(false);
  const [presentIsClicked, setPresentIsClicked] = useState(false);
  const [futureIsClicked, setFutureIsClicked] = useState(false);

  const toggleColorTheme = (ref) => {
    // let firstChild = ref.current.children[0]; // Le premier élément de la section comporte le titre
    // let secondChild = ref.current.children[1]; // Le second élément de la section comporte le body

    if (ref === pastRef) {
      if (!pastIsClicked) {
        ref.current.style.backgroundColor = `var(--orange)`; // Change la couleur de fond de la section
        ref.current.style.color = `var(--dark)`; // Change la couleur du texte
      } else {
        ref.current.style.backgroundColor = `var(--dark)`; // Réinitialise la couleur de fond de la section
        ref.current.style.color = `var(--orange)`; // Réinitialise la couleur du texte
      }
      setPastIsClicked(!pastIsClicked);
    } else if (ref === presentRef) {
      if (!presentIsClicked) {
        ref.current.style.backgroundColor = `var(--orange)`; // Change la couleur de fond de la section
        ref.current.style.color = `var(--dark)`; // Change la couleur du texte
      } else {
        ref.current.style.backgroundColor = `var(--dark)`; // Réinitialise la couleur de fond de la section
        ref.current.style.color = `var(--orange)`; // Réinitialise la couleur du texte
      }
      setPresentIsClicked(!presentIsClicked);
    } else if (ref === futureRef) {
      if (!futureIsClicked) {
        ref.current.style.backgroundColor = `var(--orange)`; // Change la couleur de fond de la section
        ref.current.style.color = `var(--dark)`; // Change la couleur du texte
      } else {
        ref.current.style.backgroundColor = `var(--dark)`; // Réinitialise la couleur de fond de la section
        ref.current.style.color = `var(--orange)`; // Réinitialise la couleur du texte
      }
      setFutureIsClicked(!futureIsClicked);
    }
  };

  return (
    <div className="bodyScreen">
      <div className="avatarContainer">
        <div className="avatar"></div>
      </div>

      <h1 className="headerScreen">A PROPOS DE MOI</h1>
      <div className="sectionScreen" ref={pastRef}>
        <div className="headerSectionScreen">
          <h2>Mon passé :</h2>
          <button
            className="buttonSection"
            onClick={() => toggleColorTheme(pastRef)}
          >
            Changer la couleur
          </button>
        </div>
        <div className="bodySectionScreen">
          <p>
            Depuis mon arrivée dans ce monde en avril 1989, j'ai grandit dans
            les quartiers populaires de Marseille, les quartiers nords pour ceux
            qui connaissent, dans lesquels je me suis forgé un mental solide et
            une condition physique prêt à n'importe quel challenge.
          </p>
          <p>
            Cet environnemnt m'a permis d'élargir mon esprit et de{" "}
            <b className="textBold">devenir une personne bienveillante</b>.
          </p>
          <p>
            Ayant baigné dans le sport toute ma vie et notamment dans la
            <b className="textBold"> natation et le sauvetage sportif</b>, mon
            enfance a été rythmé par les entraînements et les compétitions.
          </p>
          <p>
            J'ai pu <b className="textBold">m'épanouir</b> au travers des
            rencontres avec les collègues d'entraînement, entraineurs,
            compétiteurs, officiels, les déplacements sportifs tels que les
            compétitions et les stages, et surtout par le dépassement de soi
            dans tout ce que nous réserve le sport.
          </p>
          <p>
            La chance et le travail ont fait de moi un athlète qui visait
            toujours plus haut. Je me suis hissé dans le{" "}
            <b className="textBold">top 16</b> lors d'un championnat de France
            de natation sur le <b className="textBold">100 mètres nage libre</b>
            . J'ai également honoré les couleurs de la France dans un sport
            beaucoup moins médiatisé mais avec beaucoup de valeurs:
            <b className="textBold"> le sauvetage</b>. Quelques{" "}
            <b className="textBold">podiums européens</b> dans la catégorie
            Junior.
          </p>
        </div>
      </div>

      {/* Section présent */}
      <div className="sectionScreen" ref={presentRef}>
        <div className="headerSectionScreen">
          <h2>Mon passé :</h2>
          <button
            className="buttonSection"
            onClick={() => toggleColorTheme(presentRef)}
          >
            Changer la couleur
          </button>
        </div>
        <div className="bodySectionScreen"></div>
      </div>

      {/* Section future */}
      <div className="sectionScreen" ref={futureRef}>
        <div className="headerSectionScreen">
          <h2>Mon avenir :</h2>
          <button
            className="buttonSection"
            onClick={() => toggleColorTheme(futureRef)}
          >
            Changer la couleur
          </button>
        </div>
        <div className="bodySectionScreen"></div>
      </div>
    </div>
  );
}
