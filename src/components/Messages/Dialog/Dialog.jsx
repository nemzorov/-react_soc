import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return (
        <li className={props.className}>
            <NavLink to={props.id}>{props.name}</NavLink>
        </li>
    )
}

export default Dialog;