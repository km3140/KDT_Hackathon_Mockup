import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import TransactionBox from '../component/TransactionBox';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  let TvlValue = 12345678;
  const navigater = useNavigate();

  return (
    <div className="main-page">
      <img src="https://cdn-icons-png.flaticon.com/512/3073/3073524.png" />
      <div className="tvl-div">
        <span className="tvl-header">Total Value Locked</span>
        <span className="tvl-value">${TvlValue.toLocaleString('ko-KR')}</span>
      </div>
      <div className="transaction-header">
        <h2>Transactions</h2>
        <div className="search-box">
          <input type="text" value="검색" />
          <FontAwesomeIcon className="search-btn" icon={faSearch} />
        </div>
      </div>
      <div className="transaction-list">
        <TransactionBox
          title="메타콩즈 인수비"
          amount="1234567"
          name="남영준"
          votePercent="100"
        />
        <TransactionBox
          title="스테픈 신발 강화"
          amount="2345678"
          name="김윤건"
          votePercent="75"
        />
        <TransactionBox
          title="이더 롱 치기"
          amount="3456789"
          name="심상준"
          votePercent="50"
        />
        <TransactionBox
          title="블록체인스쿨 수강료"
          amount="4567890"
          name="김민관"
          votePercent="25"
        />
        <div
          className="plus-transaction"
          onClick={navigater.bind(null, '/Add')}
        >
          <FontAwesomeIcon className="plus" icon={faPlus} />
        </div>
      </div>
    </div>
  );
};

export default Main;
