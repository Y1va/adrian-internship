import React from 'react';
import Skeleton from './Skeleton';

function TrendingSkeletonRow({ index }) {
  return (
    <div className="trending-collection" key={index}>
      <div className="trending-collection__rank">
        <Skeleton width={'20px'} height={'20px'} borderRadius={'4px'} />
      </div>
      <div className="trending-collection__collection">
        <figure className="trending-collection__img__wrapper">
          <Skeleton width={'100%'} height={'100%'} />
        </figure>
        <div className="trending-collection__name">
          <Skeleton width={'120px'} height={'16px'} borderRadius={'4px'} />
        </div>
      </div>
      <div className="trending-collection__price">
        <span className="trending-collection__price__span">
          <Skeleton width={'80px'} height={'16px'} borderRadius={'4px'} />
        </span>
      </div>
      <div className="trending-collection__volume">
        <span className="trending-collection__volume__span">
          <Skeleton width={'80px'} height={'16px'} borderRadius={'4px'} />
        </span>
      </div>
    </div>
  );
}

export default TrendingSkeletonRow;
