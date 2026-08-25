import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TrendingCollection from "../assets/trending-collection.avif";

export default function UserPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header
        style={{
          backgroundImage: `url('https://i2c.seadn.io/ethereum/333a4a1b74694e5b8b12d9a6983ec00d/eed39f76506b4baf71005d7127d0df/cbeed39f76506b4baf71005d7127d0df.png?w=2000')`,
        }}
        id="user-header"
      ></header>

      <section id="user-info">
        <div className="row">
          <div className="user-info__wrapper">
            <figure className="user-info__img__wrapper">
              <img
                src="https://i2c.seadn.io/base/6747331598e96212af2c89b7/c8bf89cb6f0d23f14cdee4f4a54d6c/dfc8bf89cb6f0d23f14cdee4f4a54d6c.png?h=1000&w=1000"
                alt=""
                className="user-info__img"
              />
            </figure>
            <h1 className="user-info__name">shilpixels</h1>
            <div className="user-info__details">
              <span className="user-info__wallet">
                <FontAwesomeIcon
                  icon={faEthereum}
                  className="user-info__wallet__icon"
                />
                <span className="user-info__wallet__data">shilpixels.eth</span>
              </span>
              <span className="user-info__year">
                <span className="user-info__year__data">
                  Joined Feburary 2021
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="user-items">
        <div className="row user-items__row">
          <div className="user-items__header">
            <div className="user-items__header__left">
              <span className="user-items__header__text">163 items</span>
            </div>
            <select className="user-items__header__sort">
              <option value="">Recently purchased</option>
              <option value="">Price high to low</option>
              <option value="">Price low to high</option>
            </select>
          </div>
          <div className="user-items__body">
            {new Array(10).fill(0).map((_, index) => (
              <div className="item-column" key={index}>
                <Link to={"/item"} className="item">
                  <figure className="item__img__wrapper">
                    <img
                      src={TrendingCollection}
                      alt=""
                      className="item__img"
                    />
                  </figure>
                  <div className="item__details">
                    <span className="item__details__name">Meebit #0001</span>
                    <span className="item__details__price">0.98 ETH</span>
                    <span className="item__details__last-sale">
                      Last sale: 7.45 ETH
                    </span>
                  </div>
                  <a className="item__see-more" href="#">
                    <button className="item__see-more__button">See More</button>
                    <div className="item__see-more__icon">
                      <FontAwesomeIcon icon={faShoppingBag} />
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <button className="collection-page__button">Load more</button>
      </section>
    </>
  );
}
