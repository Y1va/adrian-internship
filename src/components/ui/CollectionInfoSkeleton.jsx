import React from 'react';
import Skeleton from './Skeleton';

function CollectionInfoSkeleton() {
  return (
    <div className="collection-info__wrapper">
      <p className="collection-info__description">
        <Skeleton width={'100%'} height={'18px'} borderRadius={'4px'} />
      </p>
      <p className="collection-info__description">
        <Skeleton width={'100%'} height={'18px'} borderRadius={'4px'} />
      </p>
      <p className="collection-info__description">
        <Skeleton width={'70%'} height={'18px'} borderRadius={'4px'} />
      </p>
      <div className="collection-info__details">
        <span className="collection-info__detail">
          <Skeleton width={'60px'} height={'18px'} borderRadius={'4px'} />
        </span>
        <span className="collection-info__detail">
          <Skeleton width={'120px'} height={'18px'} borderRadius={'4px'} />
        </span>
        <span className="collection-info__detail">
          <Skeleton width={'120px'} height={'18px'} borderRadius={'4px'} />
        </span>
        <span className="collection-info__detail">
          <Skeleton width={'120px'} height={'18px'} borderRadius={'4px'} />
        </span>
      </div>
    </div>
  );
}

export default CollectionInfoSkeleton;
