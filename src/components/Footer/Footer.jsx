import s from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.top}>
          <div>
            <div className={s.logo}>MOSS</div>
            <p className={s.tagline}>Больше зелени. Больше жизни.</p>
          </div>
          <div className={s.links}>
            <div className={s.column}>
              <h4>МАГАЗИН</h4>
              <a href="/">Главная</a>
              <a href="/catalog">Каталог</a>
              <a href="/about">О нас</a>
            </div>
            <div className={s.column}>
              <h4>МЫ РЯДОМ</h4>
              <a href="#">ВКонтакте</a>
              <a href="#">Телеграм</a>
            </div>
            <div className={s.column}>
              <h4>НАПИШИТЕ НАМ</h4>
              <a href="mailto:test@test.ru">test@test.ru</a>
            </div>
          </div>
        </div>
        <div className={s.bottom}>
          <p>© 2026 MOSS</p>
          <a href="#">Политика</a>
        </div>
      </div>
    </footer>
  );
}