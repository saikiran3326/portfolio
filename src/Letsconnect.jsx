import './Let.css'
import React from 'react'
export default function Letsconnect(props) {
    return (
        <div id='banner'>
        <div><h1>{props.fname}</h1></div>
        <div id='circle'><img src='https://via.placeholder.com/100'/></div>
        <div><h1>{props.lname}</h1></div>
        </div>
    )
}