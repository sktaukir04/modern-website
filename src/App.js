import './App.css';
import { Brand,CTA,Navbar } from './Components';
import Cta from './Components/cta/Cta';
import {Footer,Blog,Possibility,Features,WHATGPT3,Header, WhatGPT3} from './Container'

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
