import { useState, useEffect } from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

const useConnectApi = (endpoint) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/${endpoint}`);
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data };
};

export default useConnectApi;
