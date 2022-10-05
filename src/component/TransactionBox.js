import React from 'react';
import { useNavigate } from 'react-router-dom';

const TransactionBox = (props) => {
  const navigater = useNavigate();

  return (
    <div
      className="transaction-box"
      onClick={navigater.bind(null, `/Transaction/${props.title}`)}
    >
      <div>
        <h3>{props.title}</h3>
      </div>
      <div className="transaction-menu">
        {/*추후 .map으로 코드 줄이기*/}
        <div>
          <div className="transaction-menu-label">금액</div>
          <div className="transaction-menu-value">
            ${parseInt(props.amount).toLocaleString('ko-KR')}
          </div>
        </div>
        <div>
          <div className="transaction-menu-label">수령자</div>
          <div className="transaction-menu-value">{props.name}</div>
        </div>
        <div>
          <div className="transaction-menu-label">동의현황</div>
          <div className="transaction-menu-value">{props.agreePercent}%</div>
        </div>
      </div>
      <progress value={parseInt(props.agreePercent)} max="100"></progress>
    </div>
  );
};

export default TransactionBox;
