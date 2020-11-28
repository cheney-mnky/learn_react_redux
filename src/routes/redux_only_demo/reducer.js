const defaultState = {
  count: 0
};
const reducerCount = (state = defaultState, action) => {
  switch (action.type) {
      case 'ADD':
        return {
            ...state,
            count: state.count+action.payload
        };
      default: 
      return state;
  }
};
export function addTodo(payload) {
  return {
    type: 'ADD',
    payload
  };
}
export default reducerCount;