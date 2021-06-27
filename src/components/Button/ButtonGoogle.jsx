import React from 'react'

function ButtonGoogle(props) {
    return (
        <div class="google-btn" {...props}>
            <div class="google-icon-wrapper">
                <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
            </div>
            <p class="btn-text"><b>Sign in with google</b></p>
        </div>
    )
}

export default ButtonGoogle
