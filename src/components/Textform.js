import React, {useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState('');
    const clickUpHandle=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.setCustomAlert('Text has been converted to Upper Case', 'success');
        
    }
    const clickLowHandle=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.setCustomAlert('Text has been converted to Lower Case', 'success');
    }

    const onChangeHandle=(event)=>{
        setText(event.target.value);
    }
    const clickClearHandle=()=>{
      setText('');
      props.setCustomAlert('Text has been Cleared', 'success');
    }
    const clickCopyHandle=()=>
    {
      var text=document.getElementById('exampleFormControlTextarea1');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.setCustomAlert('Text copied to clipboard', 'success');
    }
    const clickSpacesHandle=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.setCustomAlert('Extra Spaces has been removed', 'success');
    }

  return (
    <>
    <div className="container mb-3 my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <textarea className="form-control" value={text} style={{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'#212529':'white'}} onChange={onChangeHandle} id="exampleFormControlTextarea1" rows="6"></textarea>
        <button className="btn btn-primary my-3 mx-1" onClick={clickUpHandle}>Convert To UpperCase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={clickLowHandle}>Convert To LowerCase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={clickClearHandle}>Clear Text</button>
        <button className="btn btn-primary my-3 mx-1" onClick={clickCopyHandle}>Copy Text</button>
        <button className="btn btn-primary my-3 mx-1" onClick={clickSpacesHandle}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h3>Summary</h3>
      <p>{text.split(" ").length} Words {text.length} Characters</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Enter Something in the textbox above to preview it Here'}</p>
    </div>
    </>
  )
}
