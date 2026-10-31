import { Link } from "react-router-dom"; // <-- добавили импорт
import s from "./Header.module.css";

export function Header() {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.inner}>
          <Link to="/" className={s.logo}>MOSS</Link>
          
          <nav className={s.nav}>
            <Link to="/" className={s.active}>Главная</Link>
            <Link to="/catalog" className={s.link}>Каталог</Link>
            <Link to="/about" className={s.link}>О нас</Link>
          </nav>

          {/* ... иконки ... */}
        </div>
      </div>
    </header>
  );
}