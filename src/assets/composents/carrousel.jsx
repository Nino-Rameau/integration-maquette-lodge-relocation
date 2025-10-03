import { Link } from "react-router-dom";
import { useState } from "react";

const data = {
    Préparation: {
        h2: "Préparer votre arrivée et votre intégration",
        card: [
            { 
                icon: "../../../public/icon/book.svg",
                titre: "Programme de sensibilisation à la culture Suisse",
                texte: "Ce programme a été pensé pour relever les défis de votre intégration en Suisse. Quelques heures qui vous feront gagner un temps précieux pour bien démarrer votre nouvelle vie !",
                liste: [
                    "Véritable immersion dans la culture locale : fonctionnement économique, politique, habitudes de vie, etc.",
                    "Conçu pour être suivi à distance avant votre arrivée",
                    "Répond à vos questions et réduit le stress lié à la relocation"
                ]
            },
            { 
                icon: "../../../public/icon/map.svg",
                titre: "Visite de reconnaissance",
                texte: "La visite de reconnaissance est l’étape incontournable pour choisir où poser vos valises.",
                liste: [
                    "Echange d’information avec votre consultante dans une ambiance conviviale",
                    "Découverte des quartiers d’habitation, du canton et de la Suisse",
                    "Précision de vos attentes en matière de localisation et de logement"
                ]
            },
            { 
                icon: "../../../public/icon/log-in.svg",
                titre: "Transfert aéroport/gare",
                texte: "Nous coordonnons et planifions votre arrivée",
                liste: [
                    "Transfert avec chauffeur de l’aéroport ou de la gare jusqu’à votre destination finale",
                    "Prise en charge de votre transfert par nos partenaires de confiance",
                    "Prise en charge de vos bagages de la sortie du terminal jusqu’à votre appartement"
                ]
            },
        ],
    },
    Famille: {
        h2: "Soutien aux familles",
        card: [
            { 
                icon: "../../../public/icon/heart.svg",
                titre: "Recherche d’école et de garde d’enfant",
                texte: "Le programme « Education et Garde d’enfant » facilite l’intégration de votre famille en assurant une adéquation optimale entre le système éducatif suisse et les besoins de vos enfants. Une consultante dédiée vous accompagne à chaque étape :",
                liste: [
                    "Conseil personnalisé",
                    "Présentation des options scolaires (publiques, privées, internationales)",
                    "Organisation de rendez-vous et visites des établissements scolaires",
                    "Assistance aux entretiens et inscriptions"
                ]
            },
            { 
                icon: "../../../public/icon/user-plus.svg",
                titre: "Accompagnement du conjoint",
                texte: "Le programme « Accompagnement du conjoint » complète le voyage de reconnaissance en accompagnant votre partenaire dans la découverte de son nouvel environnement.",
                liste: [
                    "Facilitation de l’intégration grâce à un soutien personnalisé",
                    "Informations sur la vie quotidienne, activités sportives, culturelles, clubs, cours de langues, emploi, démarches administratives, etc."
                ]
            },
            { 
                icon: "../../../public/icon/gitlab.svg",
                titre: "Formalités des animaux de compagnie",
                texte: "Nous vous accompagnons dans les démarches liées à l’arrivée de votre animal de compagnie en Suisse.",
                liste: [
                    "Respect des règles d'importation suisses",
                    "Assistance pour les formalités administratives avant votre arrivée",
                    "Assistance pour les formalités administratives locales"
                ]
            },
        ],
    },
    Logement: {
        h2: "Recherche de logements",
        card: [
            { 
                icon: "../../../public/icon/loader.svg",
                titre: "Recherche de logement temporaire",
                texte: "La solution idéale pour une période transitoire. Nous recherchons pour vous un logement meublé adapté à vos besoins, avec un accompagnement personnalisé :",
                liste: [
                    "Définition des critères désirés",
                    "Sélection et visite de biens, aide à la décision,",
                    "Gestion du dossier de location (négociation, bail, garantie)",
                    "Coordination des états des lieux, de l’accueil, du ménage et du départ"
                ]
            },
            { 
                icon: "../../../public/icon/home.svg",
                titre: "Recherche de logement permanent",
                texte: "Ce programme vous accompagne de A à Z dans la recherche de votre futur domicile. Nous mettons toute notre expertise à votre service pour vous accompagner dans cette étape clé.",
                liste: [
                    "Présentons du marché immobilier",
                    "Définition et précision de vos critères",
                    "Sélection de biens pertinents et organisation des visites",
                    "Conseils personnalisés, suivi complet du dossier (négociation, bail, garanties, assurances), et assistance jusqu’à la remise des clés"
                ]
            },
            { 
                icon: "../../../public/icon/log-in.svg",
                titre: "Aide à l’installation dans le logement",
                texte: "Indissociable de la recherche du logement permanent, ce service facilite votre emménagement dans votre nouveau chez-vous.",
                liste: [
                    "Réalisation de l’état des lieux d’entrée",
                    "Assistance pour la souscription des assurances liées au logement",
                    "Gestion des contrats de maintenance et des abonnements essentiels (électricité, Internet, eau, etc.)",
                    "Fourniture de toutes les informations essentielles pour bien démarrer votre arrivée en Suisse"
                ]
            },
            { 
                icon: "../../../public/icon/company.svg",
                titre: "Recherche de logements",
                texte: "Nous vous accompagnons dans la recherche de bureaux adaptés à vos besoins.",
                liste: [
                    "Définition et précision de vos critères : emplacement, surface, budget et style souhaité",
                    "Proposition de solutions immobilières alignées avec l’image, la culture et les objectifs de votre organisation",
                    "Suivi complet du dossier (négociation, bail, garanties, assurances), et assistance jusqu’à la remise des clés"
                ]
            },
            { 
                icon: "../../../public/icon/user-plus.svg",
                titre: "Recherche à l’achat",
                texte: "Dans un marché immobilier compétitif, Lodge Relocation vous accompagne dans la recherche et l’acquisition d’un bien qui correspond pleinement à vos attentes.",
                liste: [
                    "Accompagnement à chaque étape par une consultante dédiée qui supervise l’ensemble du projet",
                    "Définition et précision des critères : emplacement, surface, budget et style souhaité",
                    "Accès aux meilleures opportunités du marché via à nos relations étroites avec les régies immobilières et les propriétaires"
                ]
            },
            { 
                icon: "../../../public/icon/plus-circle.svg",
                titre: "Autres services d’accompagnement aux démarches administratives",
                texte: "Notre équipe organise les rendez-vous, prépare les documents nécessaires et vous accompagne à chaque étape de vos démarches administratives.",
                liste: [
                    "Enregistrement à la commune",
                    "Choix d’une assurance maladie",
                    "Ouverture d’un compte bancaire, etc."
                ]
            },
        ],
    },
    Déménagement: {
        h2: "Services de déménagement",
        card: [
            { 
                icon: "../../../public/icon/truck.svg",
                titre: "Coordination du déménagement",
                texte: "Grâce à nos partenariats privilégiés avec plusieurs sociétés de déménagements, nous organisons et coordonnons le transfert de vos biens. Nous assurons la gestion complète et fluide de votre déménagement.",
                liste: [
                    "Demande de devis comparatifs",
                    "Mise en relation avec plusieurs sociétés de déménagements, suisses et internationales, sérieuses et rigoureusement sélectionnées",
                    "Coordination et suivi jusqu’à l’installation finale"
                ]
            },
            { 
                icon: "../../../public/icon/archive.svg",
                titre: "Location de meubles",
                texte: "Lodge Relocation offre une solution rapide pour meubler votre résidence finale en attendant l'arrivée de vos meubles ou à plus long terme.",
                liste: [
                    "Coordination avec nos partenaires spécialisés",
                    "Livraison et installation rapide de meubles de qualité",
                    "Transition fluide dans votre nouveau chez-vous sans avoir besoin de logement temporaire"
                ]
            },
            { 
                icon: "../../../public/icon/log-in.svg",
                titre: "Formalités liées au véhicule et permis de conduire",
                texte: "Nous vous accompagnons dans les démarches liées à votre véhicule ou votre permis de conduire :",
                liste: [
                    "Assistance dans votre demande ou votre changement de permis de conduire",
                    "Assistance dans les formalités d’importation et d’immatriculation du véhicule",
                    "Accompagnement au Service des Automobiles pour l’enregistrement"
                ]
            },
        ],
    },
    Départ: {
        h2: "Services de départ",
        card: [
            { 
                icon: "../../../public/icon/user-check.svg",
                titre: "Avec ou sans recherche de nouveaux locataires",
                texte: "Nos consultantes accompagnent les collaborateurs et leurs familles à chaque étape de leur départ, afin de clôturer leur séjour en Suisse en toute sérénité et de manière anticipée.",
                liste: [
                    "Résiliation du bail et contrats",
                    "Organisation des états des lieux",
                    "Récupération du dépôt de garantie",
                    "Prise en charge de la recherche d’un nouveau locataire en cas de résiliation anticipée du bail"
                ]
            },
        ],
    },
    "Client B2B": {
        h2: "Gestion de la relocation pour les entreprises",
        card: [
            { 
                icon: "../../../public/icon/dollar-sign.svg",
                titre: "Gestion externalisée de la facturation",
                texte: "Nous centralisons et gérons toutes les dépenses liées à la relocation de vos collaborateurs, en accord avec la politique de prise en charge définie par l’entreprise :",
                liste: [
                    "Pris en charge pour votre compte des frais liés à la relocation : frais de déplacement, loyers des logements temporaires, nettoyages, émoluments des permis, etc.",
                    "Facturation claire et centralisée, sans contrainte de création de nouveau compte fournisseur"
                ]
            },
            { 
                icon: "../../../public/icon/activity.svg",
                titre: "Gestion des appartements d'entreprise",
                texte: "Lodge Relocation gère pour les entreprises des parcs d'appartements meublés destinés aux séjours temporaires de leurs collaborateurs.",
                liste: [
                    "Sélection de logements",
                    "Gestion des baux",
                    "Optimisation du planning de remplissage",
                    "Logistique liée au logement : accueil, kit d’accueil, ménage, états des lieux"
                ]
            },
            { 
                icon: "../../../public/icon/award.svg",
                titre: "Group move",
                texte: "Lodge Relocation est spécialisée dans la gestion des Group Moves, qu’il s’agisse de relocalisations de sièges depuis l’étranger vers la Suisse ou de transferts intercantonaux.",
                liste: [
                    "Expertise reconnue, avec accompagnement de dizaines d’entreprises dans plusieurs cantons, et jusqu’à 200 familles par Group Move",
                    "Conception conjointe de votre accompagnement, adapté aux besoins spécifiques",
                    "Garanti du meilleur soutien aux collaborateurs"
                ]
            },
            { 
                icon: "../../../public/icon/folder-plus.svg",
                titre: "Suivi mobilité",
                texte: "Lodge Relocation collabore étroitement avec les équipes RH, afin d’assurer un suivi clair et efficace tout au long du processus.",
                liste: [
                    "Suivi hebdomadaire détaillé de l’avancement des services de relocation pour chaque collaborateur",
                    "Accès à notre plateforme digital pour un suivi en temps réel",
                    "Communication réactive, fluide et transparente, garantissant une parfaite coordination"
                ]
            },
        ],
    },
};

export default function Carrousel() {
    const onglets = Object.keys(data);
    const [ongletActif, setOngletActif] = useState("Préparation");
    const [index, setIndex] = useState(0);

    const { h2, card: cards } = data[ongletActif];

    const precedent = () => {
        setIndex((i) => (i > 0 ? i - 1 : i));
    };

    const suivant = () => {
        setIndex((i) => (i < cards.length - 2 ? i + 1 : i));
    };

    return (
        <section className="max-w-1070 m-auto w-full flex flex-col gap-64 py-96">
            <nav className="flex flex-row m-auto items-center gap-8 bg-pri-800 rounded-100 max-w-min-c text-nowrap top-110 sticky z-index-1 h-50">
                {onglets.map((onglet) => (
                <button
                    key={onglet}
                    className={`rounded-100 h-40 p-10-24 text-18 border-none w-170 h-40 m-4 pointer ${ongletActif === onglet ? "text-pri-800" : "bg-pri-800-hover text-ess-100-hover"}`}
                    onClick={() => {
                    setOngletActif(onglet);
                    setIndex(0);
                    }}
                >
                    {onglet}
                </button>
                ))}
            </nav>

            <div>
                <h2 className="text-ess-black font-extrabold text-32 text-center">{h2}</h2>

                <div className={`flex-row justify-end gap-32 mb-32 ${cards.length <= 1 ? "display-none" : "flex"}`}>
                    <button onClick={precedent} 
                        className={`border-none rounded-100 w-h-56
                        ${index === 0 ? "bg-ess-100 text-ess-200" : "bg-pri-800 text-pri-050 pointer"}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z" fill="CurrentColor"/>
                        </svg>
                    </button>

                    <button onClick={suivant} 
                        className={`border-none rounded-100 w-h-56
                        ${index === cards.length - 2 ? "bg-ess-100 text-ess-200" : "bg-pri-800 text-pri-050 pointer"}`}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="CurrentColor"/>
                        </svg>  
                    </button>
                </div>

                <div className="overflow-hidden">
                    <div 
                        className={`flex flex-row gap-32 transition-300 my-12 
                        ${cards.length <= 1 ? "justify-center" : "justify-start"}`} 
                        style={{ transform: `translateX(-${index * (100 / 3)}%)`}} 
                    >
                        {cards.map((card, i) => (
                        <div key={i} className="flex flex-col border-pri-100 rounded-12 p-32 gap-24 w-1475 bg-ess-white shrink-0 w-1-3" style={{ width: "calc(100% / 3)" }}>
                            <img src={card.icon} className="w-h-32"/>
                            <div className="flex flex-col gap-8">
                                <h3 className="text-24 font-bold text-ess-black">{card.titre}</h3>
                                <p className="text-ess-400 text-16">{card.texte}</p>
                            </div>
                            <ul className="flex flex-col gap-12 ml-20">
                            {card.liste.map((item, j) => (
                                <li key={j}>{item}</li>
                            ))}
                            </ul>
                        </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-row justify-center items-center transition-300">
                    {Array.from({ length: cards.length - 1 }).map((_, i) => (
                        <button key={i} onClick={() => setIndex(i)} className="border-none bg-sec-000" >
                            {i === index ? 
                                (
                                    <img src="../../../public/icon/slider-actif.svg" className="h-8 py-8"/>
                                ) : (
                                    <img src="../../../public/icon/slider.svg" className="h-8 p-8 text-animate-out pointer"/>
                                )
                                }
                        </button>
                    ))}
                </div>
            </div>
            <Link 
                to="/contact"
                className="bg-sec-100-hover text-sec-000-hover rounded-100 h-50 flex justify-center items-center text-maj text-animate font-2 text-center text-16 font-semibold" 
                onClick={() => { window.scrollTo(0, 0)}} >
                prendre contact avec nos équipes               
            </Link>
        </section>
    );
}