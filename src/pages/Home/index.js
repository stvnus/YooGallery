import React, { useEffect } from 'react';
import Navbar from '../../components/organism/Navbar';
import Footer from '../../components/organism/Footer';
import useAxios from '../../hooks/axios';

function Index() {
  const { response, isLoading, error, fetchData } = useAxios('/photos/random?count=10');

  useEffect(() => {
    fetchData('/photos/random?count=10');
  }, []); 

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          <h1>Random Unsplash Images</h1>
          <div className="image-list">
            {response.map((image) => (
              <img key={image.id} src={image.urls.regular} alt={image.description} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default Index;
