import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const handleClick = () => {
    toast.success("Hello from ReactJS");
  }

  return (
    <>
      <div>App</div>
      <button onClick={handleClick} className='btn btn-warning'>Click Me</button>
      <ToastContainer />
    </>
  );
}

export default App;