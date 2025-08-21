import React from "react";
import { FaHeart, FaShareAlt } from "react-icons/fa";


const Cards = () => {
  const cardData = [
    {
     id: 1,
      image:  "./images/tirupathi.jpg",
    title: "TIrumala",
      description: "This is the first card with some details."
    },
    {
      id: 2,
         image: "./images/shiva.jpg",
   title: "Kalahasthi",
      description: "This is the second card with different content."
    },
    {
      id: 3,
    image: "./images/golden.jpg",
      title: "Golden Temple",
  description: "This is the third card with a short description."
    },
    {
      id: 4,
      image: "./images/somnath.jpg",
      title: "Somnath Temple",
  description: "This is the first card with some details."
    },
    {
      id: 5,
  image: "./images/puri.jpg",
      title: "puri jagannath temple",
  description: "This is the second card with different content."
    },
    {
      id: 6,
      image: "./images/kasi.jpg",
   title: "kashi vishwanath temple",
      description: "This is the third card with a short description."
    }
  ];

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

      {cardData.map((card) => (
        <div


          key={card.id}

          className="bg-white shadow-lg rounded-2xl overflow-hidden w-80"
        >
       
          <img
            src={card.image}
         alt={card.title}
            className="w-full h-48 object-cover"
          />

         
          <div className="p-4">

            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>

            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>

          
          <div className="flex justify-between items-center px-4 py-2 border-t">
            <button className="flex items-center gap-1 text-red-500 hover:text-red-600">
              <FaHeart /> 
              Like
            </button>

            <button className="flex items-center gap-1 text-blue-500 hover:text-blue-600">
              <FaShareAlt />
               Share
            </button>
          </div>
        </div>
      ))}
    </div>
    
  );
};

export default Cards;
