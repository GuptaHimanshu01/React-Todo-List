import React from 'react'

export const Navbar = (props) => {
    return (
        <nav className="main-nav">
            {/* 1st Logo part */}
            <h1 className="Navbar-logo">{props.showtitle}</h1>
            
            {/* 2nd menu part */}
            {/* <div className="menu-link">
                <ul>
                    <li>
                        <a href="github.com">Home</a>
                    </li>
                    <li>
                        <a href="github.com">About</a>
                    </li>
                    <li>
                        <a href="github.com">Portfolio</a>
                    </li>
                    

                </ul>

            </div> */}
            



        </nav>
    )
}
