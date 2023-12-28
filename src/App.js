import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Components/Home/Home';
import LaptopContainer from './Components/Laptop/LaptopContainer';
import PhoneContainer from './Components/Phone/PhoneContainer';
import FurnitureContainer from './Components/Furniture/FurnitureContainer';
import SuperContainer from './Components/Supermarket/SuperContainer';
import Footer from './Components/Footer/Footer';
import ProductsTable from './Components/ProductsTable/ProductsTable';
import './App.css';

function App() {

 

  return (
    <>
      <div className='nav'>
        <NavLink to='/' className={link => link.isActive ? `active nav-list` : `nav-list`}>
          Home
        </NavLink>
        <NavLink to='/laptop' className={link => link.isActive ? `active nav-list` : `nav-list`}>
          Laptop
        </NavLink>
        <NavLink to='/phone' className={link => link.isActive ? `active nav-list` : `nav-list`}>
          Phone
        </NavLink>
        <NavLink to='/furniture' className={link => link.isActive ? `active nav-list` : `nav-list`}>
          Furniture
        </NavLink>
        <NavLink to='/supermarket' className={link => link.isActive ? `active nav-list` : `nav-list`}>
          Supermarket
        </NavLink>
      </div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/laptop' element={<LaptopContainer />} />
        <Route path='/phone' element={<PhoneContainer />} />
        <Route path='/furniture' element={<FurnitureContainer />} />
        <Route path='/supermarket' element={<SuperContainer />} />
        {/* <Route path='' element={}></Route> */}
      </Routes>

      {/* <div className="table container">
        <ProductsTable />
      </div> */}



      <Footer />
    </>

  );
}

export default App;
