import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import ApiClient from "../services/apiClient";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () => {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"), // 24 hours
    initialData: genres,
  });
};

export default useGenres;
