import { useState } from "react";
import WithdrawConfirmConfirmModal from "./WithdrawConfirmConfirmModal";

function WithdrawConfirmModal({ closeModal3, closeModal }) {
  const [confirmconfirm, setConfirmConfirm] = useState(false);

  const handleWithdrawalConfirm = () => {
    setConfirmConfirm(true);
  };

  const closeModal4 = () => {
    setConfirmConfirm(false);
  };

  return (
    <div className="withdraw-confirm-modal">
      <div className="confirm-popup">
        <button className="modal-close-button" onClick={closeModal3}>
          X
        </button>
        <p className="confirm-p">정말 탈퇴하시겠습니까?</p>
        <button className="confirm-yes" onClick={handleWithdrawalConfirm}>
          네
        </button>
        <button className="confirm-no" onClick={closeModal3}>
          아니오
        </button>
      </div>
      {confirmconfirm && (
        <WithdrawConfirmConfirmModal
          closeModal4={closeModal4}
          closeModal3={closeModal3}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default WithdrawConfirmModal;