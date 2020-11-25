import React, { useState, useContext } from "react";
import "./Index.css";

const themes = {
    light: {
        id: 1,
        foreground: "#1a1c20",
        background: "#01c5c4",
    },
    dark: {
        id: 2,
        foreground: "#fff3e2",
        background: "#2d6187",
    },
};

const ThemeContext = React.createContext(themes.light);

export default function Index(){
    const [theme, setTheme] = useState(themes.dark);

    const changeTheme = () => {
        if (theme.id === themes.light.id){
            setTheme(themes.dark);
        } else {
            setTheme(themes.light);
        }
    };
    
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <div className="Main" style={{ background: theme.background, color: theme.foreground }}>
                <p className="Text">Theme by useContext</p>
                <p>Kelompok 11</p>
                <p>Maftukhah dan Dayat</p>
                <ThemedButton/>
            </div>
        </ThemeContext.Provider>
    );
}

function ThemedButton(){
    const { theme, changeTheme } = useContext(ThemeContext);

    return(
        <button
            className="Button"
            style={{ background: theme.background, color: theme.foreground }}
            onClick={changeTheme}        
        >
            Ganti Tema!
        </button>
    );
}