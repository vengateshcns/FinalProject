import React from 'react'
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard'



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Dashboard/>} />
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;