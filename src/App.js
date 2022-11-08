import './App.scss';
import { React, useState } from 'react';
import Modal from './Components/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <div className='holdingButton'>
        <button className='openModal' onClick={() => { setOpenModal(true); }}>ShowPopUp</button>
      </div>
      {openModal && <Modal props={setOpenModal} />}
    </div>
  );
}

export default App;
