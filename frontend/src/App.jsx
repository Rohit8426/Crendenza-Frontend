import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar';
import Credenza from './components/Credenza';
import Credenzacarousel from './components/credenzacarousel';
import Visual from './components/Visual';
import Learningdetails from './components/Learningdetails';
import Slidder from './components/Slidder';
import Footer from './components/Footer';
function App() {
 

  return (
    <>
  <Navbar></Navbar>
  <Credenza></Credenza>
  <Credenzacarousel></Credenzacarousel>
  <Visual></Visual>
  <Learningdetails></Learningdetails>
  <Slidder></Slidder>
  <Footer></Footer>
    </>
  )
}

export default App
