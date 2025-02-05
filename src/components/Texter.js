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

    const[Text,setText]=useState('enter text');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.head}</h1>
        <div className="mb-3">
  <textarea className="form-control" value={Text} onChange={handleonChange} id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} rows="6"  ></textarea>
</div>
<button className="btn btn-primary" onClick={handleupClick}>Upper case</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Lower case</button>
{/* <button className="btn btn-primary mx-2" onClick={handleBold}>Bold Case</button> */}


    </div>
    
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>Your text summary</h3>
      <p>{Text.length} Letters and {Text.split(" ").length} words </p>
      <p>We need {0.08*Text.split(" ").length} seonds to read</p>
<p><BoldText text={Text}/></p>
        
    </div>
    </>
  )
}
