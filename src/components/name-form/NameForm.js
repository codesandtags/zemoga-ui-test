import React from 'react';
import './NameForm.scss';

const NameForm = ({ content }) => {
    return (
        <div className="name-form">
            <div className="name-form__background"></div>
            <div className="name-form__left">Is there anyone else you would want us to add?</div>
            <div className="name-form__right">
                <div className="name-form__button">Submit a Name</div>
            </div>
        </div>
    )
}

export default NameForm;