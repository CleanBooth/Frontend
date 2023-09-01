import "./NutritionSearch.css"
import Header from "../공통/Header";
import Gnb from "../공통/Gnb";
import Footer from "../공통/Footer";
import { useState, useEffect } from 'react';
import prooductImage from '../사진/product.jpg'
import heart from '../사진/heart.jpg'
import redheart from '../사진/redheart.jpg'
import { Link } from 'react-router-dom';

function NutritionSearch() {
    const data = [
        { 
            id:1,
            category: '비건',
            items: [
                { id: 11, name: '식물성 단백질' },
                { id: 12, name: '아몬드' },
                { id: 13, name: '귀리' },
                { id: 14, name: '코코넛' },
                { id: 15, name: '치아씨드' },
                { id: 16, name:'렌팅콩' },
                { id: 17, name:'병아리콩' },
                { id: 18, name:'퀴노아' },
                { id: 19, name:'템페' },
                { id: 20 ,name:'오트밀'},
            ]
        },
        {
            id:2,
            category: '다이어트',
             items: [
                { id: 21, name: '고단백/저탄수화물' },
                { id: 22, name: '저칼로리' },
                { id: 23, name: '저나트륨' },
                { id: 24, name: '무설탕' },
                { id: 25, name: '천연감미료' },
                { id: 26, name:'글루텐프리' },
                { id: 27, name:'운동보충제' },
          ],
        },
      ];
// 가상의 상품 데이터 (예시)

const [totalCount, setTotalCount] = useState(1);
const [item, setItem] = useState([
    {
        name: '',
        brandName: '',
        rating: 0,
        reviewCount:0,
        isLiked:false,
        image:''
    }
])
//하트
const [heartedProducts, setHeartedProducts] = useState([]);
const handleHeartClick = (productId) => {
    setHeartedProducts((prevHeartedProducts) =>
        prevHeartedProducts.includes(productId)
            ? prevHeartedProducts.filter((id) => id !== productId)
            : [...prevHeartedProducts, productId]
    );
};
//분류
let [PDetail, PD] = useState(['비건', '식물성단백질', 'Rectangle 179', '브랜드명', '제품명']);


const [category, setCategory] =useState("")
const handleItemClick = (itemId)=> {
    fetch(`http://43.202.77.82:8080/items/nutrient/${itemId}/1/`, { method: 'GET'})
        .then(response => response.json())
        .then(data => {
            setCategory(data.category)   
            console.log(category)         
    })
    .catch(error => {
        console.error(error);
    });
}
const [itemId,setItemId] = useState();
 const [sortType, setSortType] = useState(1);
const handleSortClick = (itemId,type) => {
    setSortType(type);

    fetch(`http://43.202.77.82:8080/items/nutrient/${itemId}/${type}/`, { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        setItem(data);
      })
      .catch(error => {
        console.error(error);
      });
  };
    return(
        <div className="background">
            <div className="background_long_round">
                <Header/>
                <div className="bigBox">
                    <Gnb/>
                    <hr className='nutrition-search-hr'/>
                    <div className="nutrition-search">

                    <div className='category'>
                        <a className='ctgr' href=''>영양성분검색</a>
                        <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
    
                        
                        <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
                        <a className='ctgr' href='' >{category}</a>
                    </div>

                    <p className="nutrition-search-title">영양성분 카테고리</p>
                    <div className="nutrition-search-category">
                    <ul className="ul1">
                    {data.map((categoryData, index) => (
                        <li key={index}>
                            <a href="" className="category-a">{categoryData.category}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ㅣ</a>
                            <ul className={`ul${index + 2}`}>
                            {categoryData.items.map((item) => (
                                <li key={item.id}>
                                <Link to={{ pathname: `/menu/2/${item.id}` }} className= "item-a"onClick={() => handleItemClick(item.id)}>
                                {item.name}
                            </Link>
                            </li>
                            ))}
                            </ul>
                        </li>
                    ))}
                    </ul>
                    </div>
                    <div className='search-result'>
                        <p className='search-result-p'>검색 결과 총 N건</p>
                    </div>
                    <div className='pricesort'>
                        <div button className='login' onClick={() => handleSortClick(1)}> 추천순 &nbsp; </div>
                        <span className='divider'> | &nbsp; </span>
                        <div button className='sign-up' onClick={() => handleSortClick(2)}> 낮은 가격순 &nbsp; </div>
                        <span className='divider'>  | &nbsp; </span>
                        <div button className='customer_center' onClick={() => handleSortClick(3)}> 높은 가격순 </div>
                    </div>

                <div className="product-grid">
                    {item.map((product) => (
                        <div key={product.id} className="product-item">
                            <div className="product-image-container">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-image" />
                                <img
                                    src={heartedProducts.includes(product.id) ? redheart : heart}
                                    alt="Heart"
                                    className="heart-image"
                                    onClick={() => handleHeartClick(product.id)}
                                />
                            </div>

                        <div className="product-info">
                            <p className="brand">{product.brand}</p>
                            <p className="name">{product.name}</p>
                            <div className="rating-container">
                                <p className="rating">{product.rating}</p>
                            </div>
                            <p className='reviewCount'>{product.reviewCount}</p>
                        </div>
                    </div>
                ))}
                </div>
                </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default NutritionSearch;