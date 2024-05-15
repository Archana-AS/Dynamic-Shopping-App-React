import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Add from './components/Add';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
