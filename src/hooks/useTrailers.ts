import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../models/Trailer";
import ApiClient from "../services/apiClient";

const useTrailers = (gameId: number) => {
  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery<Trailer[], Error>({
    queryKey: ["trailers", gameId],
    queryFn: () => apiClient.getAll(),
  });
};

export default useTrailers;
