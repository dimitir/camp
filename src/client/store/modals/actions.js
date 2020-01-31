// что такое события что тут писать? это пугает... и хорошо
// эти чувства размазывать... нет хорошо. быть живым но делать дело

// это обьект событие
import headerActions from './actionTypes';


export const openModal = (obj) => ({
  type: headerActions.OPEN_MODAL,
  obj
});

export const closeModal = (obj) => ({
  type: headerActions.CLOSE_MODAL,
  obj
});
