import React, { createContext, useState } from "react";
import Images from "../../components/Organisms/ImagesResult";
import useAxios from "../../hooks/axios";
import Navbar from "../../components/Organisms/Navbar";
import Footer from "../../components/Organisms/Footer";
import Skeleton from "../../components/Atoms/Skeleton";

export const ImageContext = createContext();

function Home() {
  const [searchImage, setSearchImage] = useState('');
  const randomQuery = 'random'; 
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=${randomQuery}&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Navbar />
    <Skeleton />
      <Images />
      <Footer />
    </ImageContext.Provider>
  );
}

export default Home;
