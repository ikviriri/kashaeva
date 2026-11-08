import { Link } from "react-router-dom";
import s from "./ProductCard.module.css";
import { Button } from "../Button/Button"; 

export function ProductCard({ product }) {
  // Если product вдруг не пришел, мы просто ничего не рисуем (защита от падения)
  if (!product) return null;

  return (
    <div className={s.card}>
      <Link to={`/product/${product.id}`} className={s.cardLink}>
        <div className={s.imageBox}>
          <img src={product.image} alt={product.title} />
        </div>
        <h3 className={s.cardTitle}>{product.title}</h3>
        <p className={s.cardDesc}>{product.description ? product.description.substring(0, 40) + "..." : ""}</p>
        <p className={s.cardPrice}>{product.price} ₽</p>
      </Link>
      <Button /> 
    </div>
  );
}