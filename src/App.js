import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';

import AddTutor from './Pages/Admin/AddTutor/AddTutor';
import AdminDashboard from './Pages/Admin/AdminDashboard/AdminDashboard';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';
import ManageTutor from './Pages/Admin/ManageTutor/ManageTutor';
import ManageTutorAds from './Pages/Admin/ManageTutorAds/ManageTutorAds';
import ManageTutorBooks from './Pages/Admin/ManageTutorBooks/ManageTutorBooks';

import Nav from './Pages/Nav/Nav';
// import Home from './Pages/Banner/Home/Home';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/courses/:id" element={<Courses/>}></Route>
          <Route path="/teach" element={<Teach/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>

          <Route path="/admin" element={<AdminDashboard />}>
            <Route exact path="/admin" element={<MakeAdmin />}>
            </Route>
            <Route path={`admin/make-admin`} element={<MakeAdmin />}>
            </Route>
            <Route path={`admin/add-tutor`} element={<AddTutor />}>
            </Route>
            <Route path={`admin/manage-tutor`} element={<ManageTutor />}>
            </Route>
            <Route path={`admin/manage-tutor-ads`} element={<ManageTutorAds />}>
            </Route>
            <Route path={`admin/manage-tutor-books`} element={<ManageTutorBooks />}>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
