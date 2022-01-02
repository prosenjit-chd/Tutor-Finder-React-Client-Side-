import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Nav from './Pages/Student/Nav/Nav';
// import Home from './Pages/Banner/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Student/Home/Home';
import About from './Pages/Student/About/About';
import Contact from './Pages/Student/Contact/Contact';
import Footer from './Pages/Student/Footer/Footer';
import Courses from './Pages/Student/Courses/Courses';
import Teach from './Pages/Student/Teach/Teach';
import NotFound from './Pages/Student/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/courses/:id" element={<Courses />}></Route>
          <Route path="/teach" element={<Teach />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
