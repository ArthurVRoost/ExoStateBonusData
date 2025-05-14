import { useState } from 'react'
import './header.css'
import Logo from '../../assets/images/logo.svg'
export default function Header() {
    return(
        <>
        <div className='divHeader'>
            <div className='headerDiv1'>
                <p className='headerP1'>My Balance</p>
                <p className='headerP2'>$921.48</p>
            </div>
            <div className='headerDiv2'>
                <img className='headerImg' src={Logo} alt="" />
            </div>
        </div>
        </>
    )
}