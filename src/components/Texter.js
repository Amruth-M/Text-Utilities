import React,{useState} from 'react'
import BoldText from './BoldText'

export default function Texter(props) {
    const handleupClick=()=>{
        console.log("button was clicked"+Text);
        let newText=Text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
      let loText=Text.toLowerCase();
      setText(loText);
    }
    

    const handleonChange=(event)=>{
        console.log("onchange was clicked");
        setText(event.target.value)
        
    }

    const clearClick=(Text)=>{
      setText("");
    }

    const[Text,setText]=useState('Enter your text');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.head}</h1>
        <div className="mb-3">
  <textarea className="form-control" value={Text} onChange={handleonChange} id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'#2e3e4f':'white',color:props.mode==='dark'?'white':'black'}} rows="6"  ></textarea>
</div>
<button disabled={Text.length===0} className="btn btn-primary" onClick={handleupClick}>Upper case</button>
<button disabled={Text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>Lower case</button>
<button disabled={Text.length===0} className="btn btn-primary mx-2" onClick={clearClick}>Clear</button>

{/* <button className="btn btn-primary mx-2" onClick={handleBold}>Bold Case</button> */}


    </div>
    
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>Your text summary</h3>
      <p>{Text.length} Letters and {Text.split(" ").filter((element)=>{return element.length!==0}).length} words </p>
      <p>We need {0.08*Text.split(/\s/).filter((element)=>{return element.length!==0}).length} seonds to read</p>
      <h3>Previewing Bold Text</h3>
      <p>{Text.length>0?<BoldText text={Text}/>:"Nothing to Preview"}</p>

        
    </div>
    </>
  )
}
