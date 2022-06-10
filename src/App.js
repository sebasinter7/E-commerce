import { Home, Login, ProductsDetailed, Purchases, Cart, User } from './pages';
import { Navbar, LoadingScreen } from './components/index'
import Container from 'react-bootstrap/Container';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';


function App() {

  const isLoading = useSelector( state => state.isLoading )

  return (
    <HashRouter>
      <Navbar />
      <Container>
        { isLoading && <LoadingScreen /> }
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/products/:id' element={ <ProductsDetailed /> } />
          <Route path='/purchases' element={ <Purchases /> } />
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/user' element={ <User /> } />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
