import React from 'react'
import '../buttonsHome/ButtonHome.css'
import { Router,Link, Route, Switch } from 'react-router-dom'


export const ButtonHome = (props) => {
    return(
            props.color == "purple" ? 
            <button className="purple-button">
                <p>
                    {props.text}
                </p>
            </button>: props.color == "blue" ?
            
            <Link to={props.link} className="">
            <button className="blue-button">
                <p>{props.text}</p>
            </button></Link> : 
            <button className="lightblue-button">
                <p>{props.text}</p>
            </button>
    )
}