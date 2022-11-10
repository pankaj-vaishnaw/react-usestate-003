
import {useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import logo from '../icon/copy.png'

const PasswordGen = () => {
const [output,setOutput ] = useState("");
    
    var lengthVar = 0;
    let checkUpper =false
    let checkLower =false
    let checkNumber = false
    let checkSymbol =false



  const passwordGenerate = () => {
  
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "!@#$%&*";
    let finalChar ="";
    let length = lengthVar;
    let password = "";

    if (checkUpper === true){
        finalChar=finalChar+upperCaseChar
    }
    if (checkLower === true){
        finalChar=finalChar+lowerCaseChar
    }
    if (checkNumber=== true){
        finalChar=finalChar+number
    }
    if (checkSymbol === true){
        finalChar=finalChar+symbol
    }

    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random()*finalChar.length+1)
        password = password+finalChar.charAt(index)
    }
  
    setOutput(password);
  };
  
 
  return (
    <div className="main">
      <h1 className="passh1">Password Generator</h1>
      
      <CopyToClipboard text={output}> 
        <div>
            <input type="text" disabled value={output} className="input" />
            
      <button  className="copy"><img  className="img" src={logo} alt ="no img"/></button> 
      </div>
      </CopyToClipboard>
      <br />
      <div className="passlength">
      <p>Select Password length</p>
      <select className="option"onChange={(e)=>{lengthVar=e.target.value}}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      </div>
      <br />
      <div className="checkbox">
      <input onClick={()=>{checkUpper=!checkUpper}} type="checkbox" id="UpperCase" />
      <label htmlFor="UpperCase">Upper Case</label>
      <br />
      <input onClick={()=>{checkLower=!checkLower}} type="checkbox" id="LowerCase" />
      <label htmlFor="LowerCase">Lower Case</label>
      <br />
      <input onClick={()=>{checkmiddle=!checkmiddle}} type="checkbox" id="IncludeNumbers" />
      <label htmlFor="IncludeNumbers">Include Numbers</label>
      <br />
      <input onClick={()=>{checkLast=!checkLast}} type="checkbox" id="IncludeSymbols" />
      <label htmlFor="IncludeSymbols">Include Symbols</label>
      </div >
      
      <button className="btngen" onClick={passwordGenerate}>Generate Password</button>
      
    </div>
  );
};
export default PasswordGen;
