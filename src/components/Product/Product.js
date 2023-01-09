import React from 'react'
import './Product.scss';

const Product = () => {
    return (
        <>
            <div className="products">
                <div className="products__product">
                    <h4>Products</h4>
                    <h4>Quantity</h4>
                    <h4>Bid Price</h4>
                </div>
                <div className="products__product">
                    <p>Soybeans(SSBS)</p>
                    <p>2003</p>
                    <p>1736.92</p>
                    <div className="btn-buy">Buy</div>
                </div>
                <div className="products__product">
                    <p>Paddy Rice(SPRL)</p>
                    <p>11293</p>
                    <p>3627.00</p>
                    <div className="btn-buy">Buy</div>
                </div>
                <div className="products__product">
                    <p>Maize(SMAZ)</p>
                    <p>2003</p>
                    <p>1736.32</p>
                    <div className="btn-buy">Buy</div>
                </div>
                <div className="products__product">
                    <p>Sorghum(SSGM)</p>
                    <p>29102</p>
                    <p>8192.32</p>
                    <div className="btn-buy">Buy</div>
                </div>
                <div className="products__product">
                    <p>Fair Trade ETC(FETC)</p>
                    <p>3212</p>
                    <p>1736.32</p>
                    <div className="btn-buy">Buy</div>
                </div>
                <div className="products__product">
                    <p>Fair Trade ETC(FETC)</p>
                    <p>3212</p>
                    <p>1736.92</p>
                    <div className="btn-buy">Buy</div>
                </div>
            </div>
            <div className="products">
                <div className="products__product">
                    <h4>Products</h4>
                    <h4>Quantity</h4>
                    <h4>Bid Price</h4>
                </div>
                <div className="products__product">
                    <p>Soybeans(SSBS)</p>
                    <p>2003</p>
                    <p>1736.92</p>
                    <div className="btn-sell">Sell</div>
                </div>
                <div className="products__product">
                    <p>Paddy Rice(SPRL)</p>
                    <p>11293</p>
                    <p>3627.00</p>
                    <div className="btn-sell">Sell</div>
                </div>
                <div className="products__product">
                    <p>Maize(SMAZ)</p>
                    <p>2003</p>
                    <p>1736.32</p>
                    <div className="btn-sell">Sell</div>
                </div>
                <div className="products__product">
                    <p>Sorghum(SSGM)</p>
                    <p>29102</p>
                    <p>8192.32</p>
                    <div className="btn-sell">Sell</div>
                </div>
                <div className="products__product">
                    <p>Fair Trade ETC(FETC)</p>
                    <p>3212</p>
                    <p>1736.32</p>
                    <div className="btn-sell">Sell</div>
                </div>
                <div className="products__product">
                    <p>Fair Trade ETC(FETC)</p>
                    <p>3212</p>
                    <p>1736.92</p>
                    <div className="btn-sell">Sell</div>
                </div>
            </div>
        </>
    )
}

export default Product