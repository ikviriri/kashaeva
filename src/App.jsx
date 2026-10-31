import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

// Импортируем компоненты для главной страницы
import { Hero } from "./components/Hero/Hero";
import { PopularProducts } from "./components/PopularProducts/PopularProducts";
import { About } from "./components/About/About";
import { Subscribe } from "./components/Subscribe/Subscribe";

// Импортируем твои созданные страницы (проверь пути!)
import { CatalogPage } from "./components/CatalogPage/CatalogPage";
import { ProductPage } from "./components/ProductPage/ProductPage";

function HomePage() {
  return (
    <>
      <Hero />
      <PopularProducts />
      <About />
      <Subscribe />
    </>
  );
}

function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px', minHeight: '50vh' }}>
      <h1 style={{ fontSize: '80px', color: '#173d2b', marginBottom: '20px' }}>404</h1>
      <p style={{ fontSize: '18px', color: '#6b726e', marginBottom: '30px' }}>Упс! Такой страницы не существует.</p>
      <a href="/" style={{ fontSize: '16px', color: '#173d2b', borderBottom: '1px solid #173d2b' }}>Вернуться на главную</a>
    </div>
  );
}

export function App() {
  return (
    <div className="layout">
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}