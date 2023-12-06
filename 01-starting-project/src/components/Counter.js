import classes from './Counter.module.css';
import { useSelector , useDispatch } from "react-redux";
import { counterActions } from '../store';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () =>{
    dispatch(counterActions.increment());
  }

  const increaseHandler = () =>{
    dispatch(counterActions.increase(10));  //{ type: some unique identifier , payload : 10}
  }

  const decreaseHandler = () =>{
    dispatch(counterActions.decrease(10));
  } 

  const decrementHandler = () =>{
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     { show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decreaseHandler}>Decrement by 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
