import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { axiosInstance, FetchResponse } from "../services/apiClient";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>("/games", [gameQuery], {
//     params: {
//       genres: gameQuery.genre?.id,
//       platforms: gameQuery.platform?.id,
//       ordering: gameQuery.sortOrder,
//       search: gameQuery.searchText,
//     },
//   });

const useGames = (gameQuery: GameQuery) => {
  return useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: async () => {
      const response = await axiosInstance.get<FetchResponse<Game>>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      });
      return response.data.results;
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    keepPreviousData: true, // Keep previous data while fetching new data
  });
};

export default useGames;
