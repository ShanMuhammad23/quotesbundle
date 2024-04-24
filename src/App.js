import './App.css';
import Footer from './Components/Footer';
import QuoteBox from './Components/QuoteBox';
import Quotes from './Quotes'; // Assuming Quotes component handles the prop
import Hero from './Components/Hero';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function App(props) {
  const params=useParams();
 
  return (
    <BrowserRouter>
      <main className='d-flex flex-column bd-highlight space-y-4'>
        <Hero />
    
    
  <Quotes cata='Inspirational'/>
  <Quotes cata='Life'/>
  <Quotes cata='Wisdom'/>
  <Quotes cata='Advice'/>
  <Quotes cata='Philosophy'/>


      
        


        

      
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
