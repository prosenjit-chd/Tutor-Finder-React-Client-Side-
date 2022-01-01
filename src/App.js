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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
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
