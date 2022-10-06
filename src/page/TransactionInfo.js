import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const TransactionInfo = () => {
  const navigater = useNavigate();
  return (
    <div className="transaction-info">
      <div className="transaction-info-top">
        <div>
          <FontAwesomeIcon
            onClick={navigater.bind(null, '/')}
            className="back"
            icon={faArrowLeft}
          />
          <div className="vote-detail">투표 상세</div>
        </div>
        <div className="vote-btn">투표하기</div>
      </div>
      <div className="transaction-info-middle">
        <div className="info-header">메타콩즈 인수비</div>
        <div className="info-body">
          <div className="info-body-1">
            <div>제안자</div>
            <div>남영준</div>
          </div>
          <div className="info-body-1">
            <div>금액</div>
            <div>$12,345,678</div>
          </div>
        </div>
        <div className="info-body">
          <div className="info-body-1">
            <div>투표 기간</div>
            <div>2022-10-06 ~ 2022-10-11</div>
          </div>
          <div className="info-body-1">
            <div>주관 부서</div>
            <div>마케팅</div>
          </div>
        </div>
      </div>
      <div className="transaction-detail">
        <div className="info-body-1">
          <div>내용</div>
          <div className="detail-content">
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
          </div>
        </div>
      </div>
      <div>
        <div className="transaction-detail">
          <div className="info-body-1">
            <div>투표 현황</div>
            <progress className="detail-content"></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionInfo;
