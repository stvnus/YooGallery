import React, { useEffect } from 'react';
import Navbar from '../../components/organism/Navbar';
import Footer from '../../components/organism/Footer';
import useAxios from '../../hooks/axios';

function Index() {
  const { response, isLoading, error, fetchData } = useAxios('/photos/random?count=12');

  useEffect(() => {
    fetchData('/photos/random?count=12');
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
          <h1 className="text-2xl font-bold mt-20 mb-2 text-center">Random Unsplash Images</h1>
          <div className="flex flex-wrap justify-center">
            {response.map((image) => (
              <div key={image.id} className="w-1/4 p-2">
                <img src={image.urls.small} alt={image.description} className="h-72 w-full object-cover rounded-lg shadow-md" />
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Index;
