import React from 'react';
import "./Modal.scss"
const modalData = [
    {
        modalColorTitle: "Font Color",
        modalColorTag: "#444444",
        modalSwitchesColor: "darkgrey",
    },
    {
        modalColorTitle: "Background Color",
        modalColorTag: "#FFFFFF",
        modalSwitchesColor: "white",
    },
    {
        modalColorTitle: "Button Color",
        modalColorTag: "#2072EF",
        modalSwitchesColor: "lightblue",
    },
    {
        modalColorTitle: "Button Border Color",
        modalColorTag: "#2072EF",
        modalSwitchesColor: "lightblue",
    },
    {
        modalColorTitle: "Buttons Mouseover Color",
        modalColorTag: "#0053D1",
        modalSwitchesColor: "darkblue",
    },
]

function Modal({ props }) {
    function closeModal(event) {
        event.stopPropagation();
    }
    return (
        <div className='modalBackground' onClick={() => props(false)}>
            <div className='modalContainer' onClick={closeModal}>
                <div className='modalInfo'>
                    <div className='modalTitle'>
                        <h1>Theme Color</h1>
                    </div>
                    <div className='modalTheme'>
                        <h1>Change Theme</h1>
                    </div>
                </div>
                {modalData.map((modalInformation, index) => (
                    <div key={index} className='modalSelectContainer'>
                        <div className='modalSelect'>
                            <div className='modalColorname'>
                                <h1>{modalInformation.modalColorTitle}</h1>
                            </div>
                            <div className='modalColortag'>
                                <h1>{modalInformation.modalColorTag}</h1>
                            </div>
                            <div className={`modalSwitches ${modalInformation.modalSwitchesColor}`}></div>
                        </div>
                    </div>
                )
                )}

                <div className='modalButton'>
                    <button className='buttonCancel' onClick={() => props(false)}> Cancel</button>
                    <button className='buttonSave' onClick={() => props(false)}> Save </button>
                </div>
            </div>
        </div>
    );
}
export default Modal;