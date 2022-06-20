import { Route, Routes } from 'react-router-dom';
import './App.css';
import Car from './pages/Car';
import Login from './pages/Login';
import Product from './pages/Product';
import Protectedpages from './pages/Protectedpages';
import Shop from './pages/Shop';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* routes publics */}
        <Route path='/' element={<Login />} />
        <Route path='/signup'/>  
       
       {/* routes private */}
        <Route element={<Protectedpages />}>
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<Product />} />
          <Route path='/cart' element = {<Car />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
