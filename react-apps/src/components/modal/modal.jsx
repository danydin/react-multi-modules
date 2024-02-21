import { useState } from "react";
import ModalStrcture from "./modal_strcture";
import "./style.css";

export default function Modal() {
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }

    function onClose() {
        setShowModalPopup(false);
    }

    return (
        <div className="modalContainer">
            <button className="modalBtn" onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {showModalPopup && (
                <ModalStrcture
                    id={"custom-id"}
                    header={<h1>Customized Header</h1>}
                    footer={<h1>Customized Footer</h1>}
                    onClose={onClose}
                    body={<div>Customized body</div>}
                />
            )}
        </div>
    );
}