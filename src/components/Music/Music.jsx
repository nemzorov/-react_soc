import React from 'react';
import style from './Music.module.css'
import Track from './Track/Track';

const newMusic = [
    {
        id: 1,
        src: 'https://clck.ru/35KQyB',
        name: 'Дабро - Юность',
        like: false,
        dislike: false,
    },
    {
        id: 2,
        src: 'https://clck.ru/35KQz9',
        name: 'Дабро - Услышит весь район',
        like: false,
        dislike: false,
    }
]





const Music = (props) => {


    const estimate = (id, effect) => {
        props.estimate(id, effect)
    }

    const addMusic = (music) => {
        props.setMusic(music);
    }

    if (props.data.length === 0) {
        addMusic(newMusic)
    }

    return (
        <ul className={style.items}>
            {props.data.map(el => <Track key={el.id} id={el.id} estimate={estimate} style={style} like={el.like} dislike={el.dislike} name={el.name} audioSrc={el.src} />)}
        </ul>
    )
}

export default Music;   