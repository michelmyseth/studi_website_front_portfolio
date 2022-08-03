import React from "react";
import "./FooterStyle.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
function Footer() {
    return (
        <>
            <footer class="text-center text-lg-start bg-light text-muted">
                <div class="text-center p-4">
                    © ERIC OUAKNINE Fashion & Advertising Photographer Paris &
                    International / Photographe de Mode & Publicité Paris / 2022
                    <a
                        class="btn btn-outline-light btn-floating m-1"
                        href="https://facebook.com"
                        role="button"
                    >
                        <FacebookOutlinedIcon style={{ color: "black" }} />
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;
