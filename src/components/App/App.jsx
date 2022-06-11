import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    useEffect(() => {
      GetGalleryData();
    }, []);
    const GetGalleryData = () => {
      axios({
        method: 'GET',
        url: '/gallery'
      })
      .then((res) => {
        console.log('res',res);
      })
      
    }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
       

      <img className="AllPhotoUpdates" src="images/goat_small.jpg" />
      <img className="AllPhotoUpdates" src="images/siberian_husky.jpg"/>
      <img className="AllPhotoUpdates" src="images/camera.jpg"/>
      <img className="AllPhotoUpdates" src="images/hammock.jpg"/>
      <img className="AllPhotoUpdates" src="images/mtb.jpg"/>
      <img className="AllPhotoUpdates" src="images/family.jpg"/>
    </div >
    
  );
}

export default App;
