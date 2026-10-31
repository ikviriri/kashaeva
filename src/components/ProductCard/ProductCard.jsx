import { Link } from "react-router-dom"; // <-- Добавили импорт
import s from "./ProductCard.module.css";
import { Button } from "../Button/Button"; 
import monsteraImg from "../../assets/monstera.png";

export function ProductCard() {
  return (
    // Оборачиваем карточку в Link. Пока ведем на id=1
    <Link to="/product/1" className={s.card}>
      <div className={s.imageBox}>
        <span className={s.tag}>Любимец</span>
        <img src={monsteraImg} alt="Растение" />
      </div>
      <h3 className={s.cardTitle}>Монстера</h3>
      <p className={s.cardDesc}>Высота 50-60 см</p>
      <p className={s.cardPrice}>2 490 ₽</p>
      
      {/* Вставляем нашу кнопку-компонент */}
      <Button /> 
    </Link>
  );
}