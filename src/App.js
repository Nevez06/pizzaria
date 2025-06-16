import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Contact from './screens/Contact';
import About from './screens/About';
import Register from './screens/Register';
import NavBar from './components/NavBar';
import logo from './logo.webp';
import CadastroLoja from './screens/Cadastro_loja';
import './App.css';
import Painel from './screens/Painel'
import Produtos from './screens/Products'
import Brand from './screens/Brand'
import Public from './components/PublicLayout'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavBar />
        </header>
        <main className="App-main">
          <div className="container">
            <Routes>
              < Route element={<Public/>}/>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path='/loja' element={<CadastroLoja/>} />
               {/* Layout ADMIN (sem navbar, sem logo) */}
        <Route path="/painel" element={<Painel />}>
          <Route path="products" element={<Produtos />} />
          <Route path="brand" element={<Brand />} />
        </Route>
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
