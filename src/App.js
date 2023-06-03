import LoginPage from './Components/LoginPage';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Search_Page from './Components/Search_Page';
import NavBar from './Components/NavBar.js';
import Cart from './Components/Cart.js';
import Home from './Components/Home.js';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  );
}

export default App;
