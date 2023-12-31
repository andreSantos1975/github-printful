import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Products } from './pages/products/Products';
import { Product } from './pages/product/Product';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { AllProducts } from './components/allProducts/AllProducts';
import './app.scss';

const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet /> 
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products/:id',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
      {
        path: '/loja',
        element: <AllProducts />
      }
    ]
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
