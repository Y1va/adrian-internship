import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CollectionItemsSkeleton from '../ui/CollectionItemsSkeleton';

export default function CollectionItems({ collection, loading }) {
  const [visibleCount, setVisibleCount] = useState(12);
  const [sort, setSort] = useState('');

  // Function for the show more button - will add 6 items per click until condition is no longer true
  function handleShowMore() {
    setVisibleCount((prevCount) => prevCount + 6);
  }

  // Sort items from price high to low and low to high
  function sortItems() {
    if (sort === 'HIGH_TO_LOW') {
      return collection.items?.slice().sort((a, b) => b.price - a.price);
    } else if (sort === 'LOW_TO_HIGH') {
      return collection.items?.slice().sort((a, b) => a.price - b.price);
    }
    // If none of the above are true => return the unsorted items array
    return collection.items;
  }

  const sortedItems = sortItems();

  return (
    <section id="collection-items">
      {loading ? (
        <CollectionItemsSkeleton />
      ) : (
        <div className="row collection-items__row">
          <div className="collection-items__header">
            <div className="collection-items__header__left">
              <span className="collection-items__header__live">
                <div className="green-pulse"></div>
                Live
              </span>
              <span className="collection-items__header__results">
                {collection.items?.length} results
              </span>
            </div>

            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="collection-items__header__sort"
            >
              <option>Default</option>
              <option value="HIGH_TO_LOW">Price high to low</option>
              <option value="LOW_TO_HIGH">Price low to high</option>
            </select>
          </div>
          <div className="collection-items__body">
            {sortedItems?.slice(0, visibleCount).map((item, index) => {
              return (
                <div className="item-column" key={index}>
                  <Link to={'/item'} className="item">
                    <figure className="item__img__wrapper">
                      <img src={item.imageLink} alt="" className="item__img" />
                    </figure>
                    <div className="item__details">
                      <span className="item__details__name">{item.title}</span>
                      <span className="item__details__price">
                        {Math.round(item.price * 100) / 100} ETH
                      </span>
                      <span className="item__details__last-sale">
                        Last sale: {item.lastSale} ETH
                      </span>
                    </div>
                    <div className="item__see-more">
                      <button className="item__see-more__button">
                        See More
                      </button>
                      <div className="item__see-more__icon">
                        <FontAwesomeIcon icon={faShoppingBag} />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {visibleCount < collection.items?.length && (
        <button onClick={handleShowMore} className="collection-page__button">
          Load more
        </button>
      )}
    </section>
  );
}
