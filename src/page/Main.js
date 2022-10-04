import React from 'react';

const main = () => {
  const TvlValue = '123,456,789';
  return (
    <div className="main-page">
      <img src="https://cdn-icons-png.flaticon.com/512/3073/3073524.png" />
      <div className="tvl-div">
        <span className="tvl-header">Total Value Locked</span>
        <span className="tvl-value">${TvlValue}</span>
      </div>
    </div>
  );
};

export default main;
