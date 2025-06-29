import { useQuery } from "@tanstack/react-query";
import Game from "../models/Game";
import ApiClient from "../services/apiClient";

const apiClient = new ApiClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });
};

export default useGame;
