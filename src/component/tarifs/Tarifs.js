import React from "react";
import "./TarifsStyle.css";

function Tarifs() {
    return (
        <>
            <br />
            <div className="container">
                <h4 className="title-service">Tarifs et prestations</h4>
                <ul>
                    <li>
                        <strong className="bold">« Juste moi »</strong> 130
                        euros Séance pour une personne, en extérieur ou en
                        studio
                    </li>
                    <li>
                        <strong className="bold">« Pour deux »</strong> 195
                        euros Pour deux personnes, en extérieur ou en studio
                    </li>
                    <li>
                        <strong className="bold">« Famille »</strong> 220 euros
                        Pour la famille ou les amis jusqu'à 4 personnes, <br />{" "}
                        en extérieur ou en studio 30 euros en supplément par
                        personne au-delà de 4 (hormis enfant jusqu'à 2 ans)
                    </li>
                    <li>
                        <strong className="bold">« Il était une fois »</strong>{" "}
                        160 euros Photo de grossesse (À votre domicile, en
                        extérieur ou en studio)
                    </li>
                    <li>
                        <strong className="bold">« Mon bébé »</strong> 100 euros
                        Photo d'enfant jusqu'à 3 ans (photo à domicile)
                    </li>
                    <li>
                        <strong className="bold">
                            « J'immortalise l'événement »
                        </strong>{" "}
                        sur mesure Prestation de mariage ou baptême sur devis
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Tarifs;
