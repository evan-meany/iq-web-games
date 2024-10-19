import React from "react";
import './button.css';

function Button({ Label, onClick}) {
    return (
        <button className="button" onClick={onClick}>
            {Label}
        </button>
    );
}

export default Button;
