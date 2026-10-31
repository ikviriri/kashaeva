import s from "./Subscribe.module.css";

export function Subscribe() {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.inner}>
          <h2 className={s.title}>Растите вместе с нами</h2>
          <p className={s.text}>
            Советы по уходу, новые растения и немного вдохновения. Пишем только о том, что любим сами.
          </p>
          
          <form className={s.form}>
            <input type="email" placeholder="Ваша электронная почта" className={s.input} />
            <button type="submit" className={s.button}>Подписаться</button>
          </form>
        </div>
      </div>
    </section>
  );
}