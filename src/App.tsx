import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { add, del } from './store/features/countSlice';

export default function App() {
  const { count } = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <div className="App">App</div>
      <button onClick={() => dispatch(del(1))}>del </button>
      {count}
      <button onClick={() => dispatch(add(1))}>add </button>
    </>
  );
}
