import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import Platform from "../models/Platform";
import ApiClient from "../services/apiClient";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"), // 24 hours
    initialData: platforms,
  });
};

export default usePlatforms;
