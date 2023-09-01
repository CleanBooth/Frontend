import React, {useState, useEffect}from 'react';
import { useParams } from 'react-router-dom';
import LoginHeader from '../공통/LoginHeader.js';
import Footer from '../공통/Footer.js';
import Gnb from '../공통/Gnb.js';
import "./CleanExperienceProduct.css"
import img1 from'../사진/Rectangle 213.png';
import img2 from'../사진/배송.png';
import img3 from'../사진/Frame 279.png';
import { Link,useLocation } from 'react-router-dom';
import img4 from "./Frame 82.png"
function CleanExperienceProduct  () {

    const location = useLocation();

    const { index } = useParams();

    const [itemName, setItemName] = useState(""); // 제품명
    const [endDate, setEndDate] = useState(""); // 종료 날짜
    const [content, setContent] = useState(""); // 제품 설명
    const [isTesting, setIsTesting] = useState(true); // 테스트 여부
    const [itemImage, setItemImage] = useState(""); // 제품 이미지 경로
    const [detailImage, setDetailImage] = useState(""); // 상세 이미지 경로
    
    useEffect(() => {
        fetch(`http://43.202.77.82:8080/tester/${(index)}`, { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                setItemName(data.itemName);
                setEndDate(data.endDate);
                setContent(data.content);
                setItemImage(data.itemImage);
                setDetailImage(data.detailImage);
                setIsTesting(data.isTesting);
                console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
    },[index]);// id가 변경될 때마다 useEffect가 실행됨
    return(
        <div className='background'>
            <div className='background_long_round'>
            <LoginHeader/>
            <div className='bigBox'>
                <Gnb/>
                <hr/>
                <div>
                <p className='application_clean'> 클린 체험단 신청하기 </p>
                <div className='experience_product'>
                        <img src={itemImage} className="experience_product_img"></img>
                        <div>
                        <p className="recruitment_experience"> {isTesting ? "모집중" : "모집종료"}</p>
                        <p className="name_experience"> {itemName}</p>
                        <p className="composition_experience">{content}</p>
                        <p className="year_experience">{endDate} </p>
                            <Link to={{ pathname: `/CleanApplication/${index}` }}> 
                                <button className="apply_button">신청하기</button>
                            </Link>
                        </div>
                        <div>
                            <button className='share_button'>
                                <img src={img4} alt="Share Button" style={{ width: '30px', height: '30px' }} />
                            </button>
                        </div>
                    </div>
                </div>
            <div className='middleBox'>
                <div>
                    <div className ="hr-sect"> ABOUT 클린체험단 </div> 
                    <img src={img3}></img>
                    <img src={img2} className="delivery_img"></img>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
        </div>
    );
};

export default CleanExperienceProduct;