import logo from './logo.svg';
import './App.css';
import Bilet from './pages/Bilet'; // Bilet bileşenini import et

import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
     
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/bilet' element={<Bilet/>} />
      </Routes>
      
    </div>
  );
}

export default App;
