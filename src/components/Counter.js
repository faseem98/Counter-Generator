import { counterActions } from '../store/index';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)

  // const incrementHandler = () => {
  //   dispatch({type: 'increment'});
  // }

  // const increaseHandler = () => {
  //   dispatch({type: 'increase', amount: 5});
  // }

  // const decrementHandler = () => {
  //   dispatch({type: 'decrement'});
  // }

  // const decreaseHandler = () => {
  //   dispatch({type: 'decrease', amount: 5});
  // }

  // const resetHandler = () => {
  //   dispatch({type: 'reset'});
  // }

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5));
  }

  const resetHandler = () => {
    dispatch(counterActions.reset());
  }

  // const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter App</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={increaseHandler}>INCREMENT BY 5</button>
        <button onClick={decrementHandler}>DECREMENT</button>
        <button onClick={decreaseHandler}>DECREMENT BY 5</button>
        <button onClick={resetHandler}>RESET</button>
      </div>
    </main>
  );
};

export default Counter;
