import "./App.css";
import About from "./components/About";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Home from "./components/Home";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [bgcolor, setbgcolor] = useState({ backgroundColor: "white" });

  const switchMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("enabled darkMode", "success");
    } else {
      setMode("light");
      showAlert("enabled lightMode", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const changeBGcolor1 = () => {
    setbgcolor({ backgroundColor: "yellow" });
  };
  const changeBGcolor2 = () => {
    setbgcolor({ backgroundColor: "gray" });
  };
  const changeBGcolor3 = () => {
    setbgcolor({ backgroundColor: "blue" });
  };

  return (
    <Router>
    <div style={bgcolor}>
      <Navbar
        title="DemoApp"
        mode={mode}
        switchMode={switchMode}
        bgColor={[changeBGcolor1, changeBGcolor2, changeBGcolor3]}
      />
      <Alerts msg={alert} />

      <div className="container">
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
          <Route
            exact path="/textform"
            element={<TextForm showAlert={showAlert} />}
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
