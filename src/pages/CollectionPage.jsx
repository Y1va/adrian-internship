import React, { useEffect, useState } from 'react';
import CollectionHeader from '../components/collection/CollectionHeader';
import CollectionInfo from '../components/collection/CollectionInfo';
import CollectionItems from '../components/collection/CollectionItems';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CollectionPage() {
  const [collection, setCollection] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // Fetch collection by ID
  async function fetchCollectionById() {
    try {
      const { data } = await axios.get(
        `https://remote-internship-api-production.up.railway.app/collection/${id}`,
      );

      const collectionIdData = data.data;

      setCollection(collectionIdData);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchCollectionById();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <CollectionHeader loading={loading} collection={collection} />
      <CollectionInfo loading={loading} collection={collection} />
      <CollectionItems loading={loading} collection={collection} />
    </>
  );
}
