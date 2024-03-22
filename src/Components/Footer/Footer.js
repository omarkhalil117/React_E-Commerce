import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faTwitter , faLinkedin , faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="footer">
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <ul className="social-icon">
      <li className="social-icon__item"><a class="social-icon__link" href="#">
        <FontAwesomeIcon icon={faFacebook}/>
        </a></li>
      <li className="social-icon__item"><a class="social-icon__link" href="#">
        <FontAwesomeIcon icon={faTwitter}/>
        </a></li>
      <li className="social-icon__item"><a class="social-icon__link" href="#">
        <FontAwesomeIcon icon={faLinkedin}/>
        </a></li>
      <li className="social-icon__item"><a class="social-icon__link" href="#">
        <FontAwesomeIcon icon={faInstagram}/>
        </a></li>
    </ul>
    <ul className="menu">
      <li className="menu__item"><a class="menu__link" href="#">Home</a></li>
      <li className="menu__item"><a class="menu__link" href="#">About</a></li>
      <li className="menu__item"><a class="menu__link" href="#">Services</a></li>
      <li className="menu__item"><a class="menu__link" href="#">Team</a></li>
      <li className="menu__item"><a class="menu__link" href="#">Contact</a></li>

    </ul>
  </footer>
  )
}

export default Footer