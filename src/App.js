import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Footer from "./components/Footer";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Contactus from "./components/Contactus";
//whatever we write here is going to index.js as a component
//one more thing is that we write something in app.js in bottom
//write title = 123 then it will send error
// let  a = "My First React App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#38373A";
      document.title = "Text-Handler 🌑 Dark Mode";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#FBEAFF";
      document.title = "Text-Handler 🌞 Light Mode";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
    <Router>
      {/* <h1>{a}</h1> */}
      <Navbar
        title="React App"
        mode={mode}
        togglemode={togglemode}
        about="about my app"
      />
      <Alert alert={alert} />
      <div className="container" my-3>
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          
          <Route exact path="/">
          <TextForm
          showAlert={showAlert}
          heading="Enter The Text In The Form Below"
        />
          </Route>
          <Route exact path="/Contactus">
            <Contactus mode={mode}/>
          </Route>
        </Switch>
        <Footer mode={mode} />
      </div>
      </Router>
    </>
  );
}

export default App;
