import './Landing.scss'
import React from 'react'
import ComingSoonLarge from '../assets/ComingSoon-large.svg'
import ComingSoonSmall from '../assets/ComingSoon-small.svg'
import {ReactComponent as Logo} from '../assets/Logo-medzzy.svg'
import GooglePlay from '../assets/GooglePlay.svg'
import IosPlay from '../assets/ios_store.svg'

const Landing = () => {
  return (
    <div className='wrapper' >
        <div className='content'>
            <Logo className='logo'/>
            <img src={ComingSoonLarge} alt="" className='coming-soon-large'/>
            <img src={ComingSoonSmall} alt="" className='coming-soon-small'/>
            <div className='description'>
                <div className='desc-top'>
                    Medicine delivery made easy, and empowering
                </div>
                <div className='desc-bottom'>
                    pharmacies to serve people as much as possible.
                </div>
            </div>
            <div className="form">
                <form action="https://formkeep.com/f/2e3976f204ea" accept-charset="UTF-8" enctype="multipart/form-data" method="POST">
                    <input type="text" placeholder='Your email address' name='email'/>
                    <button>Notify Me</button>
                </form>
            </div>
            <div className="footer">
                <img src={GooglePlay} alt="" className='google'/>
                <img src={IosPlay} alt="" className='apple'/>
            </div>
        </div>
    </div>
  )
}

export default Landing