import { useState } from 'react'
import {FaClipboard} from 'react-icons/fa'
import './App.css'

interface pass {
  length: number,
  uppercase: boolean,
  lowercase: boolean,
  numbers: boolean,
  symbols: boolean,
}

function App() {
  const [passwordGen, setPasswordGen] = useState<pass>({
    length: 5,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  })
  const [passwrodText,setPasswordText] = useState<string>("")

  const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
  const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
  const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
  const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
  ).concat(
    arrayFromLowToHigh(91, 96)
  ).concat(
    arrayFromLowToHigh(123, 126)
  )

  function arrayFromLowToHigh(low:number, high:number) {
    const array = []
    for (let i = low; i <= high; i++) {
      array.push(i)
    }
    return array
  }
 
  const setPasswordLength = (val:number) => {
    setPasswordGen({
      ...passwordGen,
      length: val,
    });
  };

  const handleChangeNumbers = () => {
    setPasswordGen({
      ...passwordGen,
      numbers: !passwordGen.numbers,
    });
  };

  const handleChangeUppercase = () => {
    setPasswordGen({
      ...passwordGen,
      uppercase: !passwordGen.uppercase,
    });
  };

  const handleChangeLowercase = () => {
    setPasswordGen({
      ...passwordGen,
      lowercase: !passwordGen.lowercase,
    });
  };
  
  const handleChangeSymbols = () => {
    setPasswordGen({
      ...passwordGen,
      symbols: !passwordGen.symbols,
    });
  };

  const generatePassword = ()=>{
    // let symbols = '!@#$%&*/,.'
    // let password:string[] = []
    // let charCodes:any = []
    // if(passwordGen.lowercase){
    //   // charCodes.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97))
    //   charCodes.push(Math.floor(Math.random() * 26) + 97)
    //   // let lowerCase = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      
    // }
    // if(passwordGen.uppercase) {
    //   // charCodes.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65))
    //   charCodes.push(Math.floor(Math.random() * 26) + 65)
    //   // let upperCase =String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    // }
    // if(passwordGen.numbers) {
    //   // charCodes.push(String.fromCharCode(Math.floor(Math.random() * 10) + 48))
    //   charCodes.push(Math.floor(Math.random() * 10) + 48)
    //   // let number = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    // }
    // if(passwordGen.symbols){
    //   //  charCodes.push(symbols[Math.floor(Math.random() * symbols.length)])
    //    charCodes.push(symbols[Math.floor(Math.random() * symbols.length)])
    //   // let symbol = symbols[Math.floor(Math.random() * symbols.length)];
    // }
    // // let charCodes = [...lowerCase,...upperCase,...number,...symbol]
    // console.log(charCodes)


    // for(let i = 0; i <= passwordGen.length;i++){
    //   const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    //   console.log("characterCode",characterCode)
    //   // password.push(characterCode)
    //   password.push(String.fromCharCode(characterCode))

    // }    
    
    
    let charCodes = LOWERCASE_CHAR_CODES
    if (passwordGen.uppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (passwordGen.numbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (passwordGen.symbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    console.log("charCodes",charCodes)
    const passwordCharacters = []
    for (let i = 0; i < passwordGen.length; i++) {
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
      console.log(characterCode)
      passwordCharacters.push(String.fromCharCode(characterCode))
    }
    setPasswordText(passwordCharacters.join(""))
    // return passwordCharacters.join('')
  }
  
  // console.log("pText",passwrodText)
  return (
    <div className="container">
      <h2>Password Generator</h2>
      <div className="result-container">
        <span id="result">{passwrodText} </span>
        <button className="btn" id="clipboard">
          <i className="far fa-clipboard"><FaClipboard/> </i>
        </button>
      </div>
      <div className="settings">
        <div className="setting">
          <label>Password length</label>
          <input type="number" id="length" min='4' max='20' value={passwordGen.length} onChange={(e:any)=>setPasswordLength(e.target.value)}/>
        </div>
        <div className="setting">
          <label>Include uppercase letters</label> 
          <input type="checkbox" id="uppercase" onChange={handleChangeUppercase}/>
        </div>
        <div className="setting">
          <label>Include lowercase letters</label> 
          <input type="checkbox" id="lowercase" onChange={handleChangeLowercase}/>
        </div>
        <div className="setting">
          <label>Include numbers</label> 
          <input type="checkbox" id="numbers" onChange={handleChangeNumbers}/>
        </div>
        <div className="setting">
          <label>Include symbols</label> 
          <input type="checkbox" id="symbols" onChange={handleChangeSymbols}/>
        </div>
      </div>
      <button className="btn btn-large" id="generate" onClick={generatePassword}>
        Generate password
      </button>
    </div>
  )
}     
 

export default App
