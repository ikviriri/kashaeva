import s from "./About.module.css";
import banner2Img from "../../assets/banner2.png"; // <-- Вторая картинка

export function About() {
  return (
    <section className={s.section}>
      <div className={s.imageBox}>
        <img src={banner2Img} alt="Растения" />
      </div>
      <div className={s.content}>
        <p className={s.label}>О МАГАЗИНЕ MOSS</p>
        <h2 className={s.title}>Ближе к природе</h2>
        <p className={s.text}>
          Мы верим, что для природы найдётся место в каждом доме. Подбираем здоровые растения и красивые кашпо.
        </p>
        <a href="/about" className={s.link}>Узнать о нас →</a>
      </div>
    </section>
  );
}