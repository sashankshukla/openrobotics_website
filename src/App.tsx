import React from 'react';
import Member from './components/Team/Member';
import Team from './components/Team/Team'
import Navbar from './components/Navbar/Navbar';
import Contact from './components/ContactPage/ContactPage';

function App() {
  return (
    <div className="App w-screen overflow-x-hidden">
       <Navbar/>
       <Contact/>
       <Team/>
    </div>
  );
}

export default App;
