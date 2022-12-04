import { useState } from 'react'
import ProductAdd from './components/admin/product-add'
import Products from '../src/components/admin/products'
import { Link, Route, Routes } from 'react-router-dom'
import LayoutWeb from './layout/user/layoutWeb'
import LayoutAdmin from './layout/admin/layoutAdmin'
import ProductEdit from './components/admin/product-edit'
import Details from './components/user/detail'
import Product from './components/user/product'
import Signup from './components/auth/signup'
import Signin from './components/auth/sigin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutWeb></LayoutWeb>}>
          <Route index element={<Product></Product>}></Route>
          <Route path='products/detail/:id' element={<Details></Details>}></Route>
        </Route>
        <Route path='admin' element={<LayoutAdmin></LayoutAdmin>}>
          <Route index element={<h2>Dashboard</h2>}></Route>
          <Route path='products' element={<Products></Products>}></Route>
          <Route path='products/add' element={<ProductAdd></ProductAdd>}></Route>
          <Route path='products/edit/:id' element={<ProductEdit></ProductEdit>}></Route>
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App
