import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../services/apiClient";
import useGameQueryStore from "../store/gameQueryStore";
import { Game } from "../models/Game";

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      // lastPage is an array of games; if empty, no more pages
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"), // 24 hours
    keepPreviousData: true, // Keep previous data while fetching new data
  });
};

export default useGames;
