import { Link, useLocation } from "react-router-dom";
import Btn from "../composents/btn-header"

const Header = () => {
    const location = useLocation();
  return (
    <header className="my-12 bg-sec-000 p-12">
        <div className="max-w-1070 m-auto w-full flex flex-row justify-between items-center">
            <Link to="/" onClick={() => { window.scrollTo(0, 0)}} >
                <img src="../../../public/img/logo.png" alt="logo"/>
            </Link>
            <nav className="flex gap-16">
                <Link 
                    to="/relocation" 
                    className={`flex items-center font-semibold text-maj animation-text ${location.pathname === "/relocation" ? "active" : ""}`}
                    onClick={() => { window.scrollTo(0, 0)}} >
                    Service de relocation                
                </Link>
                <Btn to="/contact" texte="démarrez votre projet"/>
            </nav>
        </div>
    </header>
  );
};

export default Header;