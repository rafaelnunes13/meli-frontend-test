import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetail from './product-detail/product-detail'
import SearchBar from './search-bar/search-bar'
import SearchResult from './search-result/search-result'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <SearchBar></SearchBar> } path="/">
          <Route element={ <SearchResult></SearchResult> } path="items"></Route>
          <Route element={ <ProductDetail></ProductDetail> } path="items/:id"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
