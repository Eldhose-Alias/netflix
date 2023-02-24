import React from 'react'
import { useState,useEffect } from 'react'
import './Nav.css'

function Nav() {
    // logo kk banner kazhijumbo background color varuthn

    const [show,handleshow] = useState(false)

    useEffect(()=>{
        // to check events happen or not
        window.addEventListener('scroll',()=>{
            if(window.scrollY>300){
                handleshow(true)
            }
            else{
                handleshow(false)
            }
        })

    } ,[])
    console.log(show);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <img
        className='logo'
        src='https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png'
        />
    </div>
  )
}

export default Nav
