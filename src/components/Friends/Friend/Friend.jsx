import { NavLink } from "react-router-dom";

const Friend = (props) => {
    return (
        <li className={`${props.style.item} ${props.follow ? props.style.follow : props.style.unfollow}`}>
            <div>
                <img src={props.avatar ? props.avatar : '/simpsons-default.png'} alt={props.name} />
                <NavLink to={`/profile/${props.id}`}>{props.name}</NavLink>
                <span>{props.age}</span>
            </div>
            <button disabled={props.disabled.some((id) => id === props.id)} onClick={props.click}>{props.follow ? 'Отписаться' : 'В друзья   '}</button>
        </li>
    )
}

export default Friend;