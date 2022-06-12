import React from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx'
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    GetGalleryData();
  }, []);

  const [galleryList, setGalleryList] = useState([]);

  const GetGalleryData = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then((res) => {
        console.log('res', res.data);
        setGalleryList(res.data);
        console.log('new gallery data', galleryList);
      })
      .catch((err) => {
        console.log(`get failed, ${err}`);
      })

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>

      <p>Gallery goes here</p>

      
      <GalleryList
        galleryList={galleryList}
      />

    </div >

  );

  
}

export default App;
