import Header from './Components/Header'

import './App.css';
import {Route, Routes} from 'react-router-dom';
import ProductListing  from './Components/ProductListing';
import ProductDetail from './Components/ProductDetail';
import ProductComponent from './Components/ProductComponent';


function App() {
  return (
   <> 
    <Header/>
   <Routes>

    <Route  path='/' element={<ProductListing />}> </Route>
    <Route  path='/product/:productId' element={<ProductDetail />}> </Route>
    <Route  path='productComp' element={<ProductComponent />}> </Route>


   </Routes>

   </>
  );
}

export default App;
 