// 创建action creator

export function setNumIncrementAction(payload) {
  return {
      type: 'INCREMENT',
      payload,
  }
}
export function setNumDecrementAction(payload) {
  return {
      type: 'DECREMENT',
      payload,
  }
}

// reducer 纯函数
export default (state = {num: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT': return {
      ...state,
      num: state.num+1
    };
    case 'DECREMENT': return {
      ...state,
      num: state.num-1
    };
    default: return state;
  }
};
