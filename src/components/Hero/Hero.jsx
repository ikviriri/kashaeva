import s from "./Hero.module.css";


export function Hero() {
  return (
    <section className={s.hero}>
      <div className={`container ${s.inner}`}>
        <div className={s.content}>
          <p className={s.label}>ПРИРОДА НАЧИНАЕТСЯ ДОМА</p>
          <h1 className={s.title}>Добавьте <br/> жизни в свой <br/> интерьер</h1>
          <p className={s.text}>
            Растения, кашпо и забота о них — всё, чтобы дома стало уютнее и немного зеленее.
          </p>
          <button className={s.button}>В каталог →</button>
        </div>
        <div className={s.imageBox}>
          <img src="/banner.png" alt="Интерьер" /> 
        </div>
      </div>
    </section>
  );
}