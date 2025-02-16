import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let upperText = text.toUpperCase();
    if (upperText !== "") {
      setText(upperText);
      props.showAlert("converted to upperCase", "success");
    }
  };
  const handleLoClick = () => {
    let lowerText = text.toLocaleLowerCase();
    if (lowerText !== "") {
      setText(lowerText);
      props.showAlert("converted to lowerCase", "success");
    }
  };
  //   const handleEmailClick = () => {
  //     console.log(text.split(' '));
  //     let wordListArray = text.split(' ')
  //     let len = 0
  //     wordListArray.forEach(element => {
  //         if (element.endsWith('@gmail.com')) {
  //             len+=1
  //         }
  //     });
  //     setText(len)
  //   };
  const handleChange = (event) => {
    console.log("change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="form-floating">
        <h3>Enter Text here:</h3>
        <textarea
          className="form-control"
          id="floatingTextarea"
          rows={6}
          value={text}
          onChange={handleChange}
        ></textarea>
        <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>
          Click to convert to uppercase
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>
          Click to convert to lowercase
        </button>
        {/* <button className="btn btn-primary my-3 mx-1" onClick={handleEmailClick}>
        No of emails
      </button> */}
      </div>
      <div className="container">
        <h3>Summary</h3>
        <p>
          Words {text.trim().split(" ").length} and Letters {text.length}
        </p>
      </div>
    </>
  );
}
