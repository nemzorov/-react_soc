import Links from "./Links/Links";
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className={style.list}>
                <Links key="1" activeClass={style.active} href="/profile" name="Моя страница" className={style.link} />
                <Links key="2" activeClass={style.active} href="/friends" name="Друзья" className={style.link} />
                <Links key="3" activeClass={style.active} href="/message" name="Сообщения" className={style.link} />
                <Links key="4" activeClass={style.active} href="/news" name="Новости" className={style.link} />
                <Links key="5" activeClass={style.active} href="/music" name="Музыка" className={style.link} />
                <Links key="6" activeClass={style.active} href="/settings" name="Настройки" className={style.link} />
            </ul>
        </nav>
    );
}

export default Navbar;