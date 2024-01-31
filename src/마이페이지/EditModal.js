import { FaStar } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import Main from "./Main";
import { useState, useEffect, useSyncExternalStore } from "react";
import { Image } from "react-bootstrap";

function EditModal({
  closeeditModal,
  goodcontent,
  setGoodContent,
  setMissing,
  missing,
  mainImg,
  setMainImg,
  clicked,
  setClicked,
}) {
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

  const sendReview = (props) => {
    let score = clicked.filter(Boolean).length;
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

  const [goodinputCount, setGoodInputCount] = useState(0);
  const [missinginputCount, setMissingInputCount] = useState(0);

  let [content, setContent] = useState("");
  let [content2, setContent2] =useState("");

  
  const onTextareaHandler = (e) => {
    //좋았던 점 타자 카운트
    setGoodInputCount(
      e.target.value.length
    );
    setContent(
      e.target.value
    );
  };

  const onTextareaHandler1 = (e) => {
    // 아쉬웠던 점 타자 카운트인데 함수 사용은 따로 안하고 아래 onChange에 바로 넣음
    setMissingInputCount(
      e.target.value.length
    );
    setContent2(
      e.target.value
    );
  };

  //이미지 업로드하는 부분

  const setPreviewImg = (event) => {
    var reader = new FileReader();

    reader.onload = function (event) {
      setMainImg(event.target.result);
    };

    reader.readAsDataURL(event.target.files[0]);
  };
  const ARRAY = [0, 1, 2, 3, 4];
  return (
    <div className="edit-modal">
      <div className="edit-reviewmodal">
        <div className="edit-modal-header">
          <button className="close" onClick={closeeditModal}>
            X 닫기
          </button>
        </div>
        <h2 className="centered-h2">후기 수정하기</h2>
        <div className="stars">
          <div className="five-star">
            {ARRAY.map((el, idx) => {
              return (
                <FaStar
                  key={idx}
                  size="40"
                  onClick={() => handleStarClick(el)}
                  className={clicked[el] && "yellowStar"}
                />
              );
            })}
          </div>

          <span className="h">평점을 남겨주세요</span>
        </div>
        <div className="edit-box">
          <div className="ex">
            <div className="explanation">좋았던 점</div>
            <span>20자 이상</span>
          </div>

          <div className="box-explanation">
            <div className="textarea-wrapper">
              <textarea
                value={goodcontent}
                onChange={(e) => {
                  setGoodContent(e.target.value);
                  setGoodInputCount(
                    e.target.value.length
                  );
                }}
                maxLength="5000"
                placeholder="내용을 입력하세요."
              ></textarea>
              <p></p>
              <p className="box-explanation-p">
                <span>{goodinputCount}</span>
                <span>/5000</span>
              </p>
            </div>
          </div>
          <div className="ex">
            <div className="explanation">아쉬웠던 점</div>
            <span style={{ color: "gray" }}>20자 이상</span>
          </div>

          <div className="box-explanation">
            <div className="textarea-wrapper">
              <textarea
                value={missing}
                onChange={(e) => {
                  setMissing(e.target.value);

                  setMissingInputCount(
                    e.target.value.length
                  );
                }}
                maxLength="5000"
                placeholder="내용을 입력하세요."
              ></textarea>
              <p className="box-explanation-p">
                <span>{missinginputCount}</span>
                <span>/5000</span>
              </p>
            </div>
          </div>
          <div className="pic-div">
            <div className="pic-p">사진</div>
            <span style={{ color: "gray", fontSize: "14px" }}>
              제품과 무관한 사진일 경우 후기 수정 요청을 드리거나, 관리자에 의해
              삭제될 수 있습니다.
            </span>
          </div>
          <div className="parent-container">
            <div className="photo-container">
              <div className="photo">
                <button className="upload-button">
                  <label htmlFor="image-upload">
                    <IoIosAddCircleOutline size="40" color="gray" />
                  </label>
                  <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={setPreviewImg}
                    style={{ display: "none" }}
                  />
                </button>
              </div>
            </div>

            <div className="image-container">
              {mainImg && (
                <img
                  alt="메인사진"
                  src={mainImg}
                  style={{ maxWidth: "100px" }}
                />
              )}
            </div>
            {console.log(setMainImg)}
          </div>
        </div>
        <button
          className={`review-button ${goodinputCount > 19 && missinginputCount > 19 ? 'active' : ''}`} 
          onClick={ () => {
            if (goodinputCount > 19 && missinginputCount > 19) {
              console.log(content);
              setGoodContent(goodcontent);
              closeeditModal();
            } else {
              console.log("Conditions not met - content:", content);
            }
        }} 
        disabled={goodinputCount < 20 || missinginputCount < 20}>
          수정 완료
        </button>
      </div>
    </div>
  );
}

export default EditModal;
