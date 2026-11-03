import React from 'react';
import CollectionInfoSkeleton from '../ui/CollectionInfoSkeleton';

export default function CollectionInfo({ collection, loading }) {
  return (
    <section id="collection-info">
      <div className="row">
        {loading ? (
          <CollectionInfoSkeleton />
        ) : (
          <div className="collection-info__wrapper">
            <p className="collection-info__description">
              {collection.description}
            </p>
            <div className="collection-info__details">
              <span className="collection-info__detail">
                Items{' '}
                <span className="collection-info__detail__data">
                  {collection.items?.length}
                </span>
              </span>
              ·
              <span className="collection-info__detail">
                Created{' '}
                <span className="collection-info__detail__data">
                  {collection.createdDate}
                </span>
              </span>
              ·
              <span className="collection-info__detail">
                Creator earnings{' '}
                <span className="collection-info__detail__data">
                  {collection.creatorEarnings}%
                </span>
              </span>
              ·
              <span className="collection-info__detail">
                Chain{' '}
                <span className="collection-info__detail__data">
                  {collection.chain}
                </span>
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
