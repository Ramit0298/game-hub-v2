import axios, { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

// For Vite projects, use import.meta.env
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});

class ApiClient<T> {
  public endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public async getAll(requestParams?: AxiosRequestConfig) {
    const response = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      requestParams
    );
    return response.data.results;
  }
}

export default ApiClient;
