import { useState } from "react"
import QRCode from "react-qr-code"

export default function QrGen() {
    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    function handleQR(){
        setQrCode(input)
        setInput('')
    }

    return <div style={{height:'100vh',width:'100vw'}}>
        <h1>QR Code Generator</h1>
        <div style={{padding:'20px'}}>
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" name="qr-code" placeholder="Enter your desired QR code" />
            <button disabled={!input && !input.trim() } onClick={handleQR}>Genereate QR code</button>
        </div>
        <div>
            <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
        </div>
    </div>
}