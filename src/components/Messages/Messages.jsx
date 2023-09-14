import style from './Message.module.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import React from 'react';
import { Navigate } from 'react-router-dom';


const Messages = (props) => {
    let newMess = React.createRef();
    let ulMessages = React.createRef();

    const changeMessage = () => {
        let text = newMess.current.value;
        props.changeMessage(text)
    }

    const addMessage = () => {
        props.addMessage();
    }

    const scrollBottom = () => {
        ulMessages.current.scrollTo({
            top: 1000,
            left: 0,
            behavior: 'smooth'
        })
    }



    if (!props.isAuth) { return <Navigate to="/login" /> }

    return (
        <div className={style.wrap}>
            <div>
                <ul className={style.dialogs}>
                    {props.data.dialogs.map(dialog => <Dialog className={style.dialog} name={dialog.name} key={dialog.id} id={dialog.id} />)}
                </ul>
            </div>
            <span></span>
            <div>
                <ul ref={ulMessages} className={style.messages}>
                    {props.data.messages.map(message => <Message key={message.id} className={`${style.message} ${message.my ? style.my : ''}`} message={message.text} />)}
                </ul>

                <div className={style.send}>
                    <textarea onClick={scrollBottom} placeholder='Введите сообщение' className={style.textarea} onChange={changeMessage} ref={newMess} value={props.data.textareaVal} />
                    <button className={style.button} onClick={addMessage} >Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;