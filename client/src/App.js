import React from 'react';
import { BrowserRouter, Routes, Route ,Outlet} from 'react-router-dom'; // Corrected imports

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Layout
const Layout = () => { 
  return (
    <div>
      <Header />
      <main> 
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="products/:id" element={<Products />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
