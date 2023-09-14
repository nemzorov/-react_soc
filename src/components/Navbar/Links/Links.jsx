import { NavLink } from "react-router-dom";

const Links = (props) => {
    return (
        <li className={props.className}>
            <NavLink  to={props.href} className={({ isActive }) => (isActive ? props.activeClass : '')}>{props.name}</NavLink>
        </li>
    )
}

export default Links;