import React from 'react';
import {NavLink} from 'react-router-dom'



export default function Header(){

    const Mainmenu = ['Userdata','Signup']

    return(
        <div>
        <nav 
         style={{
            backgroundColor: "#475562",
            borderBottom: "0.5px white solid",
            borderTop: "0.5px white solid",
            // justifyContent:'end'
          }}
        className="navbar navbar-expand-lg navbar-light  ">
            <div className='container-fluid'>
            <ul className='navbar-nav' >
                {
                    Mainmenu.map((res, i)=>(
                        <li key={i} 
                        
                        className="nav-item px-1"  >
                            <NavLink 
                            className='nav-link text-black'
                             ActiveclassName='bg-dark'
                             style={{fontWeight:'bolder'}}
                            to={`/${res.toLowerCase()}`} >{res}</NavLink>
                        </li>
                    ))
                }
            </ul>
            </div>
        </nav>
        
        </div>
    )
}