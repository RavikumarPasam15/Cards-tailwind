import React from "react";
import Cards from "./components/Card"; 
import "./App.css";
import Navbar from "./components/NavBar";
function App() {
  return (
    <>
      <Navbar />

<div
  className="min-h-screen flex flex-col justify-center items-center p-6"
  style={{ background: "linear-gradient(135deg, #e0c487ff, #f6d365, #fda085)" }}
>        <h1 className="text-3xl font-bold mb-8">Temples</h1>
        <Cards />
      </div>
    </>
  );
}

export default App;
