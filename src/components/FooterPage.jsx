import React from 'react'
import { useLocation } from 'react-router-dom';

const FooterPage = () => {
    const location = useLocation();
    const path = location.pathname;
    // console.log(path);
    
    if (window.location.pathname === `${path}`) return null;

    return (
        <footer>
            <div className="footer_nav">
                <ul>
                    <li><a href="#">윤리경영</a></li>
                    <li><a href="#">인재채용</a></li>
                    <li><a href="#">사이트맵</a></li>
                    <li><a href="#">관련사이트</a></li>
                    <li><a href="#">법적고지</a></li>
                    <li><a href="#">개인정보 처리방침</a></li>
                </ul>
            </div>

            <div className="footer_sns">
                <p className="licence">© 2023 코런티어, All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default FooterPage