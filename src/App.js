import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TestForm from "./components/TestForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import "./App.css";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        key={new Date()}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={*/}
        <TestForm
          showAlert={showAlert}
          heading="Enter text here to analyze"
          mode={mode}
        />
        {/* }
            />
          </Routes>  */}
      </div>
      {/* </Router>  */}
    </>
  );
}

export default App;
