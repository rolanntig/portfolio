import React,{useState, useEffect} from 'react'
import '../App.css'


const Home = () => {



  



  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center">
        <h1 className=" flex text-6xl ">
          Hello I'm <p className="mx-3 text-orange-400">Rolan</p>
        </h1>
        <div className="flex items-center" id="techstack">
          <p className="text-lg">Techstack:</p>
          <img src={"html-5.png"} alt="" />
          <img src={"css-3.png"} alt="" />
          <img src={"js.png"} alt="" />
          <img src={"icons8-nodejs-48.png"} alt="" />
          <img src={"logo512.png"} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home
