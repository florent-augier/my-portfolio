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

      {/* Section passé */}
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
            Cet environnement m'a permis d'élargir mon esprit et de{" "}
            <b className="textBold">devenir une personne bienveillante</b>.
          </p>
          <p>
            Ayant baigné dans le sport toute ma vie et notamment dans
            <b className="textBold"> la natation et le sauvetage sportif</b>,
            mon enfance a été rythmé par les entraînements et les compétitions.
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
            <b className="textBold">
              top 16 lors d'un championnat de France élite de natation sur le
              100 mètres nage libre
            </b>
            .
          </p>
          <p>
            J'ai également honoré les couleurs de la France dans un sport
            beaucoup moins médiatisé mais avec beaucoup de valeurs:
            <b className="textBold"> le sauvetage</b>. Quelques{" "}
            <b className="textBold">podiums européens</b> dans la catégorie
            Junior.
          </p>
          <p>Voici deux vidéos montrant ce sport:</p>
          <div className="videoSection">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tCnbJobVTRA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
          <div className="videoSection">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/StEoktV9r-Y"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
          <p>
            Après ces années bien mouvementées, il a bien fallu un jour que je
            décide de ce que j'allais devenir. Le sport prenait beaucoup de
            place et l'école de moins en moins. Je n'avais pas de projets
            concrets. Par défault,{" "}
            <b className="textBold">
              j'ai passé mon Brevet d'Etat d'Educateur Sportif aux Activités de
              la Natation (BEESAN)
            </b>
            . Ce qui me qualifie donc de maître-nageur sauveteur.
          </p>
          <p>
            J'ai pu exercé ce métier dans mon environnement préféré:{" "}
            <b className="textBold">l'eau</b>. J'ai travaillé pour des
            associations et mairies de Marseille et ses alentours. Bébés
            nageurs, aquagym, apprentissage de la natation, aquaphobie
            (accompagnement de personnes avec une phobie de l'eau),
            entrainements sportifs, formations de Surveillant de Baignade (SB),
            formations de Nageurs-sauveteurs (BNSSA) et bien d'autre activités
            ont rempli mes journées.
          </p>
          <p>
            J'ai passé le plus gros de mon temps à l'
            <a
              href="http://www.sauvetage.eu/ordi/index.php"
              className="externalLink"
            >
              ESM (Ecole de Sauvetage côtier Méditerranéenne
            </a>
            , club de sauvetage et de secourisme affilié à la{" "}
            <a href="https://www.ffss.fr/" className="externalLink">
              Fédération Française de Sauvetage et de Secourisme
            </a>
            . Ayant été éducateur sportif principal, mes missions étaient
            multiples:
          </p>
          <ul>
            <li>Gérer les groupes de compétiteurs</li>
            <li>
              Gérer les déplacements des compétitions: réservations,
              engagements, transports, nourriture...
            </li>
            <li>
              Gérer le matériel sportif (y compris réparations / entretien):
              mannequins de sauvetage, bouées de sauvetage, planches, kayak,
              combinaisons, ostacles...
            </li>
            <li>Entraîner les compétiteurs</li>
            <li>Former des futurs sauveteurs</li>
            <li>Et encore beaucoup d'autres...</li>
          </ul>
          <p>J'avais tout pour y rester:</p>
          <ul>
            <li>Un CDI</li>
            <li>
              Un cadre de travail magnifique: <b className="textBold">la mer</b>
            </li>
            <li>Un club remplis de personnes attachantes</li>
            <li>Un travail plaisant</li>
          </ul>
          <p>
            Mais mon goût pour le challenge reprenait le dessus.{" "}
            <b className="textBold">Je ressentais le besoin de me réinventer</b>
            .
          </p>
          <p>
            Tant que je travaillais, au vu de l'investissement que mon travail
            représentait, je ne pouvais me projeter.{" "}
            <b className="textBold">J'ai tout arrêté sans savoir où j'allais</b>
            .
          </p>
        </div>
      </div>

      {/* Section présent */}
      <div className="sectionScreen" ref={presentRef}>
        <div className="headerSectionScreen">
          <h2>Aujourd'hui :</h2>
          <button
            className="buttonSection"
            onClick={() => toggleColorTheme(presentRef)}
          >
            Changer la couleur
          </button>
        </div>
        <div className="bodySectionScreen">
          <p>
            Après avoir suivi deux bootcamps dans le développement web et
            mobile:{" "}
            <a
              className="externalLink"
              href="https://www.thehackingproject.org/"
            >
              The Hacking Project (THP)
            </a>{" "}
            basé sur <b className="textBold">Ruby on Rails (RoR)</b> et{" "}
            <a className="externalLink" href="https://www.lacapsule.academy/">
              La Capsule
            </a>{" "}
            basé sur une stack JS:{" "}
            <b className="textBold">ReactJS / React Native / Express / Node</b>,
            mon nouveau terrain de jeu se trouve derrière un éditeur de code.
            Pour ma part j'ai choisi le populaire{" "}
            <a href="https://code.visualstudio.com/" className="externalLink">
              Visual Studio Code (VSCode)
            </a>
            .
          </p>
        </div>
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
        <div className="bodySectionScreen">
          <p>
            Mon futur ? J'aimerai pouvoir exercer le métier de{" "}
            <b className="textBold">développeur web et mobile</b> le plus
            longtemps possible. Apprenant tous les jours un petit quelque chose
            me permettant de m'améliorer. J'aime le fait de pouvoir jouer avec
            la donnée, l'esthétique et d'automatiser le tout dans une
            application.
          </p>
          <p>
            Sur le point de vue personnel, j'aimerai{" "}
            <b className="textBold">voir grandir mes enfants</b> et profiter de
            chaque instant passé ici-bas.
          </p>
        </div>
      </div>
    </div>
  );
}
