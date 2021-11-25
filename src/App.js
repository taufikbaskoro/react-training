import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home';
import Categories from './components/Categories';
import CategoryDetail from './Pages/CategoryDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
