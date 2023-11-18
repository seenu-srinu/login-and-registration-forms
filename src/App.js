import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path="/" Component={Dashboard}/>
    <Route path="/registration" Component={Registration}/>
    <Route path="/login" Component={Login}/>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
