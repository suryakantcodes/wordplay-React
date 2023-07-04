import React, {useState} from 'react'
// import copy from 'react-copy-to-clipboard'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase button is Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Your Text is Uppercase", "success")
    }

    const handleLowerClick = ()=>{
        // console.log("Lowercase button is Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Your Text is Lower Case", "success")
    }

    const handleCopyText = ()=>{
        console.log("Text Copied to clipboard");
        var text = document.getElementById("textBox")
        // text.select();
        // text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Your Text is Copied", "success")
    }

    const handleCamelCase = ()=>{

        let camelCaseText = text.split(' ').map(function(word, index){
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
        setText(camelCaseText);
        
    }


    const handleOnChange = (event)=>{
        // console.log("OnChange");
        setText(event.target.value);
    }

    const handleRemoveSpace = (event)=>{
      let newText = text.split(/[ ]+/);
      console.log(newText);
      setText(newText.join(' '))
      props.showAlert("Spaces are removed", "success")
       
    }


    const [text, setText] = useState('');
    // text = "new text" // Wrong way to do it
    // setText("this is a right way to do it!");
  return (
    <>
        <div>
            <div className="container mb-3">
                <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            <textarea className="form-control" id="textBox" value= {text} onChange={handleOnChange} rows="10" style={{backgroundColor: props.mode==='light'?'white':'#4C4C4C', color: props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button className='btn btn-primary mx-3' onClick={handleUpClick}>Convert to uppercase</button>
            <button className='btn btn-success mx-3' onClick={handleLowerClick}>Convert to Lowercase</button>
            <button className='btn btn-success mx-3' onClick={handleCopyText}>Convert to Clipboard</button>
            <button className='btn btn-success mx-3' onClick={handleCamelCase}>Convert to CamelCase</button>
            <button className='btn btn-success mx-3' onClick={handleRemoveSpace}>Remove Extra spacee</button>
        </div>
       
        <div className="Container my-3" style={{color: props.mode==='light'?'black':'white'}} >  {/* one {for javascript and other { for object */}
        <h2> Your Text Summary</h2>
        <p>{ text.split(' ').length } Words and {text.length} Characters</p>
        <p>It takes { 0.008 * text.split(' ').length} minutes to read</p>
        <h2>Text Preview</h2>
        <p>{text.length===0?"Enter something to preview it here":text}</p>
        </div>
    </>
    
  )
}



// style={{color: props.mode==='dark'?'white':'black'}}