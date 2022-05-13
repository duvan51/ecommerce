import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Product from './pages/Product';
import Protectedpages from './pages/Protectedpages';
import Shop from './pages/Shop';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* routes publics */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup'/>  
       
       {/* routes private */}
        <Route element={<Protectedpages />}>
          <Route path='/' />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<Product />} />
          <Route path='/cart' />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
