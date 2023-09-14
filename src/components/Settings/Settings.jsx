import style from './Settings.module.css'
import { settingsAPI } from '../../api/api';
import React from 'react';

const Settings = () => {
    let form = React.createRef();

    const send = () => {
        let method
        let endPoint
        for (let index = 0; index < form.current.length; index++) {
            switch (form.current[index].type) {
                case 'text':
                    endPoint = form.current[index].value
                    break;
                case 'radio':
                    if (form.current[index].checked) {
                        method = form.current[index].id
                    }
                    break;
                default:
                    break;
            }
        }

        settingsAPI.request(endPoint, method)
            .then((response => {
                console.log(response);
            }))
    }

    return (
        <form ref={form} className={style.settings}>

            <div className={style.top}>
                <input placeholder='введи endPoint (например: /profile/29833)' type="text" />
                <div className='button' onClick={send}>Отправить запрос</div>
            </div>

            <p>Выберете метод запроса:</p>
            <div className="radio">
                <input type="radio" name="radio" id="get" />
                <label htmlFor="get">GET</label>
                <br />
                <input type="radio" name="radio" id="post" />
                <label htmlFor="post">POST</label>
                <br />
                <input type="radio" name="radio" id="put" />
                <label htmlFor="put">PUT</label>
                <br />
                <input type="radio" name="radio" id="delete" />
                <label htmlFor="delete">DELETE</label>
            </div>
        </form>
    )
}

export default Settings;