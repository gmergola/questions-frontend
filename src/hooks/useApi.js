import { useState, useEffect } from "react";

/**useApi: a hook to make api calls on the frontend */
const useApi = (apiCall, arg = null) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;

    const makeCall = async () => {
      const response = await apiCall(arg);

      if (mounted) {
        setData(response);
        setLoading(false);
      }
    };
    makeCall();
    return () => (mounted = false);
  }, [apiCall, arg]);

  return [loading, data];
};

export default useApi;