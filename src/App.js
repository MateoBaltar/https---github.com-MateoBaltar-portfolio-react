import React from 'react'
import Main from './components/Main';
import Curriculum from './components/Curriculum';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Routes>
        <Route exact path={"/"} element={<Main />} />
        <Route path={"curriculum"} element={<Curriculum />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
