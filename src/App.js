import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Student/Home/Home';
import About from './Pages/Student/About/About';
import Courses from './Pages/Student/Courses/Courses';
import Teach from './Pages/Student/Teach/Teach';
import Contact from './Pages/Student/Contact/Contact';
import NotFound from './Pages/Student/NotFound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Pages/Student/Footer/Footer';
import Nav from './Pages/Student/Nav/Nav';


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
