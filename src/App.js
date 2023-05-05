
import './App.css';
import React from 'react';

import LoginForm from './components/login';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import SignInForm from './components/signin';
import { Home } from './components/Home';


function App() {
  
  return (
    <div>
        
        <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign/login' element={<LoginForm />} />
          <Route path='/sign' element={<SignInForm/>}/>
        </Routes>
    </Router>
      </div>
  );
}

export default App;




















