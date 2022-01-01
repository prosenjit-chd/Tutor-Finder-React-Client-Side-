import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import TeacherDashboard from './Pages/TeacherDashboard/TeacherDashboard';



function App() {
  return (
    <div>
    
      <Header/>
      {/* <Routes>
        <Route exact path="/" element={<TeacherDashboard/>}/>
        <Route path="/home" element={<TeacherDashboard/>}/>
      </Routes> */}
      <TeacherDashboard/>

     
      <Footer/>

      
   
    </div>
  );
}

export default App;
