import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Signin from './pages/SignIn'
import Signup from './pages/SignUp'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Header from './Components/Header'
import Footer from './Components/Footer'
import PrivateRoute from './Components/PrivateRoute'


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        
        <Route element={<PrivateRoute/>}>
          <Route path='/dashbord' element={<Dashboard />}/>
        </Route>
        
        <Route path='/projects' element={<Projects />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
