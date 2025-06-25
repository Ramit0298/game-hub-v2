import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

// For Vite projects, use import.meta.env
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

export const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});

class ApiClient<T> {
  public endpoint: string;
  public signal?: AbortSignal;
  public requestConfig?: Record<string, any>;

  constructor(
    endpoint: string,
    signal?: AbortSignal,
    requestConfig?: Record<string, any>
  ) {
    this.endpoint = endpoint;
    this.signal = signal;
    this.requestConfig = requestConfig;
  }

  public async getAll() {
    const response = await axiosInstance.get<T>(this.endpoint, {
      signal: this.signal,
      ...this.requestConfig,
    });
    return response.data;
  }
}

export default ApiClient;
