import { useEffect, useState } from 'react';

const token = localStorage.getItem('TOKEN');

const useGetFetch = url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(res => setData(res));
  }, [url]);

  return data;
};

export default useGetFetch;
