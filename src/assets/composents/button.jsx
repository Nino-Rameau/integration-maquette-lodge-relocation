import { Link } from "react-router-dom";

const Button = ({to, texte}) => {
  return (
    <Link 
        to={to} 
        className="bg-sec-100-hover text-sec-000-hover rounded-100 p-12-32 text-maj text-animate max-w-min-c text-nowrap font-2 text-center text-16 font-semibold" 
        onClick={() => { window.scrollTo(0, 0)}} >
        {texte}               
    </Link>
  );
};

export default Button;