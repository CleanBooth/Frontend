import React,{useEffect,useState} from 'react';
import LoginHeader from '../공통/LoginHeader.js';
import Footer from '../공통/Footer.js';
import Gnb from '../공통/Gnb.js';
import './CleanExperience.css';
import img1 from'../사진/Rectangle 213.png';
import img2 from'../사진/배송.png';
import img3 from'../사진/Frame 279.png';
import { Link } from 'react-router-dom';


const CleanExperience = () => {

  const [itemName, setItemName] = useState(""); // 제품명
  const [itemImage, setItemImage] = useState(""); // 제품 이미지 경로
  const [endDate, setEndDate] = useState(""); // 종료 날짜
  const [isTesing, setIsTesing] = useState(false); // 테스트 여부
  const[index,setIndex] =useState(0);
  const [cleanExperienceData, setCleanExperienceData] = useState([]);

  useEffect(() => {
    fetch('http://43.202.77.82:8080/tester', { method: 'GET'})
        .then(response => response.json())
        .then(data => {
          setCleanExperienceData(data);
        })
    .catch(error => {
        console.error(error);
    });
}, []);
    return(
        <div className='background'>
            <div className='background_long_round'>
            <LoginHeader/>
            <div className='bigBox'>
            <Gnb/>
            <hr/>
            <div className='middleBox'>
                <h2 className='title_4'>클린 체험단</h2>
                <div className='content'>
                    <p className='content_1'> 클린체험단을 통해 미리 먹어보고 주문하세요!</p>
                    <p className='content_2'> 비건 식품을 먹어보고 싶은데, 생소한 맛일까봐 걱정인분들 <br/>
                    실패없이 다이어트 제품 구매하고 싶은데, 대용량 사이즈와 가격이 부담되시는 분들 <br/>
                    좋은 제품을 많이 소개받고, 체험하시고 싶은 분들 <br/>
                    좋은 후기 글을 자신일게! 작성할 수 있는 분들!</p>
                </div>
                <div>
                    <div className ="hr-sect"> ABOUT 클린체험단 </div> 
                    <img src={img3}></img>
                    <img src={img2} className="delivery_img"></img>
                </div>
                <div>
                <ul className="clean_product_ul">
                  {cleanExperienceData.map((product,index) => (
                    <li key={product.id}>
                    
                    <img src={product.itemImage} className={`product_${index + 1}`} />
                    <p className="isTesting">{product.isTesing ? '모집중':'모집완료' }</p>
                    <p className="itemName">{product.itemName}</p>
                    <p className="year">{product.endDate}</p>
                  <Link to={{
                    pathname:  `/CleanExperienceProduct/${index+1}`,
                    state: { product, index },
                  }}>
                    <button>{product.isTesing ? "신청하기" : "마감되었습니다"}</button>
                  </Link>
                </li>
                ))}
              </ul>
            </div>
            </div>
        </div>
        <Footer/>
        </div>
        </div>
    );
};

export default CleanExperience;