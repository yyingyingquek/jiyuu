import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./pages/ProductDetails";
import LookbookPage from "./pages/LookbookPage";
import CartPage from "./pages/CartPage";
import SizingPage from "./pages/SizingPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import LoginPage from "./pages/LoginPage";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />}></Route>
          <Route path="/home" element={<Landing />}></Route>
          <Route path="/shop" element={<ProductPage />}></Route>
          <Route path="/products/:id" element={<ProductDetails />}></Route>
          <Route path="/lookbook" element={<LookbookPage />}></Route>
          <Route path="/cart/:id?" element={<CartPage />}></Route>
          <Route path="/sizing" element={<SizingPage />}></Route>
          <Route path="/aboutus" element={<AboutUsPage />}></Route>
          <Route path="/contact" element={<ContactUsPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/newproduct" element={<AddProduct />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
