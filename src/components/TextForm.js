import {useState} from 'react'

export default function TextForm() {
    // normal vars
    const Regex = /\s+/;
    const previewBox = {
        border: '1px solid green',
        padding: '20px',
        borderRadius: '10px',
        marginTop: '100px'
    }
    // state vars
    const [text, setText] = useState("");
    const [modified, setModified] = useState("");

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    // buttons logics
    const handleUpClick = (e) => {
        e.preventDefault();
        setModified(text.toUpperCase());
    }

    const handleCopy = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(modified);
    }

    // associate functions
    const textLength = (x) => {
        return  x.split(Regex).filter(w => w !== "").length;
    }
    const calculatedMiutes = (func) => {
        return Math.round((0.2 * func) / 60)
    }

    return (
        <>
        <div className='container my-3'>
            <form>
                <h1>Modify Your Text</h1>
                <div className="form-group">                    
                    <textarea className="form-control"
                        rows="9"
                        placeholder='Enter your text here'
                        value={text}
                        onChange={handleTextChange}
                    >
                    </textarea>                  
                </div>

                <button
                    className="btn btn-primary my-3"
                    onClick={handleUpClick}
                >
                    UpperCase
                </button>
                    
                   

            </form>
        </div>
        
         {/* * how many words and how many characters
         * how much time reader need to read
         * preview the finalized version of the text */}
         
            <div className="utils container">
                <h2>This text has {textLength(text)} words and {text.length} characters</h2>
                <h3>
                    This article need time to read around {calculatedMiutes(textLength(text))}
                    {calculatedMiutes(textLength(text)) > 1 ? " minutes" : " minute" }
                </h3>
                <div className="preview">
                    <div className="d-sm-flex justify-content-between mt-3 align-items-center" style={{height: '80px'}}>
                        <h1>Preview</h1>
                        <p className='mt-3'>*The indentation wiil be same after copying the preview</p>
                        <button
                        className="btn btn-primary"
                        onClick={handleCopy}
                        >Copy Modified Text</button>
                    </div> 
                    <p className='mt-5-xs' style={previewBox}>{modified}</p>
                </div>                
            </div>
        </>
    )
  
}
