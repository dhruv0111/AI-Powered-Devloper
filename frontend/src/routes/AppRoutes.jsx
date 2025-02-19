
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Login from '../screen/Login';
import Register from '../screen/Register';
import Home from '../screen/Home';

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
