import React from 'react'

import {BrowserRouter, Routes, Route} from "react-router-dom";




import Home from './components/pages/Home';
import Side from './components/pages/Side';
import About from './components/pages/About';
import Contcat from './components/pages/Contcat';
import UseCont from './components/useContext/UseCont';
import Sate from './components/useRf/Sate';
import Userf from './components/useRf/Userf';
import Api from './components/Getapi.js/Api';

const App = () => {
  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Cont/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter> */}



    {/* <BrowserRouter>
      <Routes> */}
        
        {/* <Route path='/' element={<First/>} />
        <Route path='/Sec' element={<Sec/>} />
        <Route path='/Thir' element={<Thir/>}/>
        <Route path='/Four' element={<Four/>}/> */}
        {/* <Route path='/Five' element={<Five/>}/> */}
      {/* </Routes>
    </BrowserRouter> */}
    {/* <BrowserRouter>
      <Routes> */}
        
        {/* <Route path='/' element={<First/>} />
        <Route path='/Sec' element={<Sec/>} />
        <Route path='/Thir' element={<Thir/>}/>
        <Route path='/Four' element={<Four/>}/> */}
        {/* <Route path='/' element={<Locat/>}/>
        <Route path='/Next' element={<Next/>}/>
      </Routes>
    </BrowserRouter> */}







    {/* <UseCont/> */}
<Api/>

{/* <Sate/> */}
{/* <Userf/> */}




     {/* <BrowserRouter>
      <Routes> 
        
        
        <Route path='/About' element={<About/>} />
        <Route path='/' element={<Home/>}/>
        <Route path='/Contcat' element={<Contcat/>}/> 
         
        
      </Routes>
    </BrowserRouter> */}
    
    </>
  )
}

export default App 
