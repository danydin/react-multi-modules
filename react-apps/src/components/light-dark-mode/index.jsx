import { useState } from "react"
import LocalStorageLogic from "./localStoargeLogic"

export default function LightDarkMode(){
    const [mode, setMode] = useState('light')
    const [theme, setTheme] = LocalStorageLogic('theme','light')

    function handleToggle(){
        setTheme(theme==='light'?'dark':'light')
    }
    console.log(theme)
    return <div className="light-dark-mode-container">
        <div className="light-dark-mode">
            <p>Lorem ipusm</p>
            <button onClick={handleToggle}>Change to {mode==='light'?'dark Mode': 'light mode'}</button>
        </div>
    </div>
}