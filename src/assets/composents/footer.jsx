import { Link } from "react-router-dom";
import Btn from "../composents/button"

const footer = () => {
  return (
    <footer>
      <div className="bg-pri-800 flex flex-col justify-center items-center gap-32 py-96">
        <p className="font-3 text-sec-000 text-100 font-normal">All you need is Lodge</p>
        <Btn to="/contact" texte="démarrez votre projet"/>
      </div>
      <div className="flex flex-row gap-128 max-w-1070 m-auto w-full py-96">
        <div className="flex flex-col gap-64">
          <div className="flex flex-col gap-16 max-w-370">
            <p className="text-sec-600 text-maj font-2 text-18 font-semibold">inscrivez-vous à la newsletter</p>
            <p className="text-ess-300">Des conseils concrets pour s’installer, s’intégrer et mieux comprendre la Suisse.</p>
            <form className="border-pri-100 max-w-min-c text-nowrap px-2 rounded-12">
              <label htmlFor="email"></label>
              <input type="email" name="email" id="email" placeholder="Email" required className="py-16 ml-8 border-none w-220 text-16" />
              <button type="submit" className="font-semibold text-16 bg-sec-100-hover text-sec-000-hover rounded-12 p-12-24 border-none">S’abonner</button>
            </form>
          </div>
          <div className="p-16 rounded-100 bg-sec-050 w-h-32 flex justify-center items-center">
            <img src="../../../public/icon/linkedin.svg"/>
          </div>
        </div>
        <div className="flex flex-col gap-16 text-nowrap">
          <p className="text-sec-600 text-maj font-2 font-normal">Infos légales</p>
          <p className="text-ess-300">Mentions légales</p>
          <p className="text-ess-300">CGU</p>
          <p className="text-ess-300">Politique de confidentialité</p>
        </div>
        <div className="flex flex-col gap-16 text-nowrap">
          <p className="text-sec-600 text-maj font-2 font-normal">Menu</p>
          <Link 
            to="/"
            className="text-16 font-normal text-ess-300" 
            onClick={() => { window.scrollTo(0, 0)}}>
            Accueil            
          </Link>
          <Link 
            to="/relocation"
            className="text-16 font-normal text-ess-300" 
            onClick={() => { window.scrollTo(0, 0)}}>
            Services de relocation            
          </Link>
          <Link 
            to="/contact"
            className="text-16 font-normal text-ess-300" 
            onClick={() => { window.scrollTo(0, 0)}}>
            Contact            
          </Link>
        </div>
      </div>
      <div className="bg-pri-800">
        <div className="py-32 flex flex-row max-w-1070 m-auto w-full justify-start">
          <div className="flex gap-64 text-maj">
            <p className="text-sec-100">Genève</p>
            <p className="text-sec-100">lausanne</p>
            <p className="text-sec-100">zug</p>
            <p className="text-sec-100">Zurich</p>
          </div>
        </div>
        <div className="flex flex-row justify-end max-w-1070 m-auto w-full py-16">
          <p className="text-ess-200 font-normal">©2025 Réalisé par <a href="https://annagiraud.fr/" target="__blank" className="text-ess-200 font-bold">Anna Giraud</a></p>
        </div>
      </div>
    </footer>
  );
};

export default footer;