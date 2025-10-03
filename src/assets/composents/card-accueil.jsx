const Card = ({img, titre, texte}) => {
    return (
        <div>
        <div className="flex flex-col gap-24">
            <img src={img} className="w-h-32"/>
            <h3 className="text-ess-050 text-24 font-bold">{titre}</h3>
            <p className="text-ess-200">{texte}</p>
        </div>
        </div>
    );
};

export default Card;