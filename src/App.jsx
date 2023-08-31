// Validation

import QRCode from 'qrcode';
import { useState } from 'react';
import picture from "./assets/IH-ilustrace_05.png";
import picture1 from "./assets/Logo IH ČR red (1).png"


function App() {
  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');
  const [campaign,setCampaign] =useState('');


  const [error, setError] = useState('');

  const GenerateQRCode = () => {
    if (!url) {
      setError('Zadej URL stránky prosím');
      return;
    }
	if (!campaign) {
		setError('Zadej popis kampaně prosím');
		return;
	  }

    // Add UTM parameters to the URL
    const urlWithUTM = `${url}?utm_source=impacthub&utm_medium=qr&utm_campaign=${campaign}`;


    QRCode.toDataURL(urlWithUTM, {
      width: 800,
      margin: 2,
      color: {
        // Impacthub red color: #812926'
        dark: '#FFFFFF',
        //Add transparent background of the image, instead of: light: '#EEEEEEFF' /transparent #0000
        light: '#0000'
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
    <img className='logo' src={picture1} />
      <div className='Hero'>
        <h1>QR generátor</h1>
        <img className='ilustrace' src={picture} />
        
      </div>
     
	  <ul className='list'>
		Nejedná se jen tak o nějaký generátor. Tenhle do sebe automaticky zahrnuje data o tom, ze kterého plakátu návštěvník 
    na web přichází. Umíme díky tomu v analytice změřit, kolik lidí si ho naskenovalo a víme, 
    jestli nám konkrétní plakát v prostoru dělá potřebnou službu. Jasná čísla, žádné odhady. A to je boží!
	  </ul>
    <div className='inputs'>
    
    <div className='input1'> 
    
      <input
        type="text"
        placeholder="e.g. www.impacthub.cz"
        value={url}
        id="input1"
        onChange={e => setUrl(e.target.value)}
      />
     <p for="input1" className='description'>Sem vlož URL, na kterou chceš odkázat</p>
    </div>
<div className='input2'>
      <input
        type="text"
        placeholder="e.g. Challenge_Lab_prihlasky"
        value={campaign}
        id="input2"
        onChange={e => setCampaign(e.target.value)}
      />
      <p for="input2" className='description'>Sem napiš, o jaký plakát se jedná</p>

</div>
</div>
     {error && <p className="error">{error}</p>}

      <button onClick={GenerateQRCode}>Vygenerovat</button>
      {qr && (
        <>
          <img className='App_img' src={qr} />
          <a className="download" href={qr} download="qrcode.png">Stáhnout</a>
        </>
      )}
    </div>
	<footer> <a href='https://www.linkedin.com/in/tereza-ettlerov%C3%A1/'>© Tereza Ettlerová</a> </footer>
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