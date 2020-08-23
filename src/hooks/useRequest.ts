import { useEffect, useState } from "react";
import axios from "axios";
import { setIsLoading } from "../modules/news";

export function useGetRequest(url: string) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState(null);

  const doRequest = async (url: string) => {
    setError(null);
    try {
      setIsLoading(true);
      const res = await axios.get(url);
      setResponse(res);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    doRequest(url);
  }, [url]);
  return [response, loading, error];
}

export function usePostRequest(url: string, data: Object) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState(null);

  const doRequest = async (url: string) => {
    setError(null);
    try {
      setIsLoading(true);
      const res = await axios.post(url, data);
      setResponse(res);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    doRequest(url);
  }, [url, data]);
  return [response, loading, error];
}
