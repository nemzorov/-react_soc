const Post = (props) => {
    return (
        <div className={props.style}>
            <span>{props.date}</span>
            <p>{props.text}</p>
        </div>
    )
}

export default Post;