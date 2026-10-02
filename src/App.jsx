import Footer from './components/Footer';
import Nav from './components/Nav';
import CollectionPage from './pages/CollectionPage';
import CollectionsPage from './pages/CollectionsPage';
import HomePage from './pages/HomePage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ItemPage from './pages/ItemPage';
import UserPage from './pages/UserPage';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const [collection, setCollection] = useState(null);
  const [trendingNFT, setTrendingNFT] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newCollections, setNewCollections] = useState([]);

  // Fetch data from selected collection API endpoint => single object
  async function fetchCollection() {
    try {
      const { data } = await axios.get(
        'https://remote-internship-api-production.up.railway.app/selectedCollection',
      );

      const collectionData = data.data;

      setCollection(collectionData);
      setLoading(false);
    } catch (error) {
      // alert(error);
    }
  }

  // Fetch data from trending NFTs API endpoint => array of 10 objects
  async function fetchTrendingNFT() {
    try {
      const { data } = await axios.get(
        'https://remote-internship-api-production.up.railway.app/trendingnfts',
      );

      const trendingData = data.data;

      setTrendingNFT(trendingData);
      setLoading(false);
    } catch (error) {
      // alert(error);
    }
  }

  // Fetch data from newCollections API endpoint => array of 9 objects
  async function fetchNewCollections() {
    try {
      const { data } = await axios.get(
        'https://remote-internship-api-production.up.railway.app/newCollections',
      );

      const newCollectionsData = data.data;

      setNewCollections(newCollectionsData);
      setLoading(false);
    } catch (error) {
      // alert(error);
    }
  }

  useEffect(() => {
    fetchCollection();
    fetchTrendingNFT();
    fetchNewCollections();
  }, []);

  return (
    <AppContext.Provider
      value={{ collection, loading, trendingNFT, newCollections }}
    >
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/item" element={<ItemPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
