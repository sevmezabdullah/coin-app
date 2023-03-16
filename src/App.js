import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, login } from './redux/slicer/user';
import { makeCountFive } from './redux/slicer/user';
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const count = useSelector((state) => state.user.count);
  useEffect(() => {
    dispatch(getUserData());
    dispatch(login({ email: 'abdullahsevmez@gmail.com', password: '123456' }));
  }, [dispatch]);

  console.log(count);
  return (
    <div className="app">
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(makeCountFive(5));
        }}
      >
        Ekle
      </button>
      <button
        onClick={() => {
          dispatch(makeCountFive(0));
        }}
      >
        Çıkar
      </button>
    </div>
  );
}

export default App;
