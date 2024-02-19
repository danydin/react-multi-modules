import LocalStorageLogic from "./localStoargeLogic"
import './style.css'

export default function LightDarkMode() {
    const [mode, setMode] = LocalStorageLogic('theme', 'light')

    function handleToggle() {
        setMode(mode === 'light' ? 'dark' : 'light')
    }

    console.log(mode)

    return <div className="light-dark-mode-container" data-mode={mode}>
        <div className="light-dark-mode">
            <p>Mode Color</p>
            <button onClick={handleToggle}>Change to {mode==='light'?'dark Mode': 'light mode'}</button>
        </div>
    </div >
}