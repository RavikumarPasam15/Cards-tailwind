import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cards from "./components/Card";
import {  Card,CardContent, CardMedia,  Typography,Box, Container,} from "@mui/material";

const templeData = [
  {
    name: "Tirumala Temple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirumala_Anand_nilayam4653.jpg",
    history:
      "Tirumala Venkateswara Temple is one of the richest and most visited temples in India, located in Tirupati, Andhra Pradesh. ",
  },
  {
    name: "Srikalahasti Temple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Srikalahasti_temple.JPG/640px-Srikalahasti_temple.JPG",
    history:
      "Srikalahasti Temple is famous for its Vayu Linga, representing wind. Located near Tirupati, it is one of the Pancha Bhoota Stalas and a significant Shaivite shrine.",
  },
{
    name: "Golden Temple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Golden_Temple_in_Amritsar_03_2018_img3.jpg",
    history:
      "The Golden Temple, or Harmandir Sahib, is the holiest Sikh shrine located in Amritsar, Punjab, built with stunning golden architecture.",
  },
  {
    name: "Puri Jagannath Temple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Jagannath_Temple_Puri.jpg",
    history:
      "The Jagannath Temple in Puri, Odisha, is one of the Char Dham pilgrimage sites, famous for the annual Rath Yatra.",
  },
  {
    name: "Somnath Temple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/14/Somnath_temple.jpg",
    history:
      "Somnath Temple, in Gujarat, is one of the twelve Jyotirlinga shrines of Lord Shiva with a long history of reconstruction.",
  },
  {
    name: "Kasi Vishwanath Temple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Kashi_Vishwanath_Temple.jpg",
    history:
      "The Kashi Vishwanath Temple in Varanasi, Uttar Pradesh, is dedicated to Lord Shiva and considered one of the holiest temples in India.",
  },

];

function Home() {
  const homeTemple = templeData[0]; 

  return (
    <div
      style={{    minHeight: "100vh",  display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", background: "linear-gradient(135deg, #eee1c0ff, #ecd68cff, #fda085)",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        Home Page
      </h1>


      <div style={{ position: "relative",width: "80%", height: "70vh",  borderRadius: "15px",overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
       
        <img src={homeTemple.image} alt={homeTemple.name}
          style={{width: "100%",height: "100%",objectFit: "cover", }}
        />

   
        <div
          style={{ position: "absolute", bottom: "10px",  background: "rgba(0,0,0,0.5)", color: " gold",
            padding: "10px", textAlign: "center",
          }}
        >
          <h3 style={{ marginBottom: "8px" }}>{homeTemple.name}</h3>

          <marquee behavior="scroll" direction="left">
            Welcome to Tirumala temple A sacred and divine temple known for
            peace, devotion, and spiritual growth.
          </marquee>
        </div>
      </div>
    </div>
  );
}



function About() {
  return (
    <div
      className="min-h-screen flex flex-col items-center p-6"
      style={{
        background: "linear-gradient(135deg, #e0c487ff, #f6d365, #fda085)",
      }}
    >
      <h1 className="text-3xl font-bold mb-8">About Temples</h1>

      <div className="max-w-3xl w-full space-y-6">
        {templeData.map((temple, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-center mb-3">
              {temple.name}
            </h2>

            <p className="text-gray-700 text-justify leading-relaxed">
              {temple.history}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Temples() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center p-6"
      style={{
        background: "linear-gradient(135deg, #eee1c0ff, #ecd68cff, #fda085)",
      }}
    >
      <h1 className="text-3xl font-bold mb-8">Temples</h1>
      <Cards />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/temples" element={<Temples />} />
      </Routes>
    </Router>
  );
}

export default App;
