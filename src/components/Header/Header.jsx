import { NavLink } from "react-router-dom";
import style from './Header.module.css'

const Header = (props) => {
    return (
        <div className="header">
            <NavLink to="/" className={style.wrapp}>
                <div className={style.logo}>SC</div>
                <div className={style.name}>Соц. сеть</div>
            </NavLink>

            {props.data.isAuth ? props.data.login : <NavLink target='_blank' to="https://social-network.samuraijs.com/login" className={style.auth}>Войти</NavLink>}

        </div>
    );
}

export default Header;