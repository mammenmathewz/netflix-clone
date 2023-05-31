import React from 'react';
import './App.css';
import {originals,actions} from './components/urls'
import Banner from './components/Banner' ;
import NavBar from './components/NavBar';
import RowPost from './components/RowPost';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={actions} title='Action' isSmall />
     

      
      

      

  
    </div>
  );
}

export default App;
