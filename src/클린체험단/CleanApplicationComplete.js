import React from 'react';
import Header from '../공통/Header.js';
import LoginHeader from '../공통/LoginHeader.js';
import Footer from '../공통/Footer.js';
import Gnb from '../공통/Gnb.js';
import './CleanApplicationComplete.css';
import img1 from '../사진/Vector.png'
import { Link } from 'react-router-dom';



const CleanApplicationComplete = () => {
    return(
        <div className='background'>
            <div className='background_short_round'>
            <LoginHeader/>
            <div className='bigBox'>
                <Gnb/>
                <hr/>
                <div className='complete'>
                    <img src={img1} className="check"></img>
                    <p>클린 체험단 신청이 완료되었습니다</p>
                    <div>
                        <Link to = '/'><button className='complete_move'> 메인화면으로 이동하기 </button></Link>
                        <p></p>
                        <button className='complete_check'> 신청 내역 확인하기 </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </div>

    )
}

export default CleanApplicationComplete;