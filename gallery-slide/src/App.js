
import React, {useState} from "react";
import {AiOutlineSwapLeft, AiOutlineSwapRight} from "react-icons/ai";
import {BsDot} from "react-icons/bs"

function App() {
  const slides = [
    {
      url:'https://images.unsplash.com/photo-1491796014055-e6835cdcd4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1078&q=80'
    },
    {
      url:'https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      url:'https://images.unsplash.com/photo-1506434304575-afbb92660c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
    },
    {
      url:'https://images.unsplash.com/photo-1581591546314-528384aab67c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      url:'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevslide = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextslide = () => {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  };

  const dotsliders = (slideIndex) => {
    setCurrentIndex(slideIndex)
  };

  return ( 
  <main className="background-animate">
    <h1 className="flex relative justify-center p-2 top-10 text-4xl text-white">
      A look through the lens
    </h1>
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
    <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
    </div>
    {/* Left Arrow */}
    <div className="hidden group-hover:block absolute bottom-[10%] -translate-x-0 translate-y-[-50%] 
      left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <AiOutlineSwapLeft onClick={prevslide} size={30}/>
    </div>
    {/* Right Arrow */}
    <div className="hidden group-hover:block absolute bottom-[10%] -translate-x-0 translate-y-[-50%] 
      right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <AiOutlineSwapRight onClick={nextslide} size={30}/>
    </div>
    <div className="flex justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} 
               onClick={()=> dotsliders(slideIndex)} 
               className="text-2xl cursor-pointer">
            <BsDot/>
          </div>
        ))}
    </div>
  </div>
  </main>
  );
}

export default App;
