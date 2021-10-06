import React from 'react'
import { Navbar } from './Navbar/Navbar'

export default function Header(props) {
    return (
        <div>
            {/* <headtitle className="App-title">{props.title}</headtitle> */}
            <Navbar showtitle={props.title}/>

        </div>
    )
}
