import { faArrowCircleUp, faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { BackTop } from 'antd';

const AppFooter: React.FC= () => {
  return (
    <div className="container-fluid">
        <div className="footer">
            <div className="logo">
                <FontAwesomeIcon icon={faBolt} />
                <a href="https://github.com/nishant2106" rel="noreferrer" target="_blank">Tech</a>
            </div>
        </div>
        <ul className="socials">
        <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2020 Tech</div>
        <BackTop>
      <div className="goTop"><FontAwesomeIcon color='blue' icon={faArrowCircleUp}/></div>
    </BackTop>

    </div>
  )
}

export default AppFooter;