import React from 'react'

export default function LoadingBox(props) {
    return (
        <div className="loading-box">
            {props.children}
        </div>
    )
}
