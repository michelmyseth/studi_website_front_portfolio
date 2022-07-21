import React, { useEffect, useState } from "react";
import "./GalerieStyle.css";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/img12.jpg";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";
import img15 from "../../assets/img15.jpg";
import img16 from "../../assets/img16.jpg";
import img17 from "../../assets/img17.jpg";
import img18 from "../../assets/img18.jpg";
import img19 from "../../assets/img19.jpg";
import img20 from "../../assets/img20.jpg";
import img21 from "../../assets/img21.jpg";
import img22 from "../../assets/img22.jpg";
import img23 from "../../assets/img23.jpg";
import img24 from "../../assets/img24.jpg";
import img25 from "../../assets/img25.jpg";
import img26 from "../../assets/img26.jpg";
import img27 from "../../assets/img27.jpg";
import img28 from "../../assets/img28.jpg";
import img29 from "../../assets/img29.jpg";
import img30 from "../../assets/img30.jpg";
import img31 from "../../assets/img31.jpg";
import img32 from "../../assets/img32.jpg";
import img33 from "../../assets/img33.jpg";

import { SRLWrapper } from "simple-react-lightbox";

const images = [
    { imageName: img2, tag: "mariage" },
    { imageName: img3, tag: "mariage" },
    { imageName: img4, tag: "mariage" },
    { imageName: img5, tag: "mariage" },
    { imageName: img6, tag: "mariage" },
    { imageName: img7, tag: "mariage" },
    { imageName: img8, tag: "mariage" },
    { imageName: img9, tag: "mariage" },
    { imageName: img10, tag: "bebe" },
    { imageName: img11, tag: "bebe" },
    { imageName: img12, tag: "bebe" },
    { imageName: img13, tag: "bebe" },
    { imageName: img14, tag: "bebe" },
    { imageName: img15, tag: "bebe" },
    { imageName: img16, tag: "bebe" },
    { imageName: img17, tag: "bebe" },
    { imageName: img18, tag: "famille" },
    { imageName: img19, tag: "famille" },
    { imageName: img20, tag: "famille" },
    { imageName: img21, tag: "famille" },
    { imageName: img22, tag: "bapteme" },
    { imageName: img23, tag: "bapteme" },
    { imageName: img24, tag: "bapteme" },
    { imageName: img25, tag: "bapteme" },
    { imageName: img26, tag: "couple" },
    { imageName: img27, tag: "couple" },
    { imageName: img28, tag: "couple" },
    { imageName: img29, tag: "couple" },
    { imageName: img30, tag: "grossesse" },
    { imageName: img31, tag: "grossesse" },
    { imageName: img32, tag: "grossesse" },
    { imageName: img33, tag: "grossesse" },
];

function Galerie() {
    const [tag, setTag] = useState("all");
    const [filteredImages, setFilteredImages] = useState([]);
    useEffect(() => {
        tag === "all"
            ? setFilteredImages(images)
            : setFilteredImages(images.filter((image) => image.tag === tag));
    }, [tag]);
    return (
        <div className="App" handleSetTag={setTag}>
            <div className="tags">
                <TagButton
                    name="all"
                    handleSetTag={setTag}
                    tagActive={tag === "all" ? true : false}
                />
                <TagButton
                    name="mariage"
                    handleSetTag={setTag}
                    tagActive={tag === "mariage" ? true : false}
                />
                <TagButton
                    name="bebe"
                    handleSetTag={setTag}
                    tagActive={tag === "bebe" ? true : false}
                />
                <TagButton
                    name="famille"
                    handleSetTag={setTag}
                    tagActive={tag === "famille" ? true : false}
                />
                <TagButton
                    name="bapteme"
                    handleSetTag={setTag}
                    tagActive={tag === "bapteme" ? true : false}
                />
                <TagButton
                    name="couple"
                    handleSetTag={setTag}
                    tagActive={tag === "couple" ? true : false}
                />
                <TagButton
                    name="grossesse"
                    handleSetTag={setTag}
                    tagActive={tag === "grossesse" ? true : false}
                />
            </div>
            <br /> <br />
            <SRLWrapper>
                <div className="container-image">
                    {filteredImages.map((image, index) => (
                        <div key={index + 1} className="image-card">
                            <a href={image.imageName}>
                                <img
                                    className="image"
                                    src={image.imageName}
                                    alt=""
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </SRLWrapper>
        </div>
    );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
    return (
        <button
            className={`tag ${tagActive ? "active" : null}`}
            onClick={() => handleSetTag(name)}
        >
            {name.toUpperCase()}
        </button>
    );
};
export default Galerie;
