import React from 'react';
import Skeleton from './Skeleton';

function CollectionItemsSkeleton() {
  return (
    <>
      <div className="row collection-items__row">
        <div className="collection-items__header">
          <div className="collection-items__header__left">
            <span className="collection-items__header__live">
              {/* GREEN PULSE */}
              <div>
                <Skeleton width={'50px'} height={'16px'} borderRadius={'4px'} />
              </div>
            </span>
            <span className="collection-items__header__results">
              <Skeleton width={'70px'} height={'16px'} borderRadius={'4px'} />
            </span>
          </div>
          {/* HEADER SORT */}
          <Skeleton width={'240px'} height={'48px'} borderRadius={'12px'} />
        </div>
        <div className="collection-items__body">
          {new Array(12).fill(0).map((_, index) => {
            return (
              <div className="item-column" key={index}>
                <div className="item">
                  <figure className="item__img__wrapper">
                    {/* IMAGE */}
                    <div className="item__img">
                      <Skeleton
                        width={'100%'}
                        height={'100%'}
                        borderRadius={'4px'}
                      />
                    </div>
                  </figure>
                  <div className="item__details">
                    <span className="item__details__name">
                      <Skeleton
                        width={'30%'}
                        height={'16px'}
                        borderRadius={'4px'}
                      />
                    </span>
                    <span className="item__details__price">
                      <Skeleton
                        width={'20%'}
                        height={'16px'}
                        borderRadius={'4px'}
                      />
                    </span>
                    <span className="item__details__last-sale">
                      <Skeleton
                        width={'45%'}
                        height={'16px'}
                        borderRadius={'4px'}
                      />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CollectionItemsSkeleton;
