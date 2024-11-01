import { useState } from "react"
import "../App.css"

export default function Form(){

    const [RGB, setRGB] = useState('')
    const [backgroundColor, setBackgroundColor] = useState('')

    function handleChange(e){
        const value = e.target.value
        if(value.length === 7){
           const hex = value.replace(/^#/, '');
           const r = parseInt(hex.substring(0, 2), 16);
           const g = parseInt(hex.substring(2, 4), 16);
           const b = parseInt(hex.substring(4, 6), 16);
           if(r && g && b){
                setBackgroundColor(value)
                setRGB(`(${r}:${g}:${b})`)
           } else {
                setRGB('Ошибка')
                setBackgroundColor('red')

           }
        }else {
            setRGB('')
        }
    }

    return <div className="overlay" style={{backgroundColor : backgroundColor}}>
        <form>
            <input type="text" className="input" onInput={handleChange} name="hex"/>
            <input value={RGB} disabled type="text" className="input" name="rgb"/>
        </form>
    </div>
}