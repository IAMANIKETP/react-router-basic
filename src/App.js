import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './navbar.js'
import Sidebar from './sidebar'
//import Main from './main.js'


function App() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Home />} />
    
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
