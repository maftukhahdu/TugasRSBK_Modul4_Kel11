import React, { useState } from "react";
import logo from "../logo.svg";
import "./Counter.css"
const functionsCounter = new Set()

export default function Counter() {
    const [showImage, setShowImage] = useState(true);
    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount(count + 1);
    };

    const countDown = () => {
        setCount(count - 1);
    };

    const hideImage = () => {
        setShowImage(!showImage);
    };

    functionsCounter.add(countUp);
    functionsCounter.add(countDown);

    console.log(functionsCounter.size);

    return (
        <div className="Main">
            <p className="Text">Counter with useState</p>
            <p>Kelompok 11</p>
            <p>Maftukhah dan Dayat</p>

            <div className="ViewImage">
                <div className="ViewImage1">
                    <img
                        className="App-logo"
                        style={{ display: showImage === true ? "flex" : "none" }}
                        src={logo}
                        alt="logo"
                    />
                </div>
                <button className="Button" onClick={hideImage}>
                    {showImage !== true ? "Tampilkan" : "Sembunyikan"}
                </button>
            </div>

            <p className="Text">{count}</p>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" onClick={countUp}>
                        Tambah
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={countDown}>
                        Kurang
                    </button>
                </div>
            </div>
        </div>
    );
}