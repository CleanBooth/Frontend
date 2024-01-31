
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import EditModal from "./EditModal";
import "./Main.css";
import Nav from "react-bootstrap/Nav";
import List from "../list";
import React, { useState, useEffect } from "react";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import LogoutModal from "./LogoutModal";
import WithdrawModal from "./WithdrawModal";
import Review from "./Review";
import axios from "axios";

function SideButton({ opacity }) {
  const MoveToTop = () => {
      // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  return (
      <div className="GotoTop">
          {/* 이미지를 버튼의 배경 이미지로 설정하고, 버튼을 클릭하면 MoveToTop 함수가 호출됩니다. */}
          <button className="gotoTopBtn" onClick={MoveToTop}>
              <img src="arrowup.jpg" alt="Scroll to Top" />
          </button>
      </div>
  )
}



function TabContent(props) {
  //클린래시피 모달
  const [selectedTab, setSelectedTab] = useState("preuser-app"); // 초기값 설정

  //로그아웃 모달
  const [showModal, setShowModal] = useState(false);
  //탈퇴 모달
  const [showWithdrawModal, setWithdrawShowModal] = useState(false);

  //리뷰작성하기 버튼모달
  const [writereviewModal, setWritereviewModal] = useState(false);

  const openModal = () => {
    console.log("openModal called");
    setShowModal(true);
    console.log("showModal:", showModal);
  };

  const openWithdrawModal = () => {
    setWithdrawShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setWithdrawShowModal(false);
  };

  const handleLogout = () => {
    // Perform your logout logic here
    // For example: clear authentication token, redirect to login, etc.
    closeModal(); // Close the modal after successful logout
  };

  //수정모달부분
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const closeeditModal = () => {
    setEditModal(false);
  };

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]); //컨디마 컨디업

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    //클린된 횟수 사용할 변수
    // fetch('http://52.78.63.175:8000/movie', {
    //   method: 'POST',
    //   Headers: {
    //     Authroization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
    //   },
    //   body: JSON.stringify({
    //     movie_id:1
    //     star: score,
    //   }),
    // });
  };
  let [editmodal, setEditModal] = useState(false);

  //리뷰관련변수
  let [name, setName] = useState(["000"]);
  let [age, setAge] = useState(["20"]);
  let [star, setStar] = useState([]);
  //score가 저장되어야함
  let [good, setGood] = useState(["좋았던 점 내용"]);
  let [bad, setBad] = useState(["아쉬웠던 점 내용"]);
  let [photo, setPhoto] = useState(["메인사진"]);

  const [writer, setWriter] = useState({
       
    
    
        item: {
           itemId: null,
           name: "",
           brandName: "",
           image: "",
        }
    
 
     });

  const [writer2, setWriter2] = useState({
       
    

      
          Recipe: {
             recipeId: null,
             name: "",
             image: "",
          }
      
   
      

   });

   const [writer3, setWriter3] = useState({
           ApplyHistory: {
              itemName: "",
              isTesting: false,
              endDate: "",
              image: "",
          },
      
          WinHistory: {
              itemName: "",
              isTesting: false,
              endDate: "",
              image: "",
              hasReviewed: false,
          }
      
   });

   
     const url = "http://43.200.208.235:8080/mypage/wish-item";
   
     useEffect(()=>{
         axios
             .get(url)
             .then((res) => {
                 setWriter({
                  
    
        item: {
           itemId: res.data.itemId,
           name: res.data.name,
           brandName: res.data.brandName,
           image: res.data.image
        }
    
                   });
                 
                 console.log("성공");
             })
             .catch((Error) => {
                 console.log(Error);
             }) 
     }) 


     const url2 = "http://43.200.208.235:8080/mypage/wish-recipe";

     useEffect(()=>{
      axios
          .get(url2)
          .then((res) => {
              setWriter2({
               
 
                Recipe: {
                  recipeId: res.data.recipeId,
                  name: res.data.name,
                  image: res.data.image,
               }
 
                });
              
              console.log("성공");
          })
          .catch((Error) => {
              console.log(Error);
          }) 
     }) 

     const url3 = "http://43.200.208.235:8080/mypage/tester-history";

     useEffect(()=>{
      axios
          .get(url3)
          .then((res) => {
              setWriter3({
               
                ApplyHistory: {
                  itemName: res.data.itemName,
                  isTesting: res.data.isTesting,
                  endDate: res.data.endDate,
                  image: res.data.image,
              },
          
              WinHistory: {
                  itemName: res.data.itemName,
                  isTesting: res.data.isTesting,
                  endDate: res.data.endDate,
                  image: res.data.image,
                  hasReviewed: res.data.hasReviewed,
              }
                
                });
              
              console.log("성공");
          })
          .catch((Error) => {
              console.log(Error);
          }) 
     }) 

 

  if (props.탭 == 0) {
    
    return (
      <div>
        <div className="pre-container0">
          <h2>
            찜한 상품 총{" "}
            <span className="highlighted-number">
              {props.products.filter((product) => !product.deleted).length}
            </span>
            개
          </h2>
          <hr />
        </div>
        <div>
          {props.products.map(
            (product) =>
              !product.deleted && (
                <div className="product" key={product.id}>
                  <img
                    src={product.image}
                    alt="찜한 상품 이미지"
                    className="jjim-product-image"
                  />
                  <div className="product-info">
                    <p className="product-brand">{product.brandName}</p>
                    <p className="product-name">&nbsp;{product.name}</p>
                  </div>
                  <button
                    className="delete-button"
                    onClick={() => props.handleDelete0(product.id)}
                  >
                    x 삭제하기
                  </button>
                </div>
              )
          )}
        </div>
      </div>
    );
  } else if (props.탭 == 1) {
    return (
      <div>
        <div className="pre-container1">
          <h2>
            찜한 레시피 총{" "}
            <span className="highlighted-number">
              {props.recipes.filter((recipe) => !recipe.deleted).length}
            </span>
            개
          </h2>
          <hr />
        </div>
        <div>
          {props.recipes.map(
            (recipe) =>
              !recipe.deleted && (
                <div className="recipe" key={recipe.id}>
                  <img
                    src={recipe.image}
                    alt="찜한 상품 이미지"
                    className="jjim-product-image"
                  />
                  <div className="recipe-info">
                    <p className="recipe-name">{recipe.name}</p>
                  </div>
                  <button
                    className="delete-button"
                    onClick={() => props.handleDelete1(recipe.id)}
                  >
                    x 삭제하기
                  </button>
                </div>
              )
          )}
        </div>
      </div>
    );
  } else if (props.탭 == 2) {
    const handleTabChange = (eventKey) => {
      setSelectedTab(eventKey);
    };

    //클린 체험단 > 신청내역
    const images = [
      {
        src: writer3.ApplyHistory.image,
        progress: writer3.ApplyHistory.isTesting,
        title: writer3.ApplyHistory.itemName,
        deadline: writer3.ApplyHistory.endDate,
      },
      {
        src: writer3.ApplyHistory.image,
        progress: writer3.ApplyHistory.isTesting,
        title: writer3.ApplyHistory.itemName,
        deadline: writer3.ApplyHistory.endDate,
      },
      {
        src: writer3.ApplyHistory.image,
        progress: writer3.ApplyHistory.isTesting,
        title: writer3.ApplyHistory.itemName,
        deadline: writer3.ApplyHistory.endDate,
      },
      {
        src: writer3.ApplyHistory.image,
        progress: writer3.ApplyHistory.isTesting,
        title: writer3.ApplyHistory.itemName,
        deadline: writer3.ApplyHistory.endDate,
      },
    ];

    //클린 체험단 > 당첨 내역
    const images2 = [
      {
        src: writer3.WinHistory.image,
        progress: writer3.WinHistory.isTesting,
        title: writer3.WinHistory.itemName,
        deadline: writer3.WinHistory.endDate,
        reviewYN: writer3.WinHistory.hasReviewed,
      },
      {
        src: writer3.WinHistory.image,
        progress: writer3.WinHistory.isTesting,
        title: writer3.WinHistory.itemName,
        deadline: writer3.WinHistory.isTesting,
        reviewYN: writer3.WinHistory.hasReviewed,
      },
      {
        src: writer3.WinHistory.image,
        progress: writer3.WinHistory.isTesting,
        title: writer3.WinHistory.itemName,
        deadline: writer3.WinHistory.isTesting,
        reviewYN: writer3.WinHistory.hasReviewed,
      },
      {
        src: writer3.WinHistory.image,
        progress: writer3.WinHistory.isTesting,
        title: writer3.WinHistory.itemName,
        deadline: writer3.WinHistory.isTesting,
        reviewYN: writer3.WinHistory.hasReviewed,
      },
    ];
    //         if (images.reviewYN === '후기작성여부(미작성)') {
    //             setWritereviewModal(true);
    // }

    return (
      <div>
        <div className="pre-container">
          <h2>클린 체험단</h2>

          <div>
            <Nav
              variant="pills"
              defaultActiveKey="preuser-app"
              className="preuser-nav"
              activeKey={selectedTab}
              onSelect={handleTabChange}
            >
              <Nav.Item>
                <Nav.Link eventKey="preuser-app" className="preuser-link">
                  신청 내역
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="preuser-win" className="preuser-link">
                  당첨 내역
                </Nav.Link>
              </Nav.Item>
            </Nav>
            {selectedTab === "preuser-app" && (
              <div className="image-grid">
                {images.map((image, index) => (
                  <div className="image-item" key={index}>
                    <img src={image.src} alt={`Image ${index}`} />
                    <div className="image-details">
                      <p className="process1">{image.progress}</p>
                      <p className="imgtitle1">{image.title}</p>
                      <p className="imgdeadline1">{`${image.deadline}`}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === "preuser-win" && (
              <div className="image-grid2">
                {images2.map((image, index) => (
                  <div className="image-item2" key={index}>
                    <img src={image.src} alt={`Image ${index}`} />
                    <div className="image-details2">
                      <p className="process2">{image.progress}</p>
                      <p className="imgtitle2">{image.title}</p>
                      <p className="imgdeadline2">{` ${image.deadline}`}</p>
                      <p className="ReviewYN">{image.reviewYN}</p>

                      {/* {writereviewModal === true && <WriteReview />} */}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else if (props.탭 == 3) {
    return (
      <div>
        <div className="pre-container3">
          <h2>
            내가 쓴 후기 총{" "}
            <span className="highlighted-number">
              {props.reviews.filter((review) => !review.deleted).length}
            </span>
            개
          </h2>
          <hr />

          <div>
            {props.reviews.map(
              (review) =>
                !review.deleted && (
                  <Review review={review} props={props}  />
                )
            )}
          </div>
        </div>
      </div>
    );
  } else if (props.탭 == 5) {
    return (
      <div className="pre-container5">
        <h2>서비스 이용 약관</h2>
        <hr />
        <pre className="pre-content5">
          아래 내용은 더미 텍스트입니다! 제1장 총칙 제1조 (목적) 본 약관은
          클린부스㈜(이하 회사라 한다)와 교보문고 계열사가 제공하는 오프라인
          매장 및 온라인상의 인터넷 서비스 (이하 서비스라 하며, 접속 가능한
          유·무선 단말기의 종류와는 상관없이 이용 가능한 회사가 제공하는 모든
          서비스를 의미합니다)를 이용함에 있어서 회사와 이용자의 권리, 의무,
          책임 사항 및 서비스 이용절차 등에 관한 사항을 규정함을 목적으로
          합니다. ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에
          반하지 않는 한 이 약관을 준용합니다」 제2조 (정의) 이 약관에서
          사용하는 용어의 정의는 다음과 같습니다. 1. 회사란 교보문고(주)를
          의미하며, 교보문고(주)가 재화 또는 용역을 이용자에게 제공하기 위하여
          운영하는 오프라인 매장 및 컴퓨터 등 정보통신설비(인터넷, 전화 등)를
          이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의 매장을 말하며
          아울러 오프라인 매장과 사이버몰을 운영하는 사업자의 의미로도
          사용합니다. 2. 이용자란 매장에 방문하거나 사이트에 접속하여 이 약관에
          따라 회사가 제공하는 정보 및 기타 서비스를 제공받는 회원 및 비회원을
          말합니다. 3. 회원이라 함은 교보북클럽 서비스 혜택적용을 위해 회사에
          개인정보를 제공하여 회원등록을 한 자로서, 계속적으로 회사가 제공하는
          서비스를 이용할 수 있는 자를 말하며 아래와 같이 구분될 수 있습니다. ①
          일반회원 : 상품구매 및 구매와 관련하여 제공되는 서비스를 이용할 수
          있는 만 14세 이상의 일반회원 ② 어린이회원 : 보호자의 동의를 얻어
          가입한 만 14세 미만의 회원 ③ 법인회원 : 사업자 정보로 가입한 회원 ④
          해외거주회원 : 해외거주 주소로 가입한 회원 4. 교보북클럽 서비스란
          당사와 교보문고 계열사 및 제휴사가 회원에게 제공하는 회원등급 산정,
          마일리지 및 통합포인트 적립, 사용, 할인, 이벤트 참여 등의 전반적인
          고객 서비스 프로그램을 말하며 구체적인 내용은 당사와 교보문고 계열사
          또는 제휴사와의 관계 및 당사 정책에 의해 달라질 수 있습니다. 5.
          교보문고 계열사란 당사와 교보북클럽 서비스 운영과 관련하여 위탁 운영
          계약을 맺고 교보북클럽 서비스를 동시 제공하는 회사를 말합니다.*
          교보북클럽 서비스 제공사 : 교보라이프플래닛생명보험㈜ 6. 아이디(ID)라
          함은 회원의 식별과 서비스이용을 위하여 회원이 정하고 회사가 승인하는
          문자 또는 숫자의 조합을 의미합니다. 7. 비회원이라 함은 회원에 가입하지
          않고 회사가 제공하는 서비스를 이용하는 자를 말합니다. 8.
          간편가입회원이라 함은 회원가입시 본인인증(실명인증)을 받지 않고
          필수정보만 입력하여 회사가 제공하는 서비스를 이용하는 자를 말합니다.
          9. 비밀번호라 함은 이용자의 동일성 확인과 이용자의 권익 및 비밀보호를
          위해 이용자 스스로가 설정하여 등록한 문자, 숫자, 특수문자의 조합을
          의미합니다. 10. 디지털상품이라 함은 동영상, eBook, e러닝, 음원과 같이
          VOD, 스트리밍, 다운로드 등의 형태로 제공되는 무배송 상품을 말합니다.
          11. 게시물이라 함은 이용자가 서비스를 이용함에 있어 서비스 상에 게시한
          부호·문자·음성·음향·화상·동영상 등 정보 형태의 글, 사진, 동영상 및
          각종 파일과 링크 등을 의미합니다. 12. 본 조에 정의되지 않은 용어는
          일반적인 상관례에 따릅니다.
        </pre>
      </div>
    );
  } else if (props.탭 == 6) {
    return (
      <div className="pre-container6">
        <h2>개인정보처리 방침</h2>
        <hr />
        <pre className="pre-content6">
          아래 내용은 더미 텍스트입니다! 제1장 총칙 제1조 (목적) 본 약관은
          클린부스㈜(이하 회사라 한다)와 교보문고 계열사가 제공하는 오프라인
          매장 및 온라인상의 인터넷 서비스 (이하 서비스라 하며, 접속 가능한
          유·무선 단말기의 종류와는 상관없이 이용 가능한 회사가 제공하는 모든
          서비스를 의미합니다)를 이용함에 있어서 회사와 이용자의 권리, 의무,
          책임 사항 및 서비스 이용절차 등에 관한 사항을 규정함을 목적으로
          합니다. ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에
          반하지 않는 한 이 약관을 준용합니다」 제2조 (정의) 이 약관에서
          사용하는 용어의 정의는 다음과 같습니다. 1. 회사란 교보문고(주)를
          의미하며, 교보문고(주)가 재화 또는 용역을 이용자에게 제공하기 위하여
          운영하는 오프라인 매장 및 컴퓨터 등 정보통신설비(인터넷, 전화 등)를
          이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의 매장을 말하며
          아울러 오프라인 매장과 사이버몰을 운영하는 사업자의 의미로도
          사용합니다. 2. 이용자란 매장에 방문하거나 사이트에 접속하여 이 약관에
          따라 회사가 제공하는 정보 및 기타 서비스를 제공받는 회원 및 비회원을
          말합니다. 3. 회원이라 함은 교보북클럽 서비스 혜택적용을 위해 회사에
          개인정보를 제공하여 회원등록을 한 자로서, 계속적으로 회사가 제공하는
          서비스를 이용할 수 있는 자를 말하며 아래와 같이 구분될 수 있습니다. ①
          일반회원 : 상품구매 및 구매와 관련하여 제공되는 서비스를 이용할 수
          있는 만 14세 이상의 일반회원 ② 어린이회원 : 보호자의 동의를 얻어
          가입한 만 14세 미만의 회원 ③ 법인회원 : 사업자 정보로 가입한 회원 ④
          해외거주회원 : 해외거주 주소로 가입한 회원 4. 교보북클럽 서비스란
          당사와 교보문고 계열사 및 제휴사가 회원에게 제공하는 회원등급 산정,
          마일리지 및 통합포인트 적립, 사용, 할인, 이벤트 참여 등의 전반적인
          고객 서비스 프로그램을 말하며 구체적인 내용은 당사와 교보문고 계열사
          또는 제휴사와의 관계 및 당사 정책에 의해 달라질 수 있습니다. 5.
          교보문고 계열사란 당사와 교보북클럽 서비스 운영과 관련하여 위탁 운영
          계약을 맺고 교보북클럽 서비스를 동시 제공하는 회사를 말합니다.*
          교보북클럽 서비스 제공사 : 교보라이프플래닛생명보험㈜ 6. 아이디(ID)라
          함은 회원의 식별과 서비스이용을 위하여 회원이 정하고 회사가 승인하는
          문자 또는 숫자의 조합을 의미합니다. 7. 비회원이라 함은 회원에 가입하지
          않고 회사가 제공하는 서비스를 이용하는 자를 말합니다. 8.
          간편가입회원이라 함은 회원가입시 본인인증(실명인증)을 받지 않고
          필수정보만 입력하여 회사가 제공하는 서비스를 이용하는 자를 말합니다.
          9. 비밀번호라 함은 이용자의 동일성 확인과 이용자의 권익 및 비밀보호를
          위해 이용자 스스로가 설정하여 등록한 문자, 숫자, 특수문자의 조합을
          의미합니다. 10. 디지털상품이라 함은 동영상, eBook, e러닝, 음원과 같이
          VOD, 스트리밍, 다운로드 등의 형태로 제공되는 무배송 상품을 말합니다.
          11. 게시물이라 함은 이용자가 서비스를 이용함에 있어 서비스 상에 게시한
          부호·문자·음성·음향·화상·동영상 등 정보 형태의 글, 사진, 동영상 및
          각종 파일과 링크 등을 의미합니다. 12. 본 조에 정의되지 않은 용어는
          일반적인 상관례에 따릅니다.
        </pre>
      </div>
    );
  } else if (props.탭 == 7) {
    return (
      <div>
        <div className="pre-container7">
          <h2>계정 관리</h2>
          <hr />
        </div>

        <div className="logincontainer">
          <p className="loginp">로그인 방식</p>
          <img src="/naverimg.jpg" alt="Naver" />
          <button className="logout-button" onClick={openModal}>
            로그아웃
          </button>
          <button className="delete-account-button" onClick={openWithdrawModal}>
            탈퇴하기
          </button>
        </div>
        {showModal && (
          <LogoutModal closeModal={closeModal} handleLogout={handleLogout} />
        )}

        {showWithdrawModal && <WithdrawModal closeModal={closeModal} />}
      </div>
    );
  }
}


//수정모달
function Main(){
  // b-right-page변경하기위해 기본 스테이트
  let [탭, 탭변경] = useState(0);

  //클린체험단 스테이트
  let [tab, Settab] = useState(0);

  //찜한 상품들
  const [products, setProducts] = useState([
    { id: 1, brand: "브랜드명 1", name: "제품명 1", deleted: false },
    { id: 2, brand: "브랜드명 2", name: "제품명 2", deleted: false },
    { id: 3, brand: "브랜드명 3", name: "제품명 3", deleted: false },
    { id: 4, brand: "브랜드명 4", name: "제품명 4", deleted: false },
    { id: 5, brand: "브랜드명 5", name: "제품명 5", deleted: false },
  ]);

  //찜한 레시피들
  const [recipes, setRecipes] = useState([
    { id: 1, name: "제품명 1", deleted: false },
    { id: 2, name: "제품명 2", deleted: false },
    { id: 3, name: "제품명 3", deleted: false },
    { id: 4, name: "제품명 4", deleted: false },
    { id: 5, name: "제품명 5", deleted: false },
  ]);

  //내가 쓴 후기들
  const [reviews, setReviews] = useState([
    {
      id: 1,
      brand: "브랜드명 1",
      name: "제품명 1",
      rate: "별점1",
      pros: "좋았던 점1",
      cons: "아쉬웠던 점1",
      deleted: false,
    },
    {
      id: 2,
      brand: "브랜드명 2",
      name: "제품명 2",
      rate: "별점2",
      pros: "좋았던 점2",
      cons: "아쉬웠던 점2",
      deleted: false,
    },
    {
      id: 3,
      brand: "브랜드명 3",
      name: "제품명 3",
      rate: "별점3",
      pros: "좋았던 점3",
      cons: "아쉬웠던 점3",
      deleted: false,
    },
  ]);

  // 찜한상품 n개에서 n의 숫자
  const [remainingProducts, setRemainingProducts] = useState(products.length);
  const [remainingRecipes, setRemainingRecipes] = useState(recipes.length);
  const [remainingReviews, setRemainingReviews] = useState(reviews.length);

  // 찜한 상품 삭제하기 버튼
  const handleDelete0 = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, deleted: true } : product
      )
    );

    setRemainingProducts((prevCount) => prevCount - 1);
  };

  //찜한 레시피 삭제하기 버튼
  const handleDelete1 = (recipeId) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === recipeId ? { ...recipe, deleted: true } : recipe
      )
    );

    setRemainingRecipes((prevCount) => prevCount - 1);
  };

  //나의 리뷰 삭제하기 버튼
  const handleDelete2 = (reviewId) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === reviewId ? { ...review, deleted: true } : review
      )
    );

    setRemainingReviews((prevCount) => prevCount - 1);
  };

  

  return (
    <div className="App">
      <div className="bottompage">
        <List />
        <div className="middle-part">
          <div className="b-left-page">
            <p className="my-page">마이 페이지</p>

            <Nav defaultActiveKey="/link-0" className="flex-column">
              <Nav.Link
                onClick={() => {
                  탭변경(0);
                }}
                eventKey="link-0"
                className={탭 === 0 ? "selected" : ""}
              >
                찜한 상품
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  탭변경(1);
                }}
                eventKey="link-1"
                className={탭 === 1 ? "selected" : ""}
              >
                찜한 레시피
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  탭변경(2);
                }}
                eventKey="link-2"
                className={탭 === 2 ? "selected" : ""}
              >
                클린 체험단{" "}
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  탭변경(3);
                }}
                eventKey="link-3"
                className={탭 === 3 ? "selected" : ""}
              >
                내가 쓴 후기
              </Nav.Link>

              <Nav.Link
                onClick={() => {
                  탭변경(5);
                }}
                eventKey="link-5"
                className={탭 === 5 ? "selected" : ""}
              >
                서비스 이용 약관
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  탭변경(6);
                }}
                eventKey="link-6"
                className={탭 === 6 ? "selected" : ""}
              >
                개인정보처리 방침
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  탭변경(7);
                }}
                eventKey="link-7"
                className={탭 === 7 ? "selected" : ""}
              >
                계정 관리
              </Nav.Link>
            </Nav>
          </div>

          <div className="b-right-page">
            <TabContent
              탭={탭}
              products={products}
              recipes={recipes}
              reviews={reviews}
              handleDelete0={handleDelete0}
              handleDelete1={handleDelete1}
              handleDelete2={handleDelete2}
            />
          </div>
        </div>
      </div>
      <SideButton/> 

    </div>
  );
};

export default Main;
