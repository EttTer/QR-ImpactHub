// Validation
import QRCode from 'qrcode';
import { useState } from 'react';
import picture from "./assets/IH-ilustrace_05.png";


function App() {
  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');
  const [campaign,setCampaign] =useState('');


  const [error, setError] = useState('');


  const GenerateQRCode = () => {
    if (!url) {
      setError('URL is required');
      return;
    }
	if (!campaign) {
		setError('Name of the campaign is required');
		return;
	  }

    // Add UTM parameters to the URL
    const urlWithUTM = `${url}?utm_source=impacthub&utm_medium=qr&utm_campaign=${campaign}`;


    QRCode.toDataURL(urlWithUTM, {
      width: 800,
      margin: 2,
      color: {
        dark: '#812926',
        light: '#EEEEEEFF'
      }
    }, (err, url) => {
        if (err) return console.error(err);
 
        console.log(url);
        setQr(url);
        setError('');
      });
    };


  return (
	<>
    <div className="app">
      <div className='Hero'>
        <h1>QR Generátor Impact Hub</h1>
        <img className='ilustrace' src={picture} />
      </div>
	  <ul className='list'>
		<li>Vlož URL adresu stránky, kam má kód odkazovat- do prvního rámečku</li><br></br>
		<li>Vlož popis čeho se kód týká nebo kde bude použit- do druhého rámečku</li>
	  </ul>
      <input
        type="text"
        placeholder="e.g. https://impacthub.cz"
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="e.g. zivy_region_letak"
        value={campaign}
        onChange={e => setCampaign(e.target.value)}
      />
     {error && <p className="error">{error}</p>}
      <button onClick={GenerateQRCode}>Generovat</button>
      {qr && (
        <>
          <img className='App_img' src={qr} />
          <a className="download" href={qr} download="qrcode.png">Stáhnout</a>
        </>
      )}
    </div>
	<footer>© Tereza Ettlerová</footer>
	</>
  );
}


export default App;


/* s UTM bez validace


import QRCode from 'qrcode';
import { useState } from 'react';
import picture from "./assets/IH-ilustrace_05.png";

function App() {
  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');
  const [campaign,setCampaign] =useState('');

  const GenerateQRCode = () => {
    // Add UTM parameters to the URL
    const urlWithUTM = `${url}?utm_source=impacthub&utm_medium=qr&utm_campaign=${campaign}`;

    QRCode.toDataURL(urlWithUTM, {
      width: 800,
      margin: 2,
      color: {
        dark: '#812926',
        light: '#EEEEEEFF'
      }
    }, (err, url) => {
      if (err) return console.error(err);

      console.log(url);
      setQr(url);
    });
  };

  return (
    <div className="app">
      <div className='Hero'>
        <h1>QR Generátor Impact Hub</h1>
        <img className='ilustrace' src={picture} />
      </div>
      <input
        type="text"
        placeholder="e.g. https://impacthub.cz"
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
	  <input
        type="text"
        placeholder="e.g. zivy_region_letak"
        value={campaign}
        onChange={e => setCampaign(e.target.value)}
      />
      <button onClick={GenerateQRCode}>Generovat</button>
      {qr && (
        <>
          <img className='App_img' src={qr} />
          <a href={qr} download="qrcode.png">Stáhnout</a>
        </>
      )}
    </div>
  );
}

export default App;/* 




/* verze bez UTM parametru


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

export default App*/