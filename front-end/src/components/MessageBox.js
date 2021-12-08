import React from 'react'

export default function MessageBox(props) {
    return (
        <div className={props.variant}>
            <div>{props.children}</div>
        </div>
    )
}
