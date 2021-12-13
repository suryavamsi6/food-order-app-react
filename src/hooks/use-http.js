import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    const response = await fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : "GET",
      headers: requestConfig.headers ? requestConfig.headers : {},
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
    });
    if (!response.ok) {
      setError("Something went wrong");
    }
    const data = await response.json();
    if (applyData) {
      applyData(data);
    }
    setIsLoading(false);
  }, []);
  return { sendRequest, isLoading, error };
};

export default useHttp;
