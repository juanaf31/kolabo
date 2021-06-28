import React from 'react'

function ButtonGoogle(props) {
    return (
        <div data-testid='google_btn' className="google-btn" {...props}>
            <div className="google-icon-wrapper">
                <img data-testid="google_image" className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
            </div>
            <p data-testid='text' className="btn-text"><b>{props.title}</b></p>
        </div>
    )
}

export default ButtonGoogle
