import React, { useState, useEffect } from "react";

const Proficiency = () => {
  const words = [
    "Web Development",
    "Machine Learning",
    "Data Structures and Algorithms",
    "Quantum Computing"
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const changeWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeWord();
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="p-2 w-full">
        <div className="w-full">
        <div className="font-semibold text-2xl font-sans inline-block">I'm proficient in&nbsp;</div>
        <div className="font-semibold text-2xl inline-block font-sans text-purple-700 animate-scrolling">
          {words[currentWordIndex]}.</div>
        </div>
      </div>
    </>
  );
};

export default Proficiency;
