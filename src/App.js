import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Nav from './Pages/Nav/Nav';
// import Home from './Pages/Banner/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Banner/Home/Home';
import About from './Pages/Banner/Home/About/About';
import Contact from './Pages/Banner/Home/About/Contact/Contact';
import Banner from './Pages/Banner/Banner';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/home" element={<Home/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
