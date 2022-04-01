import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import SearchBar from './pages/SearchBar/SearchBar';
import SearchResult from './pages/SearchResult/SearchResult';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <SearchBar/> } path="/">
          <Route element={ <SearchResult/> } path="items"></Route>
          <Route element={ <ProductDetail/> } path="items/:id"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
