import { useState } from "react"

export default function GenerateColor() {
    const [colorType, setColorType] = useState('hex')
    const [bgColor, setBGColor] = useState('#000')

    function randomNumber(length) {
        return Math.floor(Math.random() * length)
    }

    function generateRandomColor() {
        if (colorType === "hex") {
            const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
            let hexColor = "#"

            for (let i = 0; i < 6; i++) {
                hexColor += hex[randomNumber(hex.length)]
            }
            console.log(hexColor)
            setBGColor(hexColor)
        } else {
            let rgb = []
            for (let i = 0; i < 3; i++) {
                rgb.push(randomNumber(257))
            }
            console.log(`rgb(${rgb})`)
            setBGColor(`rgb(${rgb})`)
        }
    }

    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            background: bgColor,
            boxSizing: "border-box",
        }}>
            <button style={{ margin:"15px", padding: "10px 20px" }} onClick={() => colorType === 'hex' ? setColorType('rgb') : setColorType('hex')}>{colorType === 'hex' ? "Change to RGB" : "Change to HEX"}</button>
            <button style={{ padding: "10px 20px" }} onClick={() => generateRandomColor()}>{colorType === 'hex' ? "Generate Random HEX Color" : "Genereate Random RGB color"}</button>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: '#fff',
                fontSize: '60px',
                marginTop: '50px',
                flexDirection: 'column',
            }}>
                <h3>{colorType === 'hex' ? "HEX COLOR" : "RGB COLOR"}</h3>
                <h2>{bgColor}</h2>
            </div>
        </div>
    )
}
