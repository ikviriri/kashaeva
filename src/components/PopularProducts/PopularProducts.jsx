import s from "./PopularProducts.module.css";
import { ProductCard } from "../ProductCard/ProductCard";

export function PopularProducts() {
  return (
    <section className={s.section}>
      <div className="container">
        <p className={s.label}>ВЫБРАНО С ЗАБОТОЙ</p>
        <header className={s.head}>
          <h2 className={s.title}>Популярные товары</h2>
          <a href="/catalog" className={s.link}>Смотреть все →</a>
        </header>

        <div className={s.grid}>
          {/* Вызываем карточку 4 раза, как в твоем примере */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}