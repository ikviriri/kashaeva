import s from "./CatalogPage.module.css";
// Проверь этот путь! Мы находимся в components/CatalogPage, 
// а ProductCard лежит в components/ProductCard. 
// Поэтому путь выходит на уровень выше (../) и заходит в ProductCard
import { ProductCard } from "../ProductCard/ProductCard"; 

export function CatalogPage() {
  return (
    <section className={s.catalog}>
      <div className="container">
        <p className={s.label}>КОЛЛЕКЦИЯ MOSS</p>
        <h1 className={s.title}>Растения и всё для дома</h1>
        <p className={s.subtitle}>Выберите зелёных соседей и вещи, которые сделают дом уютнее.</p>

        {/* Панель фильтров */}
        <div className={s.filters}>
          <input type="text" placeholder="Найти растение или аксессуар" className={s.input} />
          <div className={s.sort}>Сначала дешевые ▾</div>
        </div>

        <p className={s.count}>12 товаров</p>

        <div className={s.grid}>
          {/* Выводим 8 карточек */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}