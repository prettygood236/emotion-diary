import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h2>App.js</h2>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/diary' element={<Diary />} />
        </Routes>
        <nav>
          <div style={{ padding: 5 }}>
            <Link to='/'>Home</Link>
          </div>
          <div style={{ padding: 5 }}>
            <Link to='/diary'>Diary</Link>
          </div>
          <div style={{ padding: 5 }}>
            <Link to='/edit'>Edit</Link>
          </div>
          <div style={{ padding: 5 }}>
            <Link to='/new'>New</Link>
          </div>
        </nav>
        <a href={'/new'}>new로이동 </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
