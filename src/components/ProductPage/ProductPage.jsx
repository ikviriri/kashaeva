import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./ProductPage.module.css";

export function ProductPage() {
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await fetch("http://localhost:3000/products/" + id);
        if (!res.ok) throw new Error("Товар не найден");
        const productFromServer = await res.json();
        setProduct(productFromServer);

        const catRes = await fetch("http://localhost:3000/categories/" + productFromServer.categoryId);
        const categoryFromServer = await catRes.json();
        setCategory(categoryFromServer);
      } catch (e) {
        console.error(e.message);
      }
    }
    getProduct();
  }, [id]);

  if (!product.title) return <p style={{ padding: '50px' }}>Загрузка...</p>;

  return (
    <section className={s.product}>
      <div className="container">
        <div className={s.breadcrumbs}>
          Главная / Каталог / {product.title}
        </div>

        <div className={s.mainContent}>
          <div className={s.images}>
            <img src={product.image} alt={product.title} className={s.mainImage} />
          </div>

          <div className={s.info}>
            {category && <p className={s.category}>{category.title.toUpperCase()}</p>}
            <h1 className={s.title}>{product.title}</h1>
            <p className={s.price}>{product.price} ₽</p>
            <p className={s.desc}>{product.description}</p>
            
            <div className={s.divider}></div>

            <div className={s.buyRow}>
              <button className={s.addBtn}>Добавить в корзину</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}