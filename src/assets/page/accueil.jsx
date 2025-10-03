import Card from "../composents/card-accueil"
import Btn from "../composents/button"

function App() {

  return (
    <>
    <section className="max-w-1070 m-auto w-full flex flex-col gap-48">
      <div className="flex flex-row items-center gap-48 mt-32 position">
        <div className="flex flex-col gap-48">
          <div>
            <p className="text-maj text-sec-600 font-semibold">Agence de relocation en suisse</p>
            <h1>Confiez chaque étape de votre relocation à un partenaire de confiance</h1>
          </div>
          <p className="text-20">Depuis 1994, Lodge Relocation <strong>simplifie la mobilité internationale des entreprises</strong> en Suisse, de leurs collaborateurs et de leurs familles, avec un accompagnement personnalisé.</p>
          <div className="flex flex-col gap-8">
            <Btn to="/contact" texte="démarrez votre projet"/>
            <p>Notre équipe vous répond sous 24h</p>
          </div>
        </div>
        <div className="flex-col">
          <img src="../../../public/img/drapeau.png" alt="Drapeau suisse" />
        </div>
        <div>
          <img src="../../../public/img/Pattern.svg" className="top-150 left-150 w-405 h-430 absolute z-index--1"/>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-row gap-8 m-auto">
          <img src="../../../public/icon/star.svg" />
          <p>Noté 4.9/5 par nos clients sur Google</p>
        </div>
        <div className="flex flex-row gap-8 m-auto">
          <img src="../../../public/icon/plus-circle.svg" />
          <p>+ 70 multinationales partenaires</p>
        </div>
        <div className="flex flex-row gap-8 m-auto">
          <img src="../../../public/icon/plus-circle.svg" />
          <p>+ 1000 services de relocation/an</p>
        </div>
      </div>
    </section>

    <section className="max-w-1070 m-auto w-full flex gap-64 py-96">
      <div className="flex flex-col gap-32">
        <h2 className="font-3 text-pri-800 text-64 font-normal text-line-55">
          Un accompagnement complet <span className="font-1 text-32 block">de relocation.</span>
        </h2>
        <p>Nous gérons l’ensemble des démarches, pour faciliter chaque étape de votre mobilité.</p>
      </div>
      <div className="flex flex-col gap-32 border-pri-100 p-32 rounded-12 overflow-hidden relative">
        <img src="../../../public/img/Pattern.svg" className="top--60 left-270 w-240 h-250 absolute z-index--1"/>
        <div className="flex gap-16">
          <img src="../../../public/icon/map-pin.svg" />
          <h3>Relocation</h3>
        </div>
        <div className="flex flex-col gap-32">
          <div>
            <h4>Préparation de l’arrivée et de l’intégration</h4>
            <p>Visite de reconnaissance, programme de sensibilisation à la culture Suisse</p>
          </div>
          <div>
            <h4>Soutien aux familles</h4>
            <p>Recherche d’école et de garde d’enfant, accompagnement du conjoint</p>
          </div>
          <div>
            <h4>Recherche de logements </h4>
            <p>Temporaires ou permanents, avec services d’aide à l’installation</p>
          </div>
          <div>
            <h4>Recherche de logements </h4>
            <p>Gestion externalisée de la facturation, suivi de la mobilité</p>
          </div>
        </div>
        <Btn to="/contact" texte="Planifier votre relocation"/>
      </div>
    </section>

    <section className="bg-pri-800 w-full py-96">
      <div className='max-w-1070 m-auto w-full grid grid-col-4-1fr grid-row-3-1fr-2fr-2fr grid-col-gap-24 grid-row-gap-24'>
        <h2 style={{ gridArea: "1 / 1 / 2 / 4" }} className="text-ess-050 font-light text-32"><span className="font-bold">30 ans d’expertise,</span> au service de la mobilité internationale en Suisse</h2>
        <Card img="../../../public/icon/calendar.svg" titre="Fondée en 1994" texte="L’un des premiers acteurs de la Relocation en Suisse" style={{ gridArea: "2 / 1 / 3 / 2" }}/>
        <Card img="../../../public/icon/heart.svg" titre="Top 3" texte="Parmi les 3 agences de relocation les plus reconnues en Suisse" style={{ gridArea: "2 / 2 / 3 / 3;" }}/>
        <Card img="../../../public/icon/company.svg" titre="70 sociétés internationales partenaires" texte="Plus de 1000 services réalisés en 2024" style={{ gridArea: "2 / 3 / 3 / 4" }}/>
        <Card img="../../../public/icon/briefcase.svg" titre="30 collaborateurs" texte="Très expérimentés et bénéficiant d’un ancrage local très fort" style={{ gridArea: "3 / 1 / 4 / 2" }}/>
        <Card img="../../../public/icon/star.svg" titre="Service premium" texte="Lodge Relocation propose des prestations personnalisées de haute qualité, alliant réactivité et approche humaine." style={{ gridArea: "3 / 2 / 4 / 3" }}/>
        <Card img="../../../public/icon/user-check.svg" titre="Acteur engagé" texte="Membre des associations de relocation Suisse SARA et Européenne EURA, médaille d’argent Ecovadis" style={{ gridArea: "3 / 3 / 4 / 4" }}/>
        <img src="../../../public/img/photo-groupe.png" alt="Photo de groupe" style={{ gridArea: "1 / 4 / 4 / 5 " }}/>
      </div>
    </section>

    <section className="max-w-1070 m-auto w-full flex gap-64 py-96">
      <div className="flex flex-col gap-32">
        <h2 className="font-light text-32">Présents là <span className="font-extrabold">où vous en avez besoin</span></h2>
        <div className="flex flex-col gap-8">
          <p>
            Avec 4 bureaux dans les villes de Genève, Lausanne, Zug et Zurich, nous assurons une couverture opérationnelle dans tous les cantons. 
          </p>
          <p>
            Présentes localement, nos consultantes bénéficient d'un ancrage fort avec les partenaires locaux, garantissant ainsi une maîtrise parfaite du marché immobilier et des spécificités cantonales.
          </p>
        </div>
        <Btn to="/contact" texte="prendre contact avec nos équipes"/>
      </div>
      <div>
        <img src="../../../public/img/map.png" alt="Carte avec légende" />
      </div>
    </section>
    </>
  )
}

export default App
