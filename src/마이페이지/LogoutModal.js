function LogoutModal({ closeModal, handleLogout }) {
  return (
    <div className="modal">
      <div className="logout-popup">
        <button className="modal-close-button" onClick={closeModal}>
          X
        </button>
        <p className="logout-p">로그아웃하시겠습니까?</p>
        <button className="logout-yes" onClick={handleLogout}>
          네
        </button>
        <button className="logout-no" onClick={closeModal}>
          아니오
        </button>
      </div>
    </div>
  );
}

export default LogoutModal