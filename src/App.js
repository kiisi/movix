import Navbar from "./components/Navbar/Navbar";
import SideMenu from "./components/SideMenu/SideMenu";
import './App.scss';
import Product from "./components/Product/Product";
import Trade from "./components/Trade/Trade";
import LiveMarket from "./components/LiveMarket/LiveMarket";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="max-wrapper">
        <div className="scaffold">
          <SideMenu />
          <div className="scaffold__page">
            <div className="scaffold__page-menu">
              <div className="scaffold__page-menu--main">
                <div className="scaffold__page-menu--main--item">Board</div>
                <div className="scaffold__page-menu--main--item active">X-Traded</div>
                <div className="scaffold__page-menu--main--item">OTC</div>
                <div className="scaffold__page-menu--main--item">FI</div>
                <div className="scaffold__page-menu--main--item">Derivatives</div>
              </div>
              <div className="scaffold__page-menu--sub">
                <div className="scaffold__page-menu--sub--item">Product</div>
                <div className="scaffold__page-menu--sub--item active">All</div>
                <div className="scaffold__page-menu--sub--item">SMAZ</div>
                <div className="scaffold__page-menu--sub--item">SBBS</div>
                <div className="scaffold__page-menu--sub--item">SPRL</div>
                <div className="scaffold__page-menu--sub--item">SGNG</div>
                <div className="scaffold__page-menu--sub--item">SSGM</div>
                <div className="scaffold__page-menu--sub--item">FETC</div>
                <div className="scaffold__page-menu--sub--item">SCOC</div>
              </div>
            </div>  

            <div className="scaffold__page-products">
              <Product/>
            </div>
            <div className="scaffold__page-trades">
              <Trade/>
            </div>
          </div>
        </div>
      </div>
      <LiveMarket/>
    </div>
  );
}

export default App;
