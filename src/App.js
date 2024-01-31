import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './마이페이지/Main';

function App() {
  return (
    <div className="App">
      <div className='background'>
      <Header/>
      <Main/>
      <Footer/>
      </div>
    </div>

  );
}

export default App;
