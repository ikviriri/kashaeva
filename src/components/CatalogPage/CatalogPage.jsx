import { useState, useEffect } from "react";
import s from "./CatalogPage.module.css";
import { ProductCard } from "../ProductCard/ProductCard";

export function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        setError(null);
        // Запрос товаров
        const resProd = await fetch("http://localhost:3000/products");
        if (!resProd.ok) throw new Error(`Ошибка ${resProd.status}`);
        const dataProd = await resProd.json();
        setProducts(dataProd);

        // Запрос категорий
        const resCat = await fetch("http://localhost:3000/categories");
        const dataCat = await resCat.json();
        setCategories(dataCat);
      } catch (e) {
        setError(e.message);
      }
    }
    loadData();
  }, []);

  if (error) {
    return <p className={s.stateError}>Не удалось загрузить товары: {error}</p>;
  }

  return (
    <section className={s.catalog}>
      <div className="container">
        <p className={s.label}>КОЛЛЕКЦИЯ MOSS</p>
        <h1 className={s.title}>Растения и всё для дома</h1>
        <p className={s.subtitle}>Выберите зелёных соседей и вещи, которые сделают дом уютнее.</p>

        <div className={s.filters}>
          <button className={s.filterBtnActive}>Все</button>
          {categories.map((cat) => (
            <button key={cat.id} className={s.filterBtn}>{cat.title}</button>
          ))}
        </div>

        <p className={s.count}>Найдено товаров: {products.length}</p>

        {products.length === 0 ? (
          <p className={s.state}>Загрузка...</p>
        ) : (
          <div className={s.grid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}