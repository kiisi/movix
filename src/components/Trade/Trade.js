import React from 'react'
import './Trade.scss';
const Trade = () => {
  return (
    <div className="trade">
      <div className="trade__heading">
        <h4>TRADE LOG</h4>
      </div>
      <div className="trade__item">
        <h4>Security</h4>
        <h4>Board</h4>
        <h4>Order Type</h4>
        <h4>Matched Price</h4>
        <h4>Quantity</h4>
        <h4>Date</h4>
        <h4>Time</h4>
      </div>
      <div className="trade__item">
        <p>Soyabeans(SSBS)</p>
        <p>X-Traded</p>
        <p>Buy</p>
        <p>1792.65</p>
        <p>9265</p>
        <p>17 Oct, 2020</p>
        <p>07:38</p>
      </div>
      <div className="trade__item">
        <p>Paddy Rice(SPRL)</p>
        <p>X-Traded</p>
        <p>Buy</p>
        <p>1792.65</p>
        <p>9265</p>
        <p>8 Sep, 2020</p>
        <p>02:02</p>
      </div>
      <div className="trade__item">
        <p>Maize(SMAZ)</p>
        <p>OTC</p>
        <p>SELL</p>
        <p>1792.65</p>
        <p>9265</p>
        <p>24 May, 2020</p>
        <p>05:42</p>
      </div>
      <div className="trade__item">
        <p>Sorghum(SSGM)</p>
        <p>FI</p>
        <p>Sell</p>
        <p>1792.65</p>
        <p>9265</p>
        <p>1 Feb, 2020</p>
        <p>01:09</p>
      </div>
    </div>
  )
}

export default Trade