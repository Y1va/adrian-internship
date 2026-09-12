import React, { useEffect } from 'react';
import SelectedCollection from '../components/home/SelectedCollection';
import { Link } from 'react-router-dom';

export default function CollectionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="collections-page__title">Collections</h1>
        <div className="collections__body">
          {new Array(12).fill(0).map((_, index) => (
            <div className="collection-column">
              <Link to="/collection" key={index} className="collection">
                <img
                  src="https://i2c.seadn.io/collection/boredapeyachtclub/banner/3ddcabd06bb257af35f029b3c17163/e13ddcabd06bb257af35f029b3c17163.jpeg?w=2000"
                  alt=""
                  className="collection__img"
                />
                <div className="collection__info">
                  <h3 className="collection__name">Bored Ape Kennel Club</h3>
                  <div className="collection__stats">
                    <div className="collection__stat">
                      <span className="collection__stat__label">Floor</span>
                      <span className="collection__stat__data">0.46 ETH</span>
                    </div>
                    <div className="collection__stat">
                      <span className="collection__stat__label">
                        Total Volume
                      </span>
                      <span className="collection__stat__data">281K ETH</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <button className="collections-page__button">Load more</button>
      </div>
    </div>
  );
}
