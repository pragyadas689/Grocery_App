import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPage from "./pages/ProductPage";
import {BrowserRouter, Routes,Route} from 'react-router-dom';


function App() {
  return (
  
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/products/:catId" element={<ProductPage />} />
        <Route path="/products/detail/:id" element={ <ProductDetailPage /> } />
        <Route path="/about" element={<AboutPage /> } />
        <Route path="/contact" element={<ContactPage />} /> 
        {/* <Route path="*" element={ <ErrorPage /> } /> */}
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
