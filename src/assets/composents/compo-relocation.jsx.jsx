import { Link } from "react-router-dom";
import { useState } from "react";

const data = {
    Préparation: {
        icon: "../../../public/icon/map-pin-v2.svg",
        data: {
            h2: "Préparer votre arrivée et votre intégration",
            card: [
                { 
                    titre: "Programme de sensibilisation à la culture Suisse",
                    texte: "Ce programme a été pensé pour relever les défis de votre intégration en Suisse. Quelques heures qui vous feront gagner un temps précieux pour bien démarrer votre nouvelle vie !",
                    liste: [
                        "Véritable immersion dans la culture locale : fonctionnement économique, politique, habitudes de vie, etc.",
                        "Conçu pour être suivi à distance avant votre arrivée",
                        "Répond à vos questions et réduit le stress lié à la relocation"
                    ]
                },
                { 
                    titre: "Visite de reconnaissance",
                    texte: "La visite de reconnaissance est l’étape incontournable pour choisir où poser vos valises.",
                    liste: [
                        "Echange d’information avec votre consultante dans une ambiance conviviale",
                        "Découverte des quartiers d’habitation, du canton et de la Suisse",
                        "Précision de vos attentes en matière de localisation et de logement"
                    ]
                },
                { 
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
    },
    Famille: {
        icon: "../../../public/icon/users.svg",
        data: {
            h2: "Soutien aux familles",
            card: [
                { 
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
                    titre: "Accompagnement du conjoint",
                    texte: "Le programme « Accompagnement du conjoint » complète le voyage de reconnaissance en accompagnant votre partenaire dans la découverte de son nouvel environnement.",
                    liste: [
                        "Facilitation de l’intégration grâce à un soutien personnalisé",
                        "Informations sur la vie quotidienne, activités sportives, culturelles, clubs, cours de langues, emploi, démarches administratives, etc."
                    ]
                },
                { 
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
    },
    Logement: {
        icon: "../../../public/icon/home-v2.svg",
        data: {
            h2: "Recherche de logements",
            card: [
                { 
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
                    titre: "Recherche de logements",
                    texte: "Nous vous accompagnons dans la recherche de bureaux adaptés à vos besoins.",
                    liste: [
                        "Définition et précision de vos critères : emplacement, surface, budget et style souhaité",
                        "Proposition de solutions immobilières alignées avec l’image, la culture et les objectifs de votre organisation",
                        "Suivi complet du dossier (négociation, bail, garanties, assurances), et assistance jusqu’à la remise des clés"
                    ]
                },
                { 
                    titre: "Recherche à l’achat",
                    texte: "Dans un marché immobilier compétitif, Lodge Relocation vous accompagne dans la recherche et l’acquisition d’un bien qui correspond pleinement à vos attentes.",
                    liste: [
                        "Accompagnement à chaque étape par une consultante dédiée qui supervise l’ensemble du projet",
                        "Définition et précision des critères : emplacement, surface, budget et style souhaité",
                        "Accès aux meilleures opportunités du marché via à nos relations étroites avec les régies immobilières et les propriétaires"
                    ]
                },
                { 
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
    },
    Déménagement: {
        icon: "../../../public/icon/archive-v2.svg",
        data: {
            h2: "Services de déménagement",
            card: [
                { 
                    titre: "Coordination du déménagement",
                    texte: "Grâce à nos partenariats privilégiés avec plusieurs sociétés de déménagements, nous organisons et coordonnons le transfert de vos biens. Nous assurons la gestion complète et fluide de votre déménagement.",
                    liste: [
                        "Demande de devis comparatifs",
                        "Mise en relation avec plusieurs sociétés de déménagements, suisses et internationales, sérieuses et rigoureusement sélectionnées",
                        "Coordination et suivi jusqu’à l’installation finale"
                    ]
                },
                { 
                    titre: "Location de meubles",
                    texte: "Lodge Relocation offre une solution rapide pour meubler votre résidence finale en attendant l'arrivée de vos meubles ou à plus long terme.",
                    liste: [
                        "Coordination avec nos partenaires spécialisés",
                        "Livraison et installation rapide de meubles de qualité",
                        "Transition fluide dans votre nouveau chez-vous sans avoir besoin de logement temporaire"
                    ]
                },
                { 
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
    },
    Départ: {
        icon: "../../../public/icon/log-out.svg",
        data: {
            h2: "Services de départ",
            card: [
                { 
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
    },
    "Client B2B": {
        icon: "../../../public/icon/briefcase-v2.svg",
        data: {
            h2: "Gestion de la relocation pour les entreprises",
            card: [
                { 
                    titre: "Gestion externalisée de la facturation",
                    texte: "Nous centralisons et gérons toutes les dépenses liées à la relocation de vos collaborateurs, en accord avec la politique de prise en charge définie par l’entreprise :",
                    liste: [
                        "Pris en charge pour votre compte des frais liés à la relocation : frais de déplacement, loyers des logements temporaires, nettoyages, émoluments des permis, etc.",
                        "Facturation claire et centralisée, sans contrainte de création de nouveau compte fournisseur"
                    ]
                },
                { 
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
                    titre: "Group move",
                    texte: "Lodge Relocation est spécialisée dans la gestion des Group Moves, qu’il s’agisse de relocalisations de sièges depuis l’étranger vers la Suisse ou de transferts intercantonaux.",
                    liste: [
                        "Expertise reconnue, avec accompagnement de dizaines d’entreprises dans plusieurs cantons, et jusqu’à 200 familles par Group Move",
                        "Conception conjointe de votre accompagnement, adapté aux besoins spécifiques",
                        "Garanti du meilleur soutien aux collaborateurs"
                    ]
                },
                { 
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
    },
};

export default function Carrousel() {
    const onglets = Object.keys(data);
    const [ongletActif, setOngletActif] = useState("Préparation");

    const { h2, card: cards } = data[ongletActif].data;

    return (
        <div className="max-w-1070 m-auto w-full flex flex-row gap-64 py-96">
            <nav className="flex flex-col self-start gap-8 sticky z-index-1 top-130">
                <p className="text-maj text-sec-600 font-semibold">nos services</p>
                {onglets.map((onglet) => (
                    <button
                    key={onglet}
                    className={`rounded-100 p-16 text-18 border-none w-330 h-64 m-4 pointer flex flex-row justify-start items-center gap-8 ${ongletActif === onglet ? "bg-pri-800 text-ess-100" : "text-pri-800 bg-ess-050-hover"}`}
                    onClick={() => {
                        setOngletActif(onglet);
                    }}
                    >
                    <img src={data[onglet].icon} />
                    {onglet}
                </button>
                ))}
            </nav>

            <div className="w-2-3 bg-pri-800 flex flex-col flex-1 gap-48 p-64 rounded-12">
                <h2 className="text-pri-050 font-extrabold text-32">{h2}</h2>
                {cards.map((card, i) => (
                <div key={i} className="flex flex-col gap-8">
                    <div className="flex flex-col gap-8">
                        <h3 className="text-24 font-bold text-pri-050">{card.titre}</h3>
                        <div className="flex flex-col gap-32 pl-32">
                            <p className="text-ess-100 text-16">{card.texte}</p>
                            <ul className="flex flex-col gap-12 pl-32">
                            {card.liste.map((item, j) => (
                                <li key={j} className="text-ess-050">{item}</li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </div>
                ))}
                <Link 
                    to="/contact"
                    className="bg-sec-100-hover text-sec-000-hover rounded-100 h-50 w-430 flex justify-center items-center text-maj text-animate font-2 text-center text-16 font-semibold" 
                    onClick={() => { window.scrollTo(0, 0)}} >
                    prendre contact avec nos équipes               
                </Link>
            </div>
        </div>
    );
}