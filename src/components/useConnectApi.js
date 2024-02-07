import { useState, useEffect } from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

const useConnectApi = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/${endpoint}`, {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        });
        const result = await response.json();

        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
};

export default useConnectApi;
