import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { Routes, Route, Link } from "react-router-dom";
import LogIn from './LogIn/LogIn';
import Register from './Register/Register';
import Contact from './Contact/Contact';
import About from './About/About';
import Home from './Home/Home';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>

    <Route path='/' element={<LogIn></LogIn>}></Route>
    <Route path='/about' element={<RequireAuth><About></About></RequireAuth>}></Route>
    <Route path='/login' element={<LogIn></LogIn>}></Route>
    <Route path='/home' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
    <Route path='/contact' element={<RequireAuth><Contact></Contact></RequireAuth>}></Route>
    <Route path='/signup' element={<Register></Register>}></Route>
    </Routes>
     
    </div>
  );
}

export default App;
