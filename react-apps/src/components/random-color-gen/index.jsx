import { useState } from "react"

export default function GenerateColor() {
    const [colorType, setColorType] = useState('hex')
    const [bgColor, setBGColor] = useState('#000')

    function randomNumber(length){
        return Math.floor(Math.random() * length)
    }

    function generateRandomColor(){
        if (colorType === "hex"){
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
        let hexColor = "#"

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomNumber(hex.length)]
        }
        console.log(hexColor)
        setBGColor(hexColor)
        } else {
            
        }
    }

    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            background: bgColor
        }}>
            <button onClick={()=>colorType === 'hex' ? setColorType('rgb') : setColorType('hex')}>{colorType === 'hex' ? "Change to RGB" : "Change to HEX"}</button>
            <button onClick={() => generateRandomColor()}>{colorType === 'hex' ? "Generate Random HEX Color" : "Genereate Random RGB color"}</button>
        </div>
        // display the type and content of the color on ht l
    )
}