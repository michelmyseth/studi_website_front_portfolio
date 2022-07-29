import React from "react";
import "./FooterStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <>
            <footer class="text-center text-lg-start bg-light text-muted">
                <div class="text-center p-4">
                    © ERIC OUAKNINE Fashion & Advertising Photographer Paris &
                    International / Photographe de Mode & Publicité Paris / 2022
                    <a
                        class="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <FontAwesomeIcon icon="fa-brands fa-facebook" />{" "}
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;
