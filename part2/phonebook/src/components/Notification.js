import React from 'react'

const Notification = ({ notificationMessage, notificationStyle }) => {
    const successStyle = {
        color: 'green',
        padding: '10px',
        backgroundColor: 'lightgreen',
        fontSize: '18px',
        border: '2px solid green',
        display: 'inline-block'
    }

    const errorStyle = {
        color: 'red',
        fontStyle: 'bold',
        padding: '10px',
        backgroundColor: 'lightgrey',
        fontSize: '18px',
        border: '2px solid red',
        display: 'inline-block'
    }
    
    let msgStyle = successStyle
    if (notificationStyle==='error') {
        msgStyle = errorStyle
    } 

    if (notificationMessage === null) {
        return null
    }

    return (
        <div style={msgStyle}>
            {notificationMessage}
        </div>
    )
}

export default Notification