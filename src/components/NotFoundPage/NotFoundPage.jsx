import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

export function NotFoundPage() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>404</h1>
      <p className={s.text}>Упс! Такой страницы не существует.</p>
      <Link to="/" className={s.link}>Вернуться на главную</Link>
    </div>
  );
}