import '../App.css'
import React, { useState } from "react"

export function Cruscotto() {
    const [capitaleIniziale, setCapitaleIniziale] = useState(0);
    const [mesi, setMesi] = useState(0);
    const [investimentoMensile, setInvestimentoMensile] = useState(0);
    const [tassoDiCrescita, setTassoDiCrescita] = useState(0);
    const [capitaleTotale, setCapitaleTotale] = useState(0);
    const [capitaleInvestito, setCapitaleInvestito] = useState(0);

    const calcolaInteressi = () => {
        var tassoMensile = tassoDiCrescita / 12
        var totale = capitaleIniziale * ((1+tassoMensile) ** (mesi));
        for (var i = 1; i <= mesi; i++)
            totale += investimentoMensile * ((1+tassoMensile) ** (mesi-i));
        setCapitaleTotale(+(totale.toFixed(2)));
        setCapitaleInvestito((capitaleIniziale + (investimentoMensile*mesi)));
    }

    const render = <>
        <div className='cruscotto display column'>
            <div className='title'>
                <h1 style={{ textAlign: "center" }}>Calcolatore di interessi composti</h1>
            </div>
            <div className='form display column'>
                <label>Capitale Iniziale:</label>
                <input type="number" value={capitaleIniziale} onChange={(e)=>{setCapitaleIniziale(+e.target.value)}}/>
                <label>Durata in mesi:</label>
                <input type="number" value={mesi} onChange={(e)=>{setMesi(+e.target.value)}}/>
                <label>Soldi investiti mensilmente</label>
                <input type="number" value={investimentoMensile} onChange={(e)=>{setInvestimentoMensile(+e.target.value)}}/>
                <label>Tasso di crescita (1 equivale al 100%)</label>
                <input type="number" value={tassoDiCrescita} onChange={(e)=>{setTassoDiCrescita(+e.target.value)}}/>
                <button className="btn" onClick={() => calcolaInteressi()}>Processa</button>
            </div>
            <div className='result display column'>
                <h4>Valore investito: € {capitaleInvestito} </h4>
                <h4>Capitale Totale: € {capitaleTotale}</h4>
                <h4>Ritorno Vero: € {+(capitaleTotale - capitaleInvestito).toFixed(2)} (con tasse al 26% € {+((capitaleTotale - capitaleInvestito) * 0.76).toFixed(2)})</h4>
            </div>
        </div>
    </>

    return render;
}