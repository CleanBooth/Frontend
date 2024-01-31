import { useState } from "react";
import WithdrawConfirmModal from "./WithdrawConfirmModal";

function WithdrawModal({ closeModal, handleWithdraw }) {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isWithdrawalButtonActive, setIsWithdrawalButtonActive] =
    useState(false);

  //탈퇴 확인 state
  const [confirm, setConfirm] = useState(false);

  const closeModal3 = () => {
    setConfirm(false);
  };

  const handleAgreementChange = () => {
    setIsAgreed(!isAgreed);
    setIsWithdrawalButtonActive(!isWithdrawalButtonActive);
  };

  const handleWithdrawal = () => {
    setConfirm(true);
  };

  return (
    <div className="withdraw-modal">
      <div className="withdraw-popup">
        <button className="modal-close-button" onClick={closeModal}>
          X
        </button>
        <p className="withdraw-p">탈퇴 전 확인하세요!</p>

        <div className="popup-left">
          <p>탈퇴 후 이용 중인 모든 클린부스 서비스가 폐쇄되며,</p>
          <p>모든 데이터는 복구가 불가능합니다.</p>
          <br />
          <p>찜 내역, 작성하신 후기, 프로필 등 모든 정보가 삭제됩니다.</p>
          <label className="withdraw-p2">
            <input
              className="withdraw-check-button"
              type="checkbox"
              checked={isAgreed}
              onChange={handleAgreementChange}
            />
            &nbsp;&nbsp; 위 내용에 모두 동의합니다
          </label>
          <br />{" "}
        </div>

        <button
          className={`withdraw-button ${isAgreed ? "active" : ""}`}
          onClick={handleWithdrawal}
          disabled={!isWithdrawalButtonActive}
        >
          탈퇴하기
        </button>

        {confirm && (
          <WithdrawConfirmModal
            closeModal3={closeModal3}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default WithdrawModal;
