import React from "react";

const Track = (props) => {
    return (
        <li className={props.style.item}>
            <audio type="audio/mpeg" controls src={props.audioSrc}>
            </audio>
            <div className={props.style.name}>{props.name}</div>
            <div className={props.style.estimate}>
                <div onClick={() => { props.estimate(props.id, 'like') }} data-like={props.like} className={props.style.like}>❤️</div>
                <div onClick={() => { props.estimate(props.id, 'dislike') }} data-dislike={props.dislike} className={props.style.dislike}>👎</div>
            </div>
        </li>
    )
}

export default Track;