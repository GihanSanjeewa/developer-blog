import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Dashboard from './pages/Dashboard';
import Signin from './pages/SignIn';
import Signup from './pages/SignUp';
import About from './pages/About';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path='./dashbord' element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  );
}
