import { useEffect, useState } from 'react';

const useGetFetch = (url, dataForm) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setData(dataForm || res));
  }, [url, dataForm]);

  return data;
};

export default useGetFetch;
