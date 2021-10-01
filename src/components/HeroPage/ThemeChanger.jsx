import { useState } from "react";
const ThemeChanger = () => {
    const [pColor, setPcolor] = useState('#FED605')
    const [sColor, setScolor] = useState('#FED605')
    const [wColor, setWcolor] = useState('#FFFFFF')
    const [bColor, setBColor] = useState('#000000')
    function setP(e){
      setPcolor(e.target.value);
      setScolor(e.target.value);
      setWcolor(e.target.value);
      setBColor(e.target.value);
      let HTML = document.documentElement
      HTML.style.setProperty(`--${e.target.name}`,pColor)
      // console.log(e.target.name);
    }
    const defaultTheme = () => {
      let HTML = document.documentElement;
      HTML.style.setProperty(`--p-clr`,'#FED605')
      HTML.style.setProperty(`--s-clr`,'#2079FF')
      HTML.style.setProperty(`--w-clr`,'#ffffff')
      HTML.style.setProperty(`--b-clr`,'#000000')

    }
    const theme1 = () => {
      let HTML = document.documentElement;
      HTML.style.setProperty(`--p-clr`,'#ffffff')
      HTML.style.setProperty(`--s-clr`,'#ed2c8c')
      HTML.style.setProperty(`--w-clr`,'#ffffff')
      HTML.style.setProperty(`--b-clr`,'#820085')

    }
    const theme2 = () => {
      
      let HTML = document.documentElement;
      HTML.style.setProperty(`--p-clr`,'#ffffff')
      HTML.style.setProperty(`--s-clr`,'#fdb515')
      HTML.style.setProperty(`--w-clr`,'#003262')
      HTML.style.setProperty(`--b-clr`,'#c38700')

    }
    const theme3 = () => {
      
      let HTML = document.documentElement;
      HTML.style.setProperty(`--p-clr`,'#ffffff')
      HTML.style.setProperty(`--s-clr`,'#000000')
      HTML.style.setProperty(`--w-clr`,'#ffffff')
      HTML.style.setProperty(`--b-clr`,'#000000')

    }
    const theme4 = () => {
      
      let HTML = document.documentElement;
      HTML.style.setProperty(`--p-clr`,'#c70000')
      HTML.style.setProperty(`--s-clr`,'#000000')
      HTML.style.setProperty(`--w-clr`,'#c70000')
      HTML.style.setProperty(`--b-clr`,'#000000')

    }
    return(
        <div className="theme">
          <b>Choose Colors 👉</b> --
             Color 1 : <input id="base" onChange = {setP}type="color" name="p-clr" value={pColor} />
             Color 2 : <input id="base" onChange = {setP}type="color" name="s-clr" value={sColor} />
             Color 3 : <input id="base" onChange = {setP}type="color" name="w-clr" value={wColor} />
             Color 4 : <input id="base" onChange = {setP}type="color" name="b-clr" value={bColor} /> 
             <br />
             <b>OR themes --</b>
           <button onClick = {defaultTheme}>Default(Recommended)</button>
           <button onClick = {theme1}>Theme 1</button>
           <button onClick = {theme2}>Theme 2</button>
           <button onClick = {theme3}>Theme 3 (Recommended)</button>
           <button onClick = {theme4}>Theme 4</button>
              </div>
    )
}

export default ThemeChanger;