import QRCode from 'qrcode'
import { useState } from 'react'
import picture from "./assets/IH-ilustrace_05.png"


function App() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')



	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark: '#812926',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

	return (
		<div className="app">
    <div className='Hero'>
			<h1>QR Generátor Impact Hub</h1>
      <img className='ilustrace' src= {picture} ></img>
      </div>
			<input 
				type="text"
				placeholder="e.g. https://impacthub.cz"
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button onClick={GenerateQRCode}>Generovat</button>
			{qr && <>
				<img className='App_img' src={qr} />
				<a href={qr} download="qrcode.png">Stáhnout</a>
			</>}
		</div>
	)
}

export default App