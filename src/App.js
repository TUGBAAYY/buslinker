import logo from './logo.svg';
import './App.css';
import Bilet from './pages/Bilet'; // Bilet bileşenini import et

import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      
     
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/bilet' element={<Bilet/>} />
        
      </Routes>
      
      
    </div>
  );
}

export default App;
