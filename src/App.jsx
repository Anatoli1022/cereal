import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './layouts/layout';
import Home from './pages/Home';
import Understanding from './pages/Understanding';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='understanding' element={<Understanding />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
