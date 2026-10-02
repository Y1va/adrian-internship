import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import MySlider from '../ui/MySlider';
import NewCollectionSkeleton from '../ui/NewCollectionSkeleton';

export default function NewCollections() {
  const { loading, newCollections } = useContext(AppContext);

  return (
    <section id="new-collections">
      <div className="container">
        <div className="row">
          <h2 className="new-collections__title">New Collections</h2>
          <div className="new-collections__body">
            <MySlider>
              {loading || newCollections.length === 0
                ? new Array(6).fill(0).map((_, index) => {
                    return <NewCollectionSkeleton key={index} />;
                  })
                : newCollections.map((collection, index) => (
                    <Link to="/collection" className="collection" key={index}>
                      <img
                        src={collection.imageLink}
                        alt=""
                        className="collection__img"
                      />
                      <div className="collection__info">
                        <h3 className="collection__name">{collection.title}</h3>
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
                  ))}
            </MySlider>
          </div>
        </div>
      </div>
    </section>
  );
}
