import style from "./Friends.module.css"
import Friend from "./Friend/Friend";

const Friends = (props) => {

    const pages = [];
    let key = 0;

    const maxPages = Math.ceil(props.totalCount / props.sizePage);

    for (let i = 1; i <= maxPages; i++) {
        pages.push(i);
    }




    return (
        <div>
            <ul className={style.items}>
                {props.data.map(el => <Friend disabled={props.followingProgress} avatar={el.photos.large} style={style} click={el.followed ? () => props.unfollow(el.id) : () => props.follow(el.id)} age={el.status} id={el.id} key={el.id} name={el.name} follow={el.followed} />)}
            </ul>
            <ul className={style.pages}>
                {pages.map((el) => {
                    if ((el !== maxPages) && (el === props.currentPage || el === props.currentPage + 1 || el === props.currentPage - 1)) {
                        return <li key={key++} onClick={() => props.setCurrentPage(el)} className={el === props.currentPage ? style.active : 'not'}>{el}</li>
                    } else { return false }
                })}
                <span>...</span>
                <li key={maxPages} onClick={() => props.setCurrentPage(maxPages)} className={maxPages === props.currentPage ? style.active : 'not'}>{maxPages}</li>
            </ul>
        </div>
    )
}



export default Friends;