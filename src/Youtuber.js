import styled from "styled-components";
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const Blogdesign= styled.div`
    .chevron{
        width: 8px;
        height: 13px;
        margin: 17px 20px;
        display:flex;
        align-items: center;
    }
    .thumbnailimage{
        width: 740px;
        height: 332px;
        display:flex;
        justify-content: center;
        align-items: center;
        margin: 15px auto;
    }
    
    .blogall{
        display: flex;
        align-content: center;
        margin: 20px 150px;
    }
    .blogimage{
        width: 44px;
        height: 36px;
        
    }
    .link{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 240px;
        border-bottom: '2px solid black', 
        marginTop: '4px'
    }

`
const DashedText = styled.div`
    margin-bottom: 40px;
    .dash{
        border: 1px dashed #009F50;
        flex: auto;
    }
    .dashedhr{
        margin-top:200px;
        display: flex;
        align-items:center;
    }
    .txt{
        padding: 0 10px;
        font-weight: bold;
        font-size: 15pt;
    }
`
const Recipebox=styled.div`
    .recipeblock{
        display: flex;
        align-content: center;
        justify-content: center;
        margin-top:50px;

    }
    .recipeimage{
        width:872px;
        height:200px;  
    }
   
    .line{
        border: 1px solid #E6E6E6;
        flex: auto; 
        margin-top:100px;
    }
   
    
`

function Youtuber(){
    const [ywriter,setYwriter]=useState([]);
    
    useEffect(()=>{
        fetch(`http://43.202.77.82:8080/recipe`,{method:"GET"})
        .then(res=>res.json())
        .then(data=>{
            setYwriter(data.ywriter);
        })
    })

    const names=[
        {   id:1,
            bloger:'하우매니',
            recipename:'ooo',
            postname:'ooo',
            profil:require('./images/Rectangle 204.png'),
            thumbnail:require('./images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        },
        {   id:2,
            bloger:'하우매니',
            recipename:'룰루랄라',
            postname:'무야호',
            profil:require('./images/Rectangle 204.png'),
            thumbnail:require('./images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        },
        {   id:3,
            bloger:'하우매니',
            recipename:'룰루랄라',
            postname:'무야호',
            profil:require('./images/Rectangle 204.png'),
            thumbnail:require('./images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        },
        {   id:4,
            bloger:'하우매니',
            recipename:'룰루랄라',
            postname:'무야호',
            profil:require('./images/Rectangle 204.png'),
            thumbnail:require('./images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        },
        {   id:5,
            bloger:'하우매니',
            recipename:'룰루랄라',
            postname:'무야호',
            profil:require('./images/Rectangle 204.png'),
            thumbnail:require('./images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        },
        {   id:6,
            bloger:'하우매니',
            recipename:'룰루랄라',
            postname:'무야호',
            profil:require('./images/Rectangle 204.png'),
            thumbnail:require('./images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        },
        {   id:7,
            bloger:'하우매니',
            recipename:'룰루랄라',
            postname:'무야호',
            profil:require('./images/Rectangle 204.png'),
            thumbnail:require('./images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        }
    ];

    //useParams 사용
    const {id} = useParams();

    //문자를 숫자로 변환
    const blogData = names[parseInt(id)-1];

    // 한 행에 6개씩 나눠서 저장하는 배열
    const groupedparts=[];
    
    for (let j = 0; j < blogData.parts.length; j += 6) {
        const group = blogData.parts.slice(j, j + 6);
        groupedparts.push(group);
    }

    return(
        <div>
            <Blogdesign>
                <div className="blogall">
                    <p style={{fontSize:'14px'}}>클린 추천 레시피 with 푸드 유튜버</p>
                    <img  className="chevron" src={require("./images/chevron.right.png")}></img>
                    <span style={{fontSize:'14px', color:'#009F50',display: 'flex', alignItems: 'center'}}>{blogData.bloger}</span>
                </div>

                <div>
                    <img className="blogprofil"src={blogData.profil}></img>
                    <p>{blogData.bloger}</p>
                    <p>소개글. 유튜버에 대한 소개글이 들어가는 칸.
                        유튜버에 대한 소개글이 들어가는 칸.</p>
                </div>
                
                <div className="link">
                    <label>
                        <a href={blogData.linkurl} target='_blank'style={{margin:'8px', textDecoration:'none', color:'black'}}>더 자세히 보기</a>
                        <img style={{width:'14px',height:'14px'}}src={require("./images/arrow.up.right.png")}alt="화살표 이미지"></img>
                        <div style={{ width: '100%', borderBottom: '2px solid black', marginTop: '4px' }}></div>
         
                    </label>
                </div>
                <DashedText>
                <div className='dashedhr'>
                    <hr className='dash'/>
                    <span class='txt'>레시피 리스트</span>
                    <hr className='dash'/>
                </div>
                </DashedText>

                {   //Recipe라는 함수에 데이터 변수전달
                blogData.parts.map((recipe,i)=>(
                    <div>
                        <Recipebox>
                            <div className="recipeblock">
                                <img className='recipeimage'src={require("./images/Rectangle 207.png")}></img>  
                            </div>
                            <p style={{textAlign:'left',marginLeft:'14%'}}>제목</p>
                            <hr className="line"></hr>
                        </Recipebox>
                    </div>
                ))
                }
            </Blogdesign>

        </div>
    );
}
export default Youtuber;
