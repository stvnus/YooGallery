import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (param) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const unsplashAccessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY; // Ambil token API Unsplash dari variabel lingkungan Anda
  const baseURL = 'https://api.unsplash.com';
  axios.defaults.baseURL = baseURL;
  axios.defaults.headers.common['Authorization'] = `Client-ID ${unsplashAccessKey}`;

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios.get(url);
      setResponse(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);

  return {
    response,
    isLoading,
    error,
    fetchData: (url) => fetchData(url),
  };
};

export default useAxios;
