import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import CollectionCard from '../components/ui/CollectionCard';
import NewCollectionSkeleton from '../components/ui/NewCollectionSkeleton';
import { AppContext } from '../context/AppContext';

export default function CollectionsPage() {
  const [collections, setCollections] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const { loading, setLoading } = useContext(AppContext);

  async function fetchCollections() {
    try {
      const { data } = await axios.get(
        'https://remote-internship-api-production.up.railway.app/collections',
      );

      const collectionData = data.data;

      setCollections(collectionData);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  // Function for the show more button - will add 6 items per click until condition is no longer true
  function handleShowMore() {
    setVisibleCount((prevCount) => prevCount + 6);
  }

  useEffect(() => {
    fetchCollections();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="collections-page__title">Collections</h1>
        <div className="collections__body">
          {loading || collections.length === 0
            ? new Array(12).fill(0).map((_, index) => {
                return (
                  <div className="collection-column" key={index}>
                    <NewCollectionSkeleton />
                  </div>
                );
              })
            : collections.slice(0, visibleCount).map((collection, index) => {
                return (
                  <div className="collection-column" key={index}>
                    <CollectionCard collection={collection} />
                  </div>
                );
              })}
        </div>
        {visibleCount < collections.length && (
          <button onClick={handleShowMore} className="collections-page__button">
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
