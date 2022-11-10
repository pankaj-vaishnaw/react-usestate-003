// import React,{useState} from "react";

// function PasswordGen() {

//   const[password, setPassword] = useState("");

//     let p =0;
//   const passwordGenerator = () => {
//     if(p<=0){
//       return;
//     }
//     const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
//     const numbers = "0123456789";
//     const symbols = "!@#$*";
//     let final = upperCaseChar + lowerCaseChar + numbers + symbols;
//     let pass = "";
//     for (let i = 0; i < p; i++) {
//       let char = Math.floor(Math.random() * final.length + 1);
//       console.log(char);
//       pass += final.charAt(char);
//     }
//     setPassword(pass);
//     const upperCase = document.getElementById('uppercase');
//     const lowerCase = document.getElementById('lowercase');
//     const number = document.getElementById('number');
//     const sym = document.getElementById('symbol');
//     const hasUpperCase = upperCase.checked
//     const hasLowerCase = lowerCase.checked
//     const hasNumber = number.checked
//     const hasSymbol = sym.checked
//     console.log(hasUpperCase,hasLowerCase,hasNumber,hasSymbol)
//   };

//   return (
//     <div className="password flex">
//       <h1>Password Generator</h1>
//       <div>
//         <input className="input" type={"text"} disabled value={password} />
//         <br />
//         <div className="length">
//           <p>Select password length</p>
//           <select className="select" onChange={(e)=>{p=e.target.value}}>
//             <option className="option" value={"0"}>0</option>
//             <option className="option"  value={"1"}>1</option>
//             <option className="option"  value={"2"}>2</option>
//             <option className="option"  value={"3"}>3</option>
//             <option className="option"  value={"4"}>4</option>
//             <option className="option"  value={"5"}>5</option>
//             <option className="option"  value={"6"}>6</option>
//             <option className="option"  value={"7"}>7</option>
//             <option className="option"  value={"8"}>8</option>
//           </select>
//         </div>
//         <br />
//         <div>
//         <input type={"checkbox"} id="uppercase" />
//         <label htmlFor="uppercase">Include uppercase letters</label>
//         <br />
//         <input type={"checkbox"} id="lowercase" />
//         <label htmlFor="lowercase">Include lowercase letters</label>
//         <br />
//         <input type={"checkbox"} id="number" />
//         <label htmlFor="number">Include numbers</label>
//         <br />
//         <input type={"checkbox"} id="symbol" />
//         <label htmlFor="symbol">Include symbols</label>
//         </div>
//         <br />
//         <button className="btn" onClick={passwordGenerator}>Generate Password</button>
//       </div>
//     </div>
//   );
// }

// export default PasswordGen;

import {useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import logo from '../icon/copy.png'

const PasswordGen = () => {
const [output,setOutput ] = useState("");
    
    var lengthVar = 0;
    let checkUpper =false
    let checkLower =false
    let checkmiddle = false
    let checkLast =false



  const passwordGenerate = () => {
  
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%&*";
    let finalChar ="";
    let length = lengthVar;
    let password = "";

    if (checkUpper === true){
        finalChar=finalChar+upperCaseChar
    }
    if (checkLower === true){
        finalChar=finalChar+lowerCaseChar
    }
    if (checkmiddle === true){
        finalChar=finalChar+numbers
    }
    if (checkLast === true){
        finalChar=finalChar+symbols
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
