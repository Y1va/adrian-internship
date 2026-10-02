import React from 'react';
import Skeleton from './Skeleton';

function NewCollectionSkeleton() {
  return (
    <div className="collection">
      {/* collection-img */}
      <Skeleton width={'100%'} height={'180px'} />
      <div className="collection__info">
        <h3 className="collection__name">
          <Skeleton width={'40%'} height={'17px'} borderRadius={'4px'} />
        </h3>
        <div className="collection__stats">
          <div className="collection__stat">
            <span className="collection__stat__label">
              <Skeleton width={'40px'} height={'14px'} borderRadius={'4px'} />
            </span>
            <span className="collection__stat__data">
              <Skeleton width={'75px'} height={'14px'} borderRadius={'4px'} />
            </span>
          </div>
          <div className="collection__stat">
            <span className="collection__stat__label">
              <Skeleton width={'40px'} height={'14px'} borderRadius={'4px'} />
            </span>
            <span className="collection__stat__data">
              <Skeleton width={'75px'} height={'14px'} borderRadius={'4px'} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCollectionSkeleton;
