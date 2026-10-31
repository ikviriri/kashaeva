import s from "./ProductPage.module.css";

// Проверь пути к картинкам! 
// Если у тебя они лежат в src/assets, то путь должен быть ../../assets/название.png
import monsteraImg from "../../assets/monstera.png"; 
import ficusImg from "../../assets/ficus.png"; 
import kashpoImg from "../../assets/kashpo.png"; 
import bannerImg from "../../assets/banner.png"; 

export function ProductPage() {
  return (
    <section className={s.product}>
      <div className="container">
        <div className={s.breadcrumbs}>
          Главная / Каталог / Монстера делициоза
        </div>

        <div className={s.mainContent}>
          {/* Левая часть с картинками */}
          <div className={s.images}>
            <img src={monsteraImg} alt="Монстера" className={s.mainImage} />
            <div className={s.thumbnails}>
              <img src={ficusImg} alt="Фикус" />
              <img src={kashpoImg} alt="Кашпо" />
              <img src={bannerImg} alt="В интерьере" />
            </div>
          </div>

          {/* Правая часть с информацией */}
          <div className={s.info}>
            <p className={s.category}>КОМНАТНЫЕ РАСТЕНИЯ</p>
            <h1 className={s.title}>Монстера делициоза</h1>
            <p className={s.price}>2 490 ₽</p>
            <p className={s.desc}>
              Крупные резные листья и выразительный силуэт делают монстеру эффектным акцентом в интерьере. Хорошо чувствует себя при рассеянном свете.
            </p>

            <div className={s.divider}></div>

            <div className={s.details}>
              <p className={s.detailLabel}>Размер растения</p>
              <p className={s.detailValue}>Высота 30–40 см</p>

              <p className={s.detailLabel}>Уход</p>
              <p className={s.detailValue}>Рассеянный свет · Полив после подсыхания почвы</p>
            </div>

            <div className={s.actions}>
              <p className={s.detailLabel}>Количество</p>
              <div className={s.buyRow}>
                <div className={s.counter}>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <button className={s.addBtn}>Добавить в корзину</button>
              </div>
              <button className={s.favBtn}>♡ Добавить в избранное</button>
            </div>

            <div className={s.benefits}>
              <p>✓ Надёжная упаковка</p>
              <p>✓ Инструкция по уходу</p>
              <p>✓ Бережная доставка</p>
            </div>
          </div>
        </div>

        <div className={s.aboutPlant}>
          <h2 className={s.aboutTitle}>О растении</h2>
          <p className={s.aboutText}>
            Монстера любит яркий рассеянный свет и умеренный полив. Протирайте листья влажной мягкой тканью и поворачивайте растение время от времени, чтобы крона развивалась равномерно.
          </p>
        </div>
      </div>
    </section>
  );
}