import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import NewCollectionSkeleton from '../ui/NewCollectionSkeleton';
import MySlider from '../ui/MySlider';
import CollectionCard from '../ui/CollectionCard';

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
                      <CollectionCard collection={collection} key={index} />
                    );
                  })}
            </MySlider>
          </div>
        </div>
      </div>
    </section>
  );
}
