import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Nav from './Pages/Nav/Nav';
// import Home from './Pages/Banner/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Courses from './Pages/Courses/Courses';
import Teach from './Pages/Teach/Teach';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/home" element={<Home/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/courses/:id" element={<Courses/>}></Route>
         <Route path="/teach" element={<Teach/>}></Route>
         <Route path="/contact" element={<Contact/>}></Route>
         <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
