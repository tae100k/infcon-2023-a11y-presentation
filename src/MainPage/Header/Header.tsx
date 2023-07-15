import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <p className="title">TREND 2023</p>
      <button className="subscribe-button">
        <p className="subscribe-label">정기 구독 신청</p>
      </button>
    </div>
  );
};

export {Header};
