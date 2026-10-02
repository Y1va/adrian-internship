import React from 'react';
import VerifiedIcon from '../../assets/verified.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import TrendingSkeletonRow from '../ui/TrendingSkeletonRow';

export default function Trending() {
  const { trendingNFT, loading } = useContext(AppContext);

  return (
    <section id="trending">
      <div className="container">
        <div className="row trending__row">
          <div className="trending__header">
            <h2 className="trending__header__title">Trending NFTs</h2>
            <Link className="trending__header__button" to={'/collections'}>
              View All
            </Link>
          </div>
          <div className="trending__body">
            <div className="trending-column">
              <div className="trending-column__header trending-column__header2">
                <div className="trending-column__header__rank">#</div>
                <div className="trending-column__header__collection">
                  Collection
                </div>
                <div className="trending-column__header__price">
                  Floor Price
                </div>
                <div className="trending-column__header__price">Volume</div>
              </div>
              <div className="trending-column__body">
                {loading
                  ? new Array(5).fill(0).map((_, index) => {
                      return <TrendingSkeletonRow key={index} />;
                    })
                  : trendingNFT.slice(0, 5).map((item) => {
                      return (
                        <Link
                          key={item.collectionId}
                          to={'/collection'}
                          className="trending-collection"
                        >
                          <div className="trending-collection__rank">
                            {item.rank}
                          </div>
                          <div className="trending-collection__collection">
                            <figure className="trending-collection__img__wrapper">
                              <img
                                src={item.imageLink}
                                alt=""
                                className="trending-collection__img"
                              />
                            </figure>
                            <div className="trending-collection__name">
                              {item.title}
                            </div>
                            <img
                              src={VerifiedIcon}
                              className="trending-collection__verified"
                            />
                          </div>
                          <div className="trending-collection__price">
                            <span className="trending-collection__price__span">
                              {Math.round(item.floor * 100) / 100} ETH
                            </span>
                          </div>
                          <div className="trending-collection__volume">
                            <span className="trending-collection__volume__span">
                              {item.totalVolume} ETH
                            </span>
                          </div>
                        </Link>
                      );
                    })}
              </div>
            </div>
            <div className="trending-column">
              <div className="trending-column__header trending-column__header2">
                <div className="trending-column__header__rank">#</div>
                <div className="trending-column__header__collection">
                  Collection
                </div>
                <div className="trending-column__header__price">
                  Floor Price
                </div>
                <div className="trending-column__header__price">Volume</div>
              </div>
              <div className="trending-column__body">
                {loading
                  ? new Array(5).fill(0).map((_, index) => {
                      return <TrendingSkeletonRow key={index} />;
                    })
                  : trendingNFT.slice(5, 10).map((item) => {
                      return (
                        <Link
                          key={item.collectionId}
                          to={'/collection'}
                          className="trending-collection"
                        >
                          <div className="trending-collection__rank">
                            {item.rank}
                          </div>
                          <div className="trending-collection__collection">
                            <figure className="trending-collection__img__wrapper">
                              <img
                                src={item.imageLink}
                                alt=""
                                className="trending-collection__img"
                              />
                            </figure>
                            <div className="trending-collection__name">
                              {item.title}
                            </div>
                            <img
                              src={VerifiedIcon}
                              className="trending-collection__verified"
                            />
                          </div>
                          <div className="trending-collection__price">
                            <span className="trending-collection__price__span">
                              {Math.round(item.floor * 100) / 100} ETH
                            </span>
                          </div>
                          <div className="trending-collection__volume">
                            <span className="trending-collection__volume__span">
                              {item.totalVolume} ETH
                            </span>
                          </div>
                        </Link>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
