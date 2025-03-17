import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { ThemeProvider } from './context/ThemeContext';
import { ToastContainer } from 'react-toastify';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Servce from './Pages/Servce';
import Gallery from './Pages/Gallery';
import SoftwareDevelopment from './Pages/SoftwareDevelopment';
import Networking from './Pages/Networking';
import CanalDstv from './Pages/CanalDstv';
import DigitalSecurity from './Pages/DigitalSecurity';
import Internship from './Pages/Internship';
import Starlink from './Pages/Starlink';
import NotFound from './Pages/NotFound';
import InternshipRegistration from './Pages/InternshipRegistration';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AdminDashboard from './Pages/AdminDashboard';
import { AuthProvider } from './context/AuthContext';
import Unauthorized from './Pages/Unauthorized';
import ProtectedRoute from './Components/ProtectedRoutes';
import AllCourses from './Pages/AllCourses';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/service' element={<Servce />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/softwareDevelopment' element={<SoftwareDevelopment />} />
            <Route path='/network' element={<Networking />} />
            <Route path='/canalDstv' element={<CanalDstv />} />
            <Route path='/digitalSecurity' element={<DigitalSecurity />} />
            <Route path='/internship' element={<Internship />} />
            <Route path='/starlink' element={<Starlink />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/internship-registration" element={<InternshipRegistration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/courses" element={<AllCourses />} />
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute adminOnly={true}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
        <ToastContainer position="top-right" />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
