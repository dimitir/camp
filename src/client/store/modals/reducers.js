import actionsType from './actionTypes';


const initialState = {
  modals: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsType.OPEN_MODAL:
      return {
        ...state,
        modals: state.modals.concat(action.obj)
      };
    case actionsType.CLOSE_MODAL:
      let wrapper = document.querySelector('#wrapperOpacity');
      wrapper.remove();
      document.body.style.background = 'none';
      return {
        ...state,
        modals: state.modals.filter((item) => item.id !== action.obj.id),
      };
    default:
      return state;
  }
}
