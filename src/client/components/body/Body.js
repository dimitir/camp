import React from 'react';
import style from './body.module.scss';


const Body = (props) => {
 console.log(props);
    return (
        <>
            <h1 className={style.title}>Hi</h1>
        </>
    )
}

export default Body