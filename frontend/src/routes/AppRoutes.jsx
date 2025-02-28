
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Login from '../screen/Login';
import Register from '../screen/Register';
import Home from '../screen/Home';
import Project from '../screen/Project';
// import Project from '../../../backend/models/project.model';
import UserAuth from '../auth/UserAuth';

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/project" element={<UserAuth><Project /></UserAuth>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
