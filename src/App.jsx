import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import  Document  from './components/Document'
import  Client  from './components/Client'
import Navbar from './components/Navbar'


function App() {
  let Component 
  switch(window.location.pathname) {
    case  "/":
      Component = Document
      break
    case "/client":
      Component = Client
      break
      case "/document":
        Component = Document
        break
  }




  return (
    <div >
      <Navbar/>
      <Component />
    </div>
  );
}

export default App
