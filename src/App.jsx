import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './layouts/layout';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="categories" element={<Categories />} />
          <Route path="discounted" element={<Discounted />} />
          <Route path="notFound" element={<NotFound />} />
          <Route path="allProducts" element={<AllProducts />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
          <Route path="allProducts/:slug" element={<SingleProduct />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
