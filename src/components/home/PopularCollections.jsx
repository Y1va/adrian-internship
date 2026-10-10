import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import NewCollectionSkeleton from '../ui/NewCollectionSkeleton';
import MySlider from '../ui/MySlider';

export default function PopularCollections() {
  const { loading, popularCollections } = useContext(AppContext);

  return (
    <section id="popular-collections">
      <div className="container">
        <div className="row">
          <h2 className="popular-collections__title">Popular Collections</h2>
          <div className="popular-collections__body">
            <MySlider>
              {loading || popularCollections.length === 0
                ? new Array(6).fill(0).map((_, index) => {
                    return <NewCollectionSkeleton key={index} />;
                  })
                : popularCollections.map((collection, index) => {
                    return (
                      <Link to="/collection" className="collection" key={index}>
                        <img
                          src={collection.imageLink}
                          alt=""
                          className="collection__img"
                        />
                        <div className="collection__info">
                          <h3 className="collection__name">
                            {collection.title}
                          </h3>
                          <div className="collection__stats">
                            <div className="collection__stat">
                              <span className="collection__stat__label">
                                Floor
                              </span>
                              <span className="collection__stat__data">
                                {Math.round(collection.floor * 100) / 100} ETH
                              </span>
                            </div>
                            <div className="collection__stat">
                              <span className="collection__stat__label">
                                Total Volume
                              </span>
                              <span className="collection__stat__data">
                                {collection.totalVolume} ETH
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
            </MySlider>
          </div>
        </div>
      </div>
    </section>
  );
}
