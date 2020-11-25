import React, { useState, useCallback } from 'react';
import "./Index.css"
const functionsCounter = new Set()

export default function Index() {
    const [count, setCount] = useState(0);
    const [otherCounter, setOtherCounter] = useState(0);

    const countUp = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    const countDown = useCallback(() => {
        setCount(count - 1);
    }, [count]);
    const incrementOtherCounter = useCallback(() => {
        setOtherCounter(otherCounter + 1);
    }, [otherCounter]);

    functionsCounter.add(countUp);
    functionsCounter.add(countDown);
    functionsCounter.add(incrementOtherCounter);

    console.log(functionsCounter.size);

    return (
        <div className="Main">
            <p className="Text">Counter with useState</p>
            <p>Kelompok 11</p>
            <p>Maftukhah dan Dayat</p>

            <p className="Text">{count}</p>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" onClick={countUp}>
                        Tambah!
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={countDown}>
                        Kurangi!
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={incrementOtherCounter}>
                        Gada aksi
                    </button>
                </div>
            </div>
        </div>
    );
}