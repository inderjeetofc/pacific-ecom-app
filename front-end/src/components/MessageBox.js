import React from 'react'

export default function MessageBox(props) {
    return (
        <div className="failed message-box">
            <div>{props.msg}</div>
        </div>
    )
}
