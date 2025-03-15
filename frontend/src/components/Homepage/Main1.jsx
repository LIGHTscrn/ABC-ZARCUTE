import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';

const images = [
  './Gorge.jpeg',
  './Cups.jpeg',
  './Mickey.jpeg',
//   './Image3.jpeg'
];

export default function Main1() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
        <div className='relative'>
            <img
                className='container-fluid rounded-b-2xl p-0 m-0 md-h-[650px]'
                src={images[currentImageIndex]}
                alt="Image"
            />
            {/* <div className="absolute inset-0  bg-gradient from-transparent to-gray-200 opacity-60"></div> */}
        </div>
    </>
  );
}