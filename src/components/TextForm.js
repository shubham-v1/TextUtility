import React,{useState} from "react";

function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () =>{
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert('success',"Text has been converted to UpperCase !");
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('success',"Text has been converted to LowerCase !");
    }
    const handleClearText = () =>{
        let newText = "";
        setText(newText);
        props.showAlert('success',"Text has been removed!");
    }
    const handleRemSpace = () =>{
        let textArr = text.split(" ");
        let newText = "";
        textArr.forEach(elem =>{
            if(elem !== "")
            newText+=elem+" ";
        });
        setText(newText);
        props.showAlert('success',"Extra space has been removed !");
        
    }
    const handleCopyText = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert('success',"Text has been copied !");
    }
    const handleOnChange = (event) =>{
        let newText = event.target.value;
        setText(newText);
    }
    return (
        <>
            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>{props.textFormHeading}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.labelText}</label>
                    <textarea value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="9" style={{ backgroundColor: props.mode === "light" ? "white" : "#1C2833", color: props.mode === 'light' ? "black" : "white" }}></textarea>
                </div>
                <button onClick={handleUpClick} className="btn btn-primary me-3">Convert to UpperCase</button>
                <button onClick={handleLowClick} className="btn btn-primary me-3">Convert to LowerCase</button>
                <button onClick={handleClearText} className="btn btn-primary me-3">Clear Text</button>
                <button onClick={handleCopyText} className="btn btn-primary me-3">Copy Text</button>
                <button onClick={handleRemSpace} className="btn btn-primary me-3">Remove Extra Spaces</button>
            </div>
            <div className="container" style={{color:props.mode==="light"?"black":"white"}}>
                <h3>Your Text summary</h3>
                <p>{text.split(" ").length-1} words and {text.length} characters.</p>
                <p>{0.008*text.split(" ").length} mins</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter some text to see preview !"}</p>
            </div>
        </>
    );
}

export default TextForm;