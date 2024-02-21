import React, { useState } from "react";
//usestate is a hook here. hook allow functions to use the functionality
//of classes
// a variable & a function which works

export default function TextForm(props) {
    const [text, setText] = useState(""); // "enterthetext"  is default here.
    // a variale and update functinality ok which is setText
    //where i write and update the value it automatically update without reloading .
    const handleUp = () => {
        console.log("Upperclass have clicked"+text);
        let newtext = text.toUpperCase();
        setText(newtext);
        if(text.length>0)
        {
            props.showAlert("Your text is now upper-case","success")
        }
        else
        {
            props.showAlert("My mate please enter something.","danger")
        }
    };
    const handledown = () => {
        console.log("Lowerclass have clicked"+text);
        let newtext = text.toLowerCase();
        setText(newtext);
        if(text.length>0)
       { props.showAlert("Your text is now lower-case","success")}
       else
       {
        props.showAlert("My mate please enter something.","danger")
       }
    };

    const handleextraspace = () => {
        console.log("remove extra space button has clicked"+text);
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        if(text.length>0)
        props.showAlert("Extra spaces has been removed.","success")
        else
        {
         props.showAlert("My mate please enter something.","danger")
        }
    };
    
    const handleclear = () => {
        console.log("clear button has clicked"+text);
        let newtext = "";
        setText(newtext);
        if(text.length>0)
        props.showAlert("Cleared.","success")
        else
        {
         props.showAlert("My mate please enter something.","danger")
        }
    };
    const handlecopy = () => {
        var copyText = document.getElementById("mybox");
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
        /* Alert the copied text */
        console.log("copy function working.");
        if(text.length>0)
        props.showAlert("Your text is now Copied.","success")
        else
        {
         props.showAlert("My mate please enter something.","danger")
        }
    };

    // this is how you can handle the things
    //like it perform operation live
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    };

    //text="aaaaaaa"; wrong way to update
    //setText=("hello frd");right way to update

    return (
        <>
        <div className="container">
            <br />
            <h2 className="heading1">"{props.heading}"</h2>
            <br />
            <div class="mb-3">
                <textarea
                    spellCheck="false"
                    class="form-control"
                    value={text}
                    id="mybox"
                    rows="8"
                    onChange={handleOnChange}
                ></textarea>
            </div>
            <div class="d-grid gap-2 d-md-block">
                <button onClick={handleUp} className=" btn btn-dark">
                    Convert To Upperclass
                </button>
                &nbsp;
                <button onClick={handledown} className=" btn btn-dark">
                    Convert To Lowerclass
                </button>
                &nbsp;
                <button onClick={handleextraspace} className=" btn btn-dark my-2 mb-2">
                    Remove Extra Space
                </button>
                &nbsp;
                <button onClick={handleclear} className=" btn btn-dark">
                    Clear Text
                </button>
                
            </div>
        </div>
        <div className="container my-3">
        <h2 className="heading2">Your Text Summary</h2>
        <p className="set-content">"Your Text Contains {text.split(/\s+/).filter((element)=>{
            return element.length !== 0}).length} words and {text.length} characters."</p>
        <p className="set-content">you can read the text in {0.008*(text.split(" ").length)}</p>

        <h3 className="heading3">Preview Your Text</h3>
         <div className="set-preview">
         <div class="mb-3">
                <textarea
                    spellCheck="false"
                    class="form-control1"
                    value={text.length>0?text:"Enter Something in above form to preview."}
                    rows="8"
                ></textarea>
            </div>
         </div>
         &nbsp;
                <button onClick={handlecopy} className=" btn btn-dark mb-2">
                    Copy Text
                </button>


               </div>
        </>
    );
}
