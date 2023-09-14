import React from 'react';
import Post from './Posts/Post';
import style from './Profile.module.css'

const Profile = (props) => {
    let newMessage = React.createRef();


    return (
        <div className={style.wrap}>
            <div className={style.left}>
                <div className={style.image}>
                    <img src={props.data.profile.photos.large} alt="face" />
                </div>
            </div>
            <div className={style.right}>
                <div className={style.name}>{props.data.profile.fullName}</div>
                <div className={style.status}>{props.data.profile.status}</div>

                <div className={style.wall}>
                    <div className={style.send}>
                        <textarea placeholder='Есть что рассказать?' className={style.textarea} onChange={() => { props.changeMessage(newMessage.current.value) }} ref={newMessage} value={props.data.textareaVal} />
                        <button className={style.button} onClick={() => { props.addMessage() }}>Опубликовать</button>
                    </div>

                    <div className={style.posts}>
                        {props.data.posts.map(post => <Post style={style.post} key={post.id} text={post.text} date={post.date} />)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile;