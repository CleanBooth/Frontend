import { useState, useParams, useEffect } from 'react';

import img1 from'./Frame 82.png'
function CleanApplicationProduct(){
    const [itemName, setItemName] = useState(""); // 제품명
    const [endDate, setEndDate] = useState(""); // 종료 날짜
    const [content, setContent] = useState(""); // 제품 설명
    const [isTesing, setIsTesing] = useState(false); // 테스트 여부
    const [itemImage, setItemImage] = useState(""); // 제품 이미지 경로
    const [options, setOptions] =useState("");

    const { index } = useParams();
    useEffect(() => {
        fetch(`http://43.202.77.82:8080/tester/${index}`, { method: 'GET'})
            .then(response => response.json())
            .then(data => {
                setItemName(data.itemName);
                setEndDate(data.endDate);
                setContent(data.content);
                setItemImage(data.itemImage);
                setOptions(data.options);
                setIsTesing(data.isTesing);
                console.log(data)
        })
        .catch(error => {
            console.error(error);
        });
    }, []);
    return(
        <div className='application'>
            <button className='share_button'>
                <img src={img1} alt="Share Button" style={{ width: '30px', height: '30px' }} />
            </button>
            <div className='application_1'>
                <img src={itemImage} className="application_product_img"></img>
                <div>
                    <p className='recruitment_application'>{isTesing}</p>
                    <p className='name_application'>{itemName}</p>
                    <p className='composition_application'>{content}</p>
                    <p className='year_application'>{endDate}</p>
                </div>
            </div>
        </div>
    )
}

export default CleanApplicationProduct