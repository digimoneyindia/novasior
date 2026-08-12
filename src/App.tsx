/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Philosophy from './pages/Philosophy';
import Support from './pages/Support';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import GenericPage from './pages/GenericPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:slug" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
          <Route path="philosophy" element={<Philosophy />} />
          <Route path="support" element={<Support />} />
          <Route path="contact" element={<Support />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<Success />} />
          <Route path="privacy" element={<GenericPage />} />
          <Route path="terms" element={<GenericPage />} />
          <Route path="refund" element={<GenericPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
