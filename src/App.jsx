import React from "react";
import Cards from "./components/Card"; 
import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />

<div
  className="min-h-screen flex flex-col justify-center items-center p-6"
  style={{ background: "linear-gradient(135deg, #eee1c0ff, #ecd68cff, #fda085)" }}
>        <h1 className="text-3xl font-bold mb-8">Temples</h1>
        <Cards />
      </div>
    </>
  );
}

export default App;
