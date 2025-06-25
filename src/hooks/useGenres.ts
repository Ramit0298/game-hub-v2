import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ApiClient, { axiosInstance, FetchResponse } from "../services/apiClient";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new ApiClient<FetchResponse<Genre>>("/genres");

const useGenres = () => {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    // queryFn: async () => {
    //   const response = await axios.get(
    //     "https://api.rawg.io/api/genres?key=" +
    //       import.meta.env.VITE_RAWG_API_KEY
    //   );
    //   return response.data.results;
    // },
    // queryFn: () => apiClient.getAll().then((res) => res.results),
    queryFn: async () => {
      const res = await axiosInstance.get<FetchResponse<Genre>>("/genres");
      return res.data.results;
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: genres,
  });
};

export default useGenres;
