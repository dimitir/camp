import React from 'react';
// import { Link } from 'react-router-dom';

import ImgLogo from '../../img/home.png';
import iconSearch from '../../img/search.svg';
import iconNotification from '../../img/notification.svg';
import style from './header.module.scss';
import { openModal } from '../../store/modals/actions';
import uuid from 'uuid';
import SetInContent from './modals/modalSetIn/SetInContent';


export default (props) => {
  //  console.log(props);
  return (
    <div className={style.header}>

      <div className="logoBlock">
        {/* <Link to="/"> */}
        <img src={ImgLogo} className={style.imgLogo} alt="" />
        {/* </Link> */}

      </div>
      <div className={style.userBlock}>
        <span><img src={iconSearch} className={`${style.iconSearch} ${style.marginCastom}`} alt="" /></span>
        <span><img src={iconNotification} className={[style.iconNotification, style.marginCastom].join(' ')} alt="" /></span>
        <span><a className={`${style.marginCastom} ${style.cursorPointer}`}
          onClick={() => props.dispatch(openModal({
            id: uuid.v4(),
            type: 'setin',
            content: <SetInContent />,
            onClose: () => console.log('fire at closing event'),
            onConfirm: () => console.log('fire at confirming event'),
          }))}
        >Sing in</a></span>
      </div>
    </div >
  )

}

