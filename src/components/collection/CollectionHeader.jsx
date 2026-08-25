import React from "react";
import { Link } from "react-router-dom";

export default function CollectionHeader() {
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.2)), 
        url('https://i2c.seadn.io/ethereum/333a4a1b74694e5b8b12d9a6983ec00d/eed39f76506b4baf71005d7127d0df/cbeed39f76506b4baf71005d7127d0df.png?w=2000')`,
      }}
      id="collection-header"
    >
      <div className="row collection-header__row">
        <div className="collection-header__content">
          <div className="collection-header__left">
            <img
              src="https://i2c.seadn.io/ethereum/333a4a1b74694e5b8b12d9a6983ec00d/036c8c2bed042a1588622c3173677f/2d036c8c2bed042a1588622c3173677f.png?h=250&w=250"
              alt=""
              className="collection-header__img"
            />
            <div className="collection-header__name">Meebits</div>
            <Link to={'/user'} className="collection-header__author">C352B5</Link>
          </div>
          <div className="collection-header__right">
            <div className="collection-header__columns">
              <div className="collection-header__column">
                <span className="collection-header__column__data">
                  <span className="semibold">181,714</span> ETH
                </span>
                <span className="collection-header__column__label">
                  Total volume
                </span>
              </div>
              <div className="collection-header__column">
                <span className="collection-header__column__data">
                  <span className="semibold">0.55</span> ETH
                </span>
                <span className="collection-header__column__label">
                  Floor price
                </span>
              </div>
              <div className="collection-header__column">
                <span className="collection-header__column__data">
                  <span className="semibold">0.5154</span> ETH
                </span>
                <span className="collection-header__column__label">
                  Best offer
                </span>
              </div>
              <div className="collection-header__column">
                <span className="collection-header__column__data">
                  <span className="semibold">1%</span>
                </span>
                <span className="collection-header__column__label">Listed</span>
              </div>
              <div className="collection-header__column">
                <span className="collection-header__column__data">
                  <span className="semibold">6,452 (32%)</span>
                </span>
                <span className="collection-header__column__label">
                  Owners (Unique)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
