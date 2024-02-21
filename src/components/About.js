import React, { StrictMode, useRef, useState } from "react";
import PropTypes from "prop-types";

export default function About(props) {
  // // for dark and light mode

  // const [mystyle, setmystyle] = useState({
  //     color: "#38373A",
  //     backgroundColor: "#FBEAFF",
  // });
  // //    for button text changer

  // const [btntext, setbtntext] =useState("Enable Dark Mode")

  // const [btnclr, setbtnclr] =useState("btn btn-dark")

  // const togglechange = () => {
  //     if (mystyle.color == "#38373A") {
  //         setmystyle({
  //             color: "#FBEAFF",
  //             backgroundColor: "#38373A",
  //         });
  //         setbtnclr("btn btn-light")
  //         setbtntext("Enable Light Mode")

  //     } else {
  //         setmystyle({
  //             color: "#38373A",
  //             backgroundColor: "#FBEAFF",
  //         });
  //         setbtnclr("btn btn-dark")
  //         setbtntext("Enable Dark Mode")

  //     }
  // };


  return (
    <>
      <div className="container my-1" >
        {/* jumbotron */}
        <div className={`jumbotron p-4 p-md-5 border text-white rounded bg-${props.mode}`}>
          <div className="col-md-6 px-0">
            <h1 className={`display-4 text-primary font-italic`}>
              Welcome To About Section
            </h1>
            <p className="lead text-secondary my-3">
              We have work hard on our UI and basic site functionalities. You
              can contact us through our social handles by clicking below footer
              links.
            </p>
          </div>
        </div>

        {/* cards */}
        <div className="row mb-2 my-3">
          <div className="col-md-6">
            <div
              className={`row no-gutters  border rounded overflow-hidden bg-${props.mode} flex-md-row mb-4 shadow-sm h-md-250 position-relative`}
            >
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-danger">Me</strong>
                <h3 className="mb-0 text-primary">Mr. Shubham Rathore</h3>
                <div className="mb-1 text-warning">React Dev</div>
                <p className="card-text text-secondary mb-auto">
                  I am IT Engineer. I done my b.tech from aitr in 2023. I love
                  web development and looking for opportunities in the path.
                  Hello mate so this is my react website which looks good i 
                  think so. lets talk about my site.So it is acutually
                  completely  working on user's text.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className={`row no-gutters  border rounded overflow-hidden bg-${props.mode}  flex-md-row mb-4 shadow-sm h-md-250 position-relative`}
            >
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-danger">
                  About Site
                </strong>
                <h3 className="mb-0 text-primary">Text-Handler</h3>
                <div className="mb-1 text-warning opacity-75">Last Updated : Nov 12,2021</div>
                <p className="card-text text-secondary mb-auto">
                  {" "}
                  So if someone wants to uppercase or  lowercase their
                  complete text. After performing operations you can preview
                  what you have write.  You can copy your text incase you need
                  to paste complete text. If  you want to clear the complete
                  text so you have clear button too.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* // <div className="container" style={mystyle} className="my-5">
        //     &nbsp;
        //     <h3 className="heading4" style={mystyle} className="my-2"  className="text-center">
        //         About My Page
        //     </h3>
        //     <div className="row align-items-md-stretch">
        //         <div className="col-md-6">
        //             <div className="h-100 p-5 text-white bg-dark border rounded-3">
        //                 <h2>Site functionalities</h2>
        //                 <p>
        //                     Hello mate so this is my first react website which looks good i
        //                     think so. So lets talk about my site it is acutually completely
        //                     working on user's text. So if someone wants to uppercase or
        //                     lowercase their complete text.
        //                 </p>
        //             </div>
        //         </div>
        //         <div className="col-md-6">
        //             <div className="h-100 p-5  text-white bg-dark  border rounded-3">
        //                 <h2>Preview Your Text</h2>
        //                 <p>
        //                     After performing operations you can preview what you have write.
        //                     You can copy your text incase you need to paste complete text. If
        //                     you want to clear the complete text so you have clear button too.
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        //     &nbsp;
           
        //     <div
        //         className="accordion accordion-flush"
        //         style={mystyle}
        //         id="accordionFlushExample"
        //     >
        //         <div className="accordion-item">
        //             <h2 className="accordion-header" id="flush-headingOne">
        //                 <button
        //                     className="accordion-button collapsed"
        //                     style={mystyle}
        //                     type="button"
        //                     data-bs-toggle="collapse"
        //                     data-bs-target="#flush-collapseOne"
        //                     aria-expanded="false"
        //                     aria-controls="flush-collapseOne"
        //                 >
        //                    Quote : 1
        //                 </button>
        //             </h2>
        //             <div
        //                 id="flush-collapseOne"
        //                 className="accordion-collapse collapse"
        //                 aria-labelledby="flush-headingOne"
        //                 data-bs-parent="#accordionFlushExample"
        //             >
        //                 <div className="accordion-body" style={mystyle}>
        //                 Excuse don't win <code>championship</code>.
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="accordion-item">
        //             <h2 className="accordion-header" id="flush-headingTwo">
        //                 <button
        //                     className="accordion-button collapsed"
        //                     style={mystyle}
        //                     type="button"
        //                     data-bs-toggle="collapse"
        //                     data-bs-target="#flush-collapseTwo"
        //                     aria-expanded="false"
        //                     aria-controls="flush-collapseTwo"
        //                 >
        //                   Quote : 2
        //                 </button>
        //             </h2>
        //             <div
        //                 id="flush-collapseTwo"
        //                 className="accordion-collapse collapse"
        //                 aria-labelledby="flush-headingTwo"
        //                 data-bs-parent="#accordionFlushExample"
        //             >
        //                 <div className="accordion-body" style={mystyle}>
        //                      Life only plays with those who is a <code>great people</code>.
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="accordion-item">
        //             <h2 className="accordion-header" id="flush-headingThree">
        //                 <button
        //                     className="accordion-button collapsed"
        //                     style={mystyle}
        //                     type="button"
        //                     data-bs-toggle="collapse"
        //                     data-bs-target="#flush-collapseThree"
        //                     aria-expanded="false"
        //                     aria-controls="flush-collapseThree"
        //                 >
        //                     Quote : 3
        //                 </button>
        //             </h2>
        //             <div
        //                 id="flush-collapseThree"
        //                 className="accordion-collapse collapse"
        //                 aria-labelledby="flush-headingThree"
        //                 data-bs-parent="#accordionFlushExample"
        //             >
        //                 <div className="accordion-body" style={mystyle}>
        //                     Heart of a <code>Wolf</code> and mindset of <code>Lion</code>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
            
        //      <div  className=" text-center my=3">
        //         <button
        //             type="button"
        //            onClick={togglechange}
        //             id="mode"
                    
        //             className={btnclr}
        //         >
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 width="50"
        //                 height="30"
        //                 fill="currentColor"
        //                 className="bi bi-toggles"
        //                 viewBox="0 0 30 16"
        //             >
        //                 <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z"></path>
        //             </svg>
        //            {btntext}
        //         </button>
        //     </div>  
        //     <h3 className="heading4" style={mystyle} className="my-3"  className="text-center">
        //         That's it. More functionalities will be added in future :-)
        //     </h3>
        //     &nbsp; */}
      </div>
    </>
  );
}
