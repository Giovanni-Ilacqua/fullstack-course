import React from 'react'

const Notification = ({ notificationMessage }) => {
    if (notificationMessage === null) {
        return null
    }

    const successStyle = {
        color: 'green',
        padding: '10px',
        backgroundColor: 'lightgrey',
        fontSize: '18px',
        border: '2px solid green',
        display: 'inline-block'
    }

    return (
        <div style={successStyle}>
            {notificationMessage}
        </div>
    )
}

export default Notification