import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNumIncrementAction, setNumDecrementAction } from './reducer';
const Counter = () => {
  const count = useSelector(store => store.num1.num);
  const dispatch = useDispatch();
  
  return(
  <div>
    <h1>{count}</h1>
    <button onClick={() => dispatch(setNumIncrementAction())}>+</button><span>hook&redux</span> <br/><br/>
    <button onClick={() => dispatch(setNumDecrementAction())}>-</button><span>hook&redux</span>
  </div>
  )
};
export default Counter;