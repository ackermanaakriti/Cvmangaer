import React from 'react'
import Dashboard from './Dashboard/Dashboard/Dashboard'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Applicants } from './Components/Applicants'
import { Home } from './Components/Home'
import {AddCandidate} from './Components/AddCandidate'
import Interview from './Components/Interview'
import Login from './Dashboard/Dashboard/Login'

function App() {
  return (
    <>
    
  
    <BrowserRouter>
    <Routes>

      <Route path='/' exact element={<Home/>}></Route>
      <Route path='/applicants' exact element={<Applicants/>}></Route>
      <Route path='/addapli' exact element={<AddCandidate/>}></Route>
      <Route path='/interview' exact element={<Interview/>}></Route>


    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
