import { Home, Login, ProductsDetailed, Purchases } from './pages';
import { Navbar, LoadingScreen, ProtectedRoutes } from './components/index'
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
          {/* <Route path='/cart' element={ <Cart /> } />
          <Route path='/user' element={ <User /> } /> */}

          <Route element={ <ProtectedRoutes /> }>
            <Route path='/purchases' element={ <Purchases /> } />
          </Route>
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
