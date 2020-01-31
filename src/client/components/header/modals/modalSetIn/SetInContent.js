import React from 'react';
import style from './setIn.module.scss';


export default () => (
  <div className={style.modal}>
    <div className={style.header}>Welcome back.</div>
    <div className={style.describe}>
      Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.
    </div>
    <div className={style.singInBlock}>
      <div className={style.singInLink}><a href="">Sign in with Google</a></div>
      <div className={style.singInLink}><a href="">Sign in with Facebook</a></div>
      <div className={style.singInLink}><a href="">Sign in with Twitter</a></div>
      <div className={style.singInLink}>
     

      </div>
      <div className={style.createOne}> No account?<a href="" className="">Create one</a></div>

      <div className={style.describe}>
        To make Medium work, we log user data and share it with service providers.
        Click “Sign In” above to accept Medium’s Terms of Service & Privacy Policy.
    </div>
    </div>
  </div>
);
