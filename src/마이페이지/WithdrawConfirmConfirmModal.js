function WithdrawConfirmConfirmModal({ closeModal4, closeModal3, closeModal }) {
  return (
    <div className="withdraw-confirm-confirm-modal">
      <span
        className="modal-close-button"
        onClick={() => {
          closeModal4();
          closeModal3();
          closeModal();
        }}
      >
        X
      </span>
      <h2 className="confirm-confirm-p">탈퇴 되었습니다.</h2>

      <button
        className="goto-main-page-btn"
        onClick={() => {
          closeModal4();
          closeModal3();
          closeModal();
        }}
      >
        메인페이지로 이동
      </button>
    </div>
  );
}

export default WithdrawConfirmConfirmModal;