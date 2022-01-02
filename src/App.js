import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AddTutorAds from './Pages/Teacher/AddTutorAds/AddTutorAds';
import TeacherHome from './Pages/Teacher/TeacherHome/TeacherHome';
import NewTeacherStatus from './Pages/Teacher/NewTeacherStatus/NewTeacherStatus';



function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/add-techer-ads" element={<AddTutorAds />}>
          </Route>
          <Route path="/teacher-dashboard" element={<TeacherHome />}>
          </Route>
          <Route path="/post-pending" element={<NewTeacherStatus />}>
          </Route>

        </Routes>
      </Router>





    </div>
  );
}

export default App;
