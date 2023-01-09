// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import About from './components/About';
// import Contact from './components/Contact';
// import Home from './components/Home';
// import Nav from './components/Nav'
// import Cls from './components/Cls'
// import Text from "./components/Text";
// import Home from "./customHook.js";
// import Comp1 from "./useContext/Comp1";
import Home from "./Redux/Home";


function App() {
  return (
    <>
    

    {/* <Comp1/> */}
    
    <Home/>

      {/* <Cls/> */}
      {/* <Text/> */}

      {/* <BrowserRouter>
        <Routes>
          {/* <Nav/> */}
          {/* <Route path='/' element={<Nav/>}> */}
          {/* <Route path='Home' element={<Home/>}/> */}
          {/* <Route path='About' element={<About/>}/> */}
          {/* <Route path='Contact' element={<Contact/>}/> */}
          {/* </Route> */}
        {/* </Routes> */}
      {/* </BrowserRouter>     */} 
    </>
  );
}

export default App;
