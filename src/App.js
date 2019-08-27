import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Body } from "./Components/PictureContainer/PictureContainer";
import { Footer } from "./Components/Footer/Footer"
import axios from "axios";

function App() {
  const [planetImage, updatePlanetImage] = useState();
  const [pictureTitle, updatePictureTitle] = useState();
  const [pictureBody, updatePictureBody] = useState();
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res=>updatePlanetImage(res.data.hdurl))
    .catch(err=>console.log(err))
  },[]);
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res=>updatePictureTitle(res.data.title))
    .catch(err=>console.log(err))
  },[]);
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res=>updatePictureBody(res.data.explanation))
    .catch(err=>console.log(err))
  },[]);
  return (
    <div className="App">
      <Header />
      <Body pic={planetImage} title={pictureTitle} body={pictureBody} />
      <Footer />
    </div>
  );
}

export default App;
