import * as React from 'react';
import './Menu.css';
export default function Menu() {
    return (<div className="menu">
        <a href="#header"><img src='..\public\2d20bdca-7936-4761-9a3a-97cf2be2a5d7.svg' width={250} height={100}></img></a>
        <a href="#header">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        </div>)
}