
import {useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import logo from '../icon/copy.png'

const PasswordGen = () => {
const [output,setOutput  ] = useState("null");
        const [isUpperChecked,setUpperChecked]= useState(false);
        const [isLowerChecked,setLowerChecked]= useState(false);
        const [isNumberChecked,setNumberChecked]= useState(false);
        const [isSymbolChecked,setSymbolChecked]= useState(false);
    
    let lengthVar = 0;
     const passwordGenerate = () => {
  
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "!@#$%&*";
    let finalChar ="";
    let length = lengthVar;
    let password = "";

    if (isUpperChecked === true){
        finalChar=finalChar+upperCaseChar
    }
    if (isLowerChecked === true){
        finalChar=finalChar+lowerCaseChar
    }
    if (isNumberChecked=== true){
        finalChar=finalChar+number
    }
    if (isSymbolChecked === true){
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
        
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
      </div>
      <br />
      <div className="checkbox">
      <input onClick={()=>{setUpperChecked(!isUpperChecked)}} type="checkbox" id="UpperCase" />
      <label htmlFor="UpperCase">Upper Case</label>
      <br />
      <input onClick={()=>{setLowerChecked(!isLowerChecked)}} type="checkbox" id="LowerCase" />
      <label htmlFor="LowerCase">Lower Case</label>
      <br />
      <input onClick={()=>{setNumberChecked(!isNumberChecked)}} type="checkbox" id="IncludeNumbers" />
      <label htmlFor="IncludeNumbers">Include Number</label>
      <br />
      <input onClick={()=>{setSymbolChecked(!isSymbolChecked)}} type="checkbox" id="IncludeSymbols" />
      <label htmlFor="IncludeSymbols">Include Symbol</label>
      </div >
      
      <button className="btngen" onClick={passwordGenerate}>Generate Password</button>
      
    </div>
  );
};
export default PasswordGen;
