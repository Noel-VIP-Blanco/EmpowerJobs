import React from 'react';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
//import pages
import Register from './pages/register/index'
import Login from './pages/login';
import ListOfJobs from './pages/list-of-jobs';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path = '/register' element = {<Register/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/list-of-jobs' element = {<ListOfJobs/>}/>
      </Routes>
    </div>
  );
}

export default App;
