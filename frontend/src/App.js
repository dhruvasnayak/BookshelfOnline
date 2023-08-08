import './App.css';

import Home from './component/Home';
import MyForm from './component/Uploads';
import Read from './component/Read';

import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<MyForm />} />
      <Route path="/read" element={<Read />} />
    </Routes>
  );
}

export default App;
