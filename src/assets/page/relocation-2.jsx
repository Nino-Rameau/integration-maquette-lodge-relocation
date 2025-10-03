import Btn from "../composents/button"
import Faq from "../composents/faq"
import Relocation2 from "../composents/compo-relocation.jsx";
import { Link, useLocation } from "react-router-dom";

function Relocation() {
    const location = useLocation();
  return (
    <>
      <div className="top-150 left-1600 absolute z-index-1">
        <div className="flex flex-col gap-24">
            <Link 
                to="/relocation"
                className={`shadow w-h-50 rounded-100 flex items-center justify-center ${location.pathname === "/relocation" ? "bg-ess-200 text-ess-050" : "bg-ess-050 text-ess-400"}`}
                onClick={() => { window.scrollTo(0, 0)}} >
                1             
            </Link>
            <Link 
                to="/relocation2"
                className={`shadow w-h-50 rounded-100 flex items-center justify-center ${location.pathname === "/relocation2" ? "bg-ess-200 text-ess-050" : "bg-ess-050 text-ess-400"}`}
                onClick={() => { window.scrollTo(0, 0)}} >
                2             
            </Link>
        </div>
      </div>
      <section className="flex flex-row max-w-1070 m-auto w-full py-96 gap-64">
        <div className="flex flex-col gap-32">
          <div>
            <p className="text-maj text-sec-600 font-semibold text-18">Parce que chaque situation est unique.</p>
            <h1 className="font-light">Nous vous proposons une gamme de <span className="font-extrabold">services de relocation sur mesure.</span></h1>
            <img src="../../../public/img/Pattern.svg" className="top-150 left-150 w-405 h-430 absolute z-index--1"/>
          </div>
          <div className="flex flex-col gap-8 text-ess-300">
            <p>
              Depuis 1994, nous vous accompagnons partout en Suisse grâce à une présence nationale, alliant expertise locale et étroite collaboration avec les partenaires locaux.
            </p>
            <p>
              Nous construisons avec vous un programme personnalisé, conçu pour répondre précisément à vos besoins spécifiques et garantir une installation en toute sérénité.
            </p>
          </div>
          <Btn to="/contact" texte="Démarrez votre projet"/>
        </div>
        <div className="flex flex-col gap-24">
          <p>Nous prenons en charge la coordination complète du projet afin de :</p>
          <div className="flex flex-row gap-16">
            <img src="../../../public/icon/check-circle.svg"/>
            <p>vous <strong>libérer de toute contrainte</strong> logistique,</p>
          </div>
          <div className="flex flex-row gap-16">
            <img src="../../../public/icon/check-circle.svg"/>
            <p>vous <strong>assurer une installation rapide</strong>,</p>
          </div>
          <div className="flex flex-row gap-16">
            <img src="../../../public/icon/check-circle.svg"/>
            <p>et une <strong>intégration sereine</strong>.</p>
          </div>
        </div>
      </section>

      <Relocation2/>


      <section className="bg-pri-800 p-32">
        <div className="flex flex-col gap-64 max-w-1070 m-auto w-full">
          <p className="text-sec-100 text-maj">avis client</p>
          <blockquote className="text-pri-050 font-normal flex flex-row gap-32">
            <div className="flex flex-col gap-16">
              <img src="../../../public/icon/quote.svg" width={45}/>
              <p className="font-bold text-20 text-pri-050">
                Chaque étape, de la recherche du logement au soutien pour la gestion des formalités administratives, a été prise en charge avec une efficacité remarquable. 
              </p>
              <p className="text-pri-050">
                Nous avons fait appel à Lodge Relocation pour notre déménagement et nous sommes très satisfaits de leurs services ! 
              </p>
            </div>
            <div className="flex flex-col gap-16">
              <p className="text-pri-050">
                Dès le début, Virginie a su se montrer disponible, professionnelle et à l’écoute de nos besoins spécifiques et nous tenons également à la remercier chaleureusement pour sa gentillesse. 
              </p>
              <p className="text-pri-050">
                Grâce à leur expertise, notre transition s’est déroulée avec le minimum possible de stress et nous avons pu nous installer sereinement dans notre nouveau domicile. 
              </p>
              <p className="text-pri-050">
                Un grand merci pour leur accompagnement personnalisé et leur dévouement et nous recommandons bien entendu leurs services !
              </p>
              <p className="flex justify-end font-light text-16 text-pri-050"><i>David</i></p>
            </div>
          </blockquote>
        </div>
      </section>

      <section className="max-w-1070 m-auto w-full py-96 flex flex-row justify-between items-center ">
        <div className="flex flex-col gap-32 ">
          <h2 className="font-light">Vos questions sur <span className="font-extrabold">la relocation</span></h2>
          <div className="flex flex-col gap-24">
            <Faq question="Quel est le délai moyen pour trouver un logement avec votre accompagnement ? ">
              <p> 
                Le temps nécessaire dépend de chaque situation (composition de la famille, taille du logement souhaité, budget...) et de la période de l'année. En moyenne, il faut compter 1 mois et demi, avec une fourchette de 2 semaines à 4 mois.
              </p>
              <p>
                Grâce à notre connaissance du marché et à nos partenariats avec les régies, nous trouvons généralement un logement pour nos clients en quelques jours à quelques semaines, selon la ville, la période et les critères spécifiques.
              </p>
            </Faq>      

            <Faq question="Quels sont les étapes pour trouver un logement ?">
              <p>
                Dès la validation de votre dossier, nous échangeons avec vous pour définir vos besoins et vos priorités (type de logement, localisation, budget, etc.).
              </p>
              <p>
                Nous sélectionnons ensuite des biens ciblés, organisons les visites (en votre présence ou à distance), vous accompagnons dans le dépôt des candidatures, et vous conseillons jusqu'à la signature du bail.
              </p>
            </Faq>     
            
            <Faq question="Combien coute une recherche de logement ?">
              <p>
                Chaque situation étant unique, nous ne publions pas de tarifs en ligne. Nous privilégions une approche personnalisée, avec un devis clair après un premier échange.
              </p>
            </Faq>   
            
            <Faq question="Faut-il un garant pour obtenir un logement ?">
              <p>
                Dans la majorité des cas, il n'est pas nécessaire d'avoir un garant pour trouver un logement. Toutefois certaines régies ou propriétaires peuvent le demander, surtout si vos revenus sont jugés insuffisants ou si vous êtes nouvellement arrivé en Suisse. Le garant sert à couvrir les risques de non-paiement du loyer.
              </p>
              <p>
                Notre équipe vous accompagne pour maximiser vos chances et constituer un dossier attractif, même sans garant.
              </p>
            </Faq>      

            <Faq question="Et si je ne trouve pas de logement ?">
              <p>
                Grâce à notre réseau et notre expertise du marché, les situations de non-placement sont extrêmement rares. Si aucune solution ne correspond immédiatement à vos critères, nous ajustons la recherche en continu, explorons des options temporaires et restons pleinement engagés jusqu'à l'obtention d'un logement adapté.
              </p>
              <p>
                Dans certains cas spécifiques, des remboursements partiels peuvent être envisagés, en fonction des conditions contractuelles et du niveau de service déjà délivré.
              </p>
              <p>
                Votre satisfaction reste notre priorité, en toute transparence.
              </p>
            </Faq>      

            <Faq question="Offrez-vous un suivi après l'installation ?">
              <p>
                Notre équipe reste à la disposition du nouvel arrivant après son installation pour l'aider à résoudre les problèmes éventuels, afin que son installation se déroule dans les meilleures conditions.
              </p>
            </Faq>      

            <Faq question="Mon dossier est-il solvable ?">
              <p>
                Avant d'entamer les démarches de recherche de logement, nous évaluons ensemble votre dossier pour nous assurer qu'il est conforme aux exigences des régies et propriétaires suisses.
              </p>
              <p>Nous vérifions notamment:</p>
              <ul>
                <li>Vos revenus (généralement, le loyer ne doit pas dépasser un tiers du revenu net)</li>
                <li>La stabilité de votre situation professionnelle</li>
                <li>Les pièces justificatives requises (contrat de travail, pièce d'identité, extrait de poursuites, etc.)</li>
              </ul>
              <p>
                Si nécessaire, nous vous aidons à optimiser votre dossier et à le rendre plus attractif (garants, explication de votre profil, lettres de motivation, etc.). Notre but est de maximiser vos chances d'obtenir un logement rapidement.
              </p>
            </Faq>      

            <Faq question="Comment Lodge organise ses recherches (internet, régie, …) ? Proposez-vous des appartements hors marché ?">
              <p>
                Nous utilisons une approche multicanale et proactive pour identifier les logements correspondant à votre profil :
              </p>
              <ul>
                <li>Contact direct avec les régies immobilières locales</li>
                <li>Réseau de propriétaires privés et partenaires de confiance</li>
                <li>Surveillance des plateformes en ligne (Homegate, ImmoScout24, etc.)</li>
                <li>Accès à certaines opportunités avant leur mise en ligne (grâce à notre présence active sur le marché)</li>
              </ul>
              <p>
                Nous filtrons les logements selon vos critères (localisation, budget, accessibilité, écoles, etc.) et vous présentons uniquement des biens pertinents.
              </p>
            </Faq>      

            <Faq question="Est-ce que les visites sont accompagnées ? Comment suis-je accompagnée durant ma relocation ?">
              <p>
                Oui, les visites sont accompagnées par une consultante relocation, en fonction de votre disponibilité et de votre localisation. Nous proposons :
              </p>
              <ul>
                <li>Visites physiques en votre présence</li>
                <li>Visites en visioconférence si vous n'êtes pas encore sur place</li>
                <li>Rapports détaillés avec photos et recommandations si vous ne pouvez pas vous déplacer</li>
              </ul>
              <p>
                Dans le cas de certains mandats, le client se rend seul aux visites après que celle-ci ait été organisées par la consultante.
              </p>
            </Faq>      

            <Faq question="Comment éviter les arnaques à la location ?">
              <p>
                N'accepter pas de visiter des biens pour lesquels vous devez verser une certaine somme d'argent. Méfiez-vous des loyers très bas ou des interlocuteurs qui ne sont pas en Suisse.
              </p>
              <p>
                Pour meilleure compréhension, nous avons sélectionné {" "}
                <a href="https://support.oqoro.com/hc/fr/articles/28351271544721-Comment-%C3%A9viter-les-arnaques-%C3%A0-la-location" target="__blank" className="underline"> 
                  un article d'Oqoro explicitant les signaux d'arnaques.
                </a>
              </p>
            </Faq>      

            <Faq question="Quel est le délai de réponse de la régie sur mon dossier de candidature ?">
              <p>
                En général, les régies mettent entre 3 et 10 jours ouvrables pour traiter un dossier. Cependant, ce délai peut varier en fonction du temps pris par le propriétaire pour analyser les dossiers et du nombre de candidats.
              </p>
              <p>
                Nous faisons un suivi régulier pour maximiser vos chances et vous informer dès qu'une réponse est disponible.
              </p>
            </Faq>      

            <Faq question="Quand dois-je régler mon loyer ?">
              <p>
                Le loyer est généralement dû au début de chaque mois, souvent le 1er. Il est recommandé de mettre en place un ordre permanent pour éviter les oublis. Certaines régies peuvent fixer des conditions spécifiques indiquées dans votre contrat de bail.
              </p>
            </Faq>      

            <Faq question="Comment obtenir mon attestation de non-poursuite ?">
              <p>
                Les agences immobilières et les propriétaires de biens immobiliers ont besoin d'une « attestation de non-poursuite », qui indique que vous n'avez pas de dettes en suspens, pour examiner votre demande.
              </p>
              <p>
                Cette attestation est nécessaire pour une demande de propriété, même si vous venez d'arriver en Suisse. Suivant le canton où vous souhaitez résider la procédure n'est pas la même, nous vous indiquerons la vôtre dès nos premiers échanges.
              </p>
            </Faq>      
          </div>
        </div>
        <div>
          <img src="../../../public/img/Pattern.svg"/>
        </div>
      </section>
    </>
  )
}

export default Relocation
