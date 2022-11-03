import React,{useEffect} from 'react';
import NavScrollExample from './Components/NavScrollExample';
import Footer from './Components/Footer';
import AccountMain from './Components/Overview';
import UI from './Components/UI';
import Overview from './Components/Overview/Overview';
import Repository from './Components/Repository';
import Projects from './Components/Projects';
import Packages from './Components/Packages';
import Stars from './Components/Stars';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Repositories from './Components/Repository';



function App() {

  return (
    <div>
   <BrowserRouter>
        <NavScrollExample />
        <AccountMain />
        <UI/>
        <Routes>
          {/* <Route path='/follower' element={<Following/>}></Route> */}
          {/* <Route path='/following' element={<Followers/>}></Route> */}
          <Route path="/" element={<Overview />}></Route>
          <Route path="/repositories" element={<Repositories />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/packages" element={<Packages />}></Route>
          <Route path="/stars" element={<Stars />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
  
}

export default App;



