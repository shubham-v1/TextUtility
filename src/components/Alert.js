import React from 'react';

function Alert(props) {
    const capitalizeText = (word) =>{
        let lower = word.charAt(0).toUpperCase()+word.slice(1);
        return lower;
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalizeText(props.alert.type)}</strong>: {props.alert.message}
        </div>
    );
}

export default Alert;