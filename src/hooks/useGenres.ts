import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import Genre from "../models/Genre";
import ApiClient from "../services/apiClient";

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
