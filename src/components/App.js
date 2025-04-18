// create your App component here

import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchDogImage = async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();
        setDogImage(data.message); // Set the dog image URL
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching dog image:", error);
        setIsLoading(false); // In case of error, stop loading
      }
    };

    fetchDogImage(); // Call the async function
  }, []); // Empty dependency array means this runs only once (on component mount)

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={dogImage} alt="A Random Dog" />
    </div>
  );
}

export default App;
