import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import MySlider from '../ui/MySlider';
import NewCollectionSkeleton from '../ui/NewCollectionSkeleton';
import CollectionCard from '../ui/CollectionCard';

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
                : newCollections.map((collection, index) => {
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
