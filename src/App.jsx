import { Routes, Route, useNavigate } from "react-router-dom"; // 1. Добавили useNavigate
import { useEffect } from "react"; // 2. Добавили useEffect

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { PopularProducts } from "./components/PopularProducts/PopularProducts";
import { About } from "./components/About/About";
import { Subscribe } from "./components/Subscribe/Subscribe";
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
      {/* 3. Поменяли href="/" на href="#/" чтобы ссылка работала даже если роутер сломается */}
      <a href="#/" style={{ fontSize: '16px', color: '#173d2b', borderBottom: '1px solid #173d2b' }}>Вернуться на главную</a>
    </div>
  );
}

export function App() {
  const navigate = useNavigate(); // Инициализируем навигацию

  // Этот хук срабатывает при загрузке приложения
  useEffect(() => {
    // Проверяем, сохранил ли скрипт из 404.html путь, куда хотел попасть пользователь
    const redirectPath = sessionStorage.getItem('redirect_path');
    
    if (redirectPath) {
      sessionStorage.removeItem('redirect_path'); // Очищаем память, чтобы не срабатывало дважды
      navigate(redirectPath); // Перенаправляем куда надо
    }
  }, [navigate]);

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