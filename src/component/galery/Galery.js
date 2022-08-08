import React, { useEffect, useState } from "react";
import "./GaleryStyle.css";
import Images from "../../data/Images";
import Modal from "./modal/Modal";

function Galery() {
    const [tag, setTag] = useState("all");
    const [filteredImages, setFilteredImages] = useState([]);
    const [clickedImg, setClickedImg] = useState(null);
    const handleClick = (e, item) => {
        setClickedImg(item.imageName);
        e.preventDefault();
    };

    useEffect(() => {
        tag === "all"
            ? setFilteredImages(Images)
            : setFilteredImages(Images.filter((image) => image.tag === tag));
    }, [tag]);

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                setClickedImg(null);
            }
        };
        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    }, []);
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
            <div className="container-image">
                {filteredImages.map((item, index) => (
                    <div key={index + 1} className="image-card">
                        <a href={item.imageName}>
                            <img
                                className="image"
                                src={item.imageName}
                                alt=""
                                onClick={(e) => handleClick(e, item)}
                            />
                        </a>
                    </div>
                ))}
                <div>
                    {clickedImg && (
                        <Modal
                            clickedImg={clickedImg}
                            setClickedImg={setClickedImg}
                        />
                    )}
                </div>
            </div>
            <br /> <br />
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

export default Galery;
