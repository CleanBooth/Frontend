import { TabContent } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

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

};
let [editmodal, setEditModal] = useState(false);


//찜한 상품


  //찜한 레시피
  



  //리뷰관련변수
  let [name, setName] = useState(["000"]);
  let [age, setAge] = useState(["20"]);
  let [star, setStar] = useState([]);
  //score가 저장되어야함
  let [good, setGood] = useState(["좋았던 점 내용"]);
  let [bad, setBad] = useState(["아쉬웠던 점 내용"]);
  let [photo, setPhoto] = useState(["메인사진"]);

  if (props.탭 == 0) {


    const YourComponent = (props) => {
      const [data, setData] = useState([]); // 서버에서 받아온 데이터를 저장할 상태 변수
    
      useEffect(() => {
        // 서버에서 데이터 가져오기
        fetch("http://43.202.77.82:8080/mypage/wish-item")
          .then((response) => response.json())
          .then((data) => {
            setData(data); // 가져온 데이터를 상태 변수에 저장
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

    };
    return (
      <div>

        {data.totalCount && (
          <div className="pre-container0">
            <h2>
              찜한 상품 총{" "}
              <span className="highlighted-number">{data.totalCount}</span> 개
            </h2>
            <hr />
          </div>
        )}

        <div>
          {data.item &&
            data.item.map((item, index) => (
              <div className="product" key={index}>
                <img src={item.image} alt={item.name} className="jjim-product-image" />
                <div className="product-info">
                  <p className="product-brand">{item.brandName}</p>
                  <p className="product-name">&nbsp;{item.name}</p>
                </div>
                <button
                  className="delete-button"
                  onClick={() => handleDelete0(index)} // 삭제 버튼 클릭 핸들러
                >
                  x 삭제하기
                </button>
              </div>
            ))}
        </div>
      </div>

    );
            
} else if (props.탭 == 1) {
  const [recipeData, setRecipeData] = useState({ totalCount: 0, recipes: [] }); // 레시피 데이터를 저장할 상태 변수

  useEffect(() => {
    // 서버에서 레시피 데이터 가져오기
    fetch("http://43.202.77.82:8080/mypage/wish-recipe")
      .then((response) => response.json())
      .then((data) => {
        setRecipeData(data); // 가져온 레시피 데이터를 상태 변수에 저장
      })
      .catch((error) => {
        console.error("Error fetching recipe data:", error);
      });
  }, []);

  return (
    <div>
      <div className="pre-container1">
        <h2>
          찜한 레시피 총{" "}
          <span className="highlighted-number">
            {recipeData.totalCount}
          </span>
          개
        </h2>
        <hr />
      </div>
      <div>
        {recipeData.recipes.map((recipe, index) => (
          <div className="recipe" key={index}>
            <img
              src={recipe.image}
              alt={recipe.name}
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
        ))}
      </div>
    </div>
  );
} else if (props.탭 == 2) {
  const handleTabChange = (eventKey) => {
    setSelectedTab(eventKey);
  };

  const [selectedTab, setSelectedTab] = useState("preuser-app");
  const [testHistory, setTestHistory] = useState([]);

  useEffect(() => {
    // 서버에서 데이터 가져오기
    fetch("http://43.202.77.82:8080/mypage/test-history")
      .then((response) => response.json())
      .then((data) => {
        setTestHistory(data);
      })
      .catch((error) => {
        console.error("Error fetching test history data:", error);
      });
  }, []);

  

  //클린 체험단 > 신청내역
  const images = [
    {
      src: "cleanimg.jpg",
      progress: "진행중",
      title: "제목",
      deadline: "모집 기간",
    },
    {
      src: "cleanimg.jpg",
      progress: "진행중",
      title: "제목",
      deadline: "모집 기간",
    },
    {
      src: "cleanimg.jpg",
      progress: "진행중",
      title: "제목",
      deadline: "모집 기간",
    },
    {
      src: "cleanimg.jpg",
      progress: "진행중",
      title: "제목",
      deadline: "모집 기간",
    },
  ];

  //클린 체험단 > 당첨 내역
  const images2 = [
    {
      src: "cleanimg.jpg",
      progress: "마감",
      title: "제목",
      deadline: "모집 기간",
      reviewYN: "후기작성여부(미작성)",
    },
    {
      src: "cleanimg.jpg",
      progress: "마감",
      title: "제목",
      deadline: "모집 기간",
      reviewYN: "후기작성여부(작성)",
    },
    {
      src: "cleanimg.jpg",
      progress: "마감",
      title: "제목",
      deadline: "모집 기간",
      reviewYN: "후기작성여부(미작성)",
    },
    {
      src: "cleanimg.jpg",
      progress: "마감",
      title: "제목",
      deadline: "모집 기간",
      reviewYN: "후기작성여부(작성)",
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
              {testHistory.map((item, index) => (
                <div className="image-item" key={index}>
                  <img src={item.image} alt={`Image ${index}`} />
                  <div className="image-details">
                    <p className="process1">{item.isTesting ? "진행중" : "마감"}</p>
                    <p className="imgtitle1">{item.itemName}</p>
                    <p className="imgdeadline1">{`${item.endDate}`}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {testHistory.map((history, index) => (
            <div className="image-item2" key={index}>
              <img src={history.image} alt={`Image ${index}`} />
              <div className="image-details2">
                <p className="process2">
                  {history.isTesting ? "진행중" : "마감"}
                </p>
                <p className="imgtitle2">{history.itemName}</p>
                <p className="imgdeadline2">{history.endDate}</p>
                <p className="ReviewYN">
                  {history.hasReviewed
                    ? "후기작성여부(작성)"
                    : "후기작성여부(미작성)"}
                </p>
              </div>
            </div>
          ))}
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
                <div className="review" key={review.id}>
                  <div className="review-left">
                    <img
                      src="jjim.jpg"
                      alt="내 리뷰의 상품 이미지"
                      className="jjim-product-image"
                    />
                  </div>

                  <div className="review-right">
                    <div className="review-buttons">
                      <button
                        className="delete-button"
                        onClick={() => props.handleDelete2(review.id)}
                      >
                        x 삭제하기
                      </button>

                      <button
                        className="edit-button"
                        onClick={() => {
                          setEditModal(true);
                        }} // Show the popup
                      >
                        <FontAwesomeIcon icon={faPencilAlt} /> 수정하기
                      </button>
                      {editmodal === true && (
                        <EditModal closeeditModal={closeeditModal}/>
                      )}
                    </div>
                    <div className="review-right-1">
                      <div className="review-info">
                        <p className="review-brand">브랜드명</p>
                        <p className="review-name">&nbsp;제품명</p>
                      </div>

                      <div className="star-rates">
                        <FaStar size="40" className="yellowStar0" />
                        <FaStar size="40" className="yellowStar0" />
                        <FaStar size="40" className="yellowStar0" />
                        <FaStar size="40" className="yellowStar0" />
                        <FaStar size="40" className="yellowStar0" />
                      </div>
                    </div>

                    <div className="review-right-2">
                      <div className="review-pros">
                        <p className="review-pro">좋았던 점</p>
                        <p className="review-p-content">
                        
                        </p>
                        
                      </div>

                      <div className="review-cons">
                        <p className="review-con">아쉬웠던 점</p>
                        <p className="review-c-content">
                          {" "}
                          &nbsp; 내용&#40;10글자&#41;
                        </p>
                       

                        <button className="more-review-info">
                          <p>더보기</p>
                        </button>
                      </div>

                      <div className="review-imgs">
                        <img
                          src="reviewImg.jpg"
                          alt="내 리뷰 이미지"
                          className="review-image1"
                        />
                        <img
                          src="reviewImg.jpg"
                          alt="내 리뷰 이미지"
                          className="review-image2"
                        />
                        <img
                          src="reviewImg.jpg"
                          alt="내 리뷰 이미지"
                          className="review-image3"
                        />
                        <img
                          src="reviewImg.jpg"
                          alt="내 리뷰 이미지"
                          className="review-image4"
                        />
                        <img
                          src="reviewImg.jpg"
                          alt="내 리뷰 이미지"
                          className="review-image5"
                        />
                      </div>
                      <p className="review-time">YY/MM/DD</p>
                    </div>
                  </div>
                </div>
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




export default TabContent;