import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import ApiClient from "../services/apiClient";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.length ? nextPage : undefined;
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    keepPreviousData: true, // Keep previous data while fetching new data
  });
};

export default useGames;
