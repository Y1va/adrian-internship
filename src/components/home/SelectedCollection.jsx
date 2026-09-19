import VerifiedIcon from '../../assets/verified.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Skeleton from '../ui/Skeleton';

export default function SelectedCollection() {
  const { collection, loading } = useContext(AppContext);

  return (
    <header>
      {loading ? (
        <Skeleton
          width={'100%'}
          height={'calc(-35.584px + 27.8vw)'}
          borderRadius={'2px'}
        />
      ) : (
        <div className="selected-collection">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={collection?.thumbnail}
            src={collection?.videoLink}
            className="selected-collection__bg"
          />

          <div className="selected-collection__description">
            <img
              src={collection?.logo}
              alt=""
              className="selected-collection__logo"
            />
            <h1 className="selected-collection__title">{collection?.title}</h1>
            <Link to={'/user'} className="selected-collection__author">
              {collection?.creator}
              <img
                src={VerifiedIcon}
                className="selected-collection__author__verified"
              />
            </Link>
            <div className="selected-collection__details">
              {collection?.amountOfItems} items · {collection?.floorPrice} ETH
            </div>
            <Link to={'/collection'} className="selected-collection__button">
              <div className="green-pulse"></div>
              View Collection
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
