import React from 'react'
import './SideMenu.scss'
import overview from '../../assets/icon.png';
import market from '../../assets/icon-trade.png';
import porfolio from '../../assets/briefcase.png';
import community from '../../assets/contact.png';
import reports from '../../assets/report.png';
import settings from '../../assets/settings.png';
import search from '../../assets/search.png';

import product_view from '../../assets/trending-up.png';
import order_book from '../../assets/book.png';
import price_history from '../../assets/price_history.png'
import open_orders from '../../assets/eye.png'
import close_trades from '../../assets/Shape.png'
import cancelled_trades from '../../assets/x-circle.png'

const SideMenu = () => {
  return (
    <div className="sidemenu">
        <div className="sidemenu__primary">
            <div className="sidemenu__primary--item">
                <img src={overview} alt="overview"/>
                <p>Overview</p>
            </div>
            <div className="sidemenu__primary--item">
                <img src={market} alt="market"/>
                <p className="active-red">Market</p>
            </div>
            <div className="sidemenu__primary--item">
                <img src={porfolio} alt="porfolio"/>
                <p>Porfolio</p>
            </div>
            <div className="sidemenu__primary--item">
                <img src={community} alt="community"/>
                <p>Community</p>
            </div>
            <div className="sidemenu__primary--item">
                <img src={reports} alt="report"/>
                <p>Reports</p>
            </div>
            <div className="sidemenu__primary--item">
                <img src={settings} alt="settings"/>
                <p>Settings</p>
            </div>
        </div>
        <div className="sidemenu__secondary">
            <div className="sidemenu__secondary--search">
                <img src={search} alt="search"/>
                <input placeholder="Search" />
            </div>
            <div className="sidemenu__secondary--item">
                <span><img src={product_view} alt="product_view"/></span>
                <label>Product View</label>
            </div>
            <div className="sidemenu__secondary--item active">
                <span><img src={order_book} alt="order_book"/></span>
                <label>Order Book</label>
            </div>
            <div className="sidemenu__secondary--item">
                <span><img src={price_history} alt="price_history"/></span>
                <label>Price History</label>
            </div>
            <div className="sidemenu__secondary--item">
                <span><img src={open_orders} alt="open_orders"/></span>
                <label>Open Orders</label>
            </div>
            <div className="sidemenu__secondary--item">
                <span><img src={close_trades} alt="close_trades"/></span>
                <label>Close trades</label>
            </div>
            <div className="sidemenu__secondary--item">
                <span><img src={cancelled_trades} alt="cancelled_trades"/></span>
                <label>Cancelled Trade</label>
            </div>
        </div>
    </div>
  )
}

export default SideMenu